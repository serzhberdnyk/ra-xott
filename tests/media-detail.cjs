const assert = require('node:assert/strict');
const fs = require('node:fs/promises');
const path = require('node:path');
const { chromium } = require('playwright');

// Run with a local read-only HTTP server rooted at dist; no external requests or account actions.
const base = process.env.MEDIA_QA_URL || 'http://127.0.0.1:4199';
const output = process.env.MEDIA_QA_OUTPUT || '/tmp/ra-xott-media-detail-qa';
const expected = ['Дорогое удовольствие', 'Собака.ru', 'SCAPP', 'Стиль Жизни Sochi', 'ТЕМА', 'F/B magazine', 'The Village Юг'];
const report = [];

(async () => {
  await fs.mkdir(output, { recursive: true });
  const browser = await chromium.launch({ executablePath: process.env.CHROMIUM_PATH || '/usr/bin/chromium', headless: true, args: ['--no-sandbox'] });
  try {
    for (const [label, width, height] of [['desktop', 1440, 1000], ['mobile', 390, 844], ['narrow', 320, 640]]) {
      const page = await browser.newPage({ viewport: { width, height } });
      const errors = [];
      page.on('pageerror', error => errors.push(error.message));
      await page.goto(base, { waitUntil: 'networkidle' });
      assert.equal(await page.locator('.service-grid .tile').count(), 19);
      assert.equal(await page.locator('.projects .project-card').count(), 1);
      assert.equal(await page.locator('.project-nav').count(), 0);
      assert.equal(await page.locator('img[src="assets/trademark-rospatent-user.png"]').count(), 1);
      await page.locator('#media-card-title').click();
      const dialog = page.locator('#detail');
      assert.equal(await dialog.getAttribute('aria-describedby'), 'media-detail-intro');
      assert.deepEqual(await page.locator('.media-publication-name').allTextContents(), expected);
      assert.equal(await page.locator('.media-publication[open]').count(), 0);
      assert.equal(await dialog.locator('[title]').count(), 0, 'No hover-text dependency');
      await dialog.screenshot({ path: path.join(output, `${label}-overview.png`) });
      const summary = page.locator('.media-publication summary').first();
      await summary.focus();
      await page.keyboard.press('Enter');
      assert.equal(await page.locator('.media-publication[open]').count(), 1);
      assert.equal(await page.locator('.media-publication-body').first().isVisible(), true);
      await summary.screenshot({ path: path.join(output, `${label}-expanded-summary.png`) });
      await dialog.screenshot({ path: path.join(output, `${label}-expanded.png`) });
      // Exercise every native disclosure and its complete body before checking overflow.
      const summaries = page.locator('.media-publication summary');
      for (let i = 1; i < 7; i++) await summaries.nth(i).click();
      assert.equal(await page.locator('.media-publication[open]').count(), 7);
      const geometry = await dialog.evaluate(el => ({
        width: el.clientWidth, scrollWidth: el.scrollWidth,
        height: el.clientHeight, scrollHeight: el.scrollHeight,
        bodyWidth: document.documentElement.clientWidth,
        bodyScrollWidth: document.documentElement.scrollWidth,
        horizontalOverflow: [...el.querySelectorAll('.media-publication-body, .media-publication-metrics, .media-format-overview')].filter(node => node.scrollWidth > node.clientWidth + 1).map(node => node.className)
      }));
      assert.ok(geometry.scrollWidth <= geometry.width + 1, 'No horizontal dialog overflow');
      assert.ok(geometry.bodyScrollWidth <= geometry.bodyWidth + 1, 'No horizontal page overflow');
      assert.deepEqual(geometry.horizontalOverflow, []);
      assert.ok(geometry.scrollHeight > geometry.height, 'Long content has a scrollable dialog');
      assert.equal(await page.locator('.media-publication-links a').count(), 5);
      const text = await dialog.textContent();
      assert.ok(text.includes('19.04.2022'));
      assert.ok(text.includes('2017'));
      assert.ok(text.includes('05.10.2026'));
      assert.equal(/\b110000\b|110 000 ₽|300 000 ₽/.test(text), false, 'Old prices not promoted');
      await page.locator('#detail-cta').click();
      assert.equal(await page.locator('#brief').evaluate(el => el.open), true);
      assert.equal(await page.locator('.messenger-actions a').first().getAttribute('href'), 'https://t.me/bezuslovno_love');
      assert.equal(await page.locator('.messenger-actions a').last().getAttribute('href'), 'https://wa.me/79189022231');
      await page.keyboard.press('Escape');
      assert.equal(await page.locator('#brief').evaluate(el => el.open), false);
      assert.equal(await page.locator('#detail').evaluate(el => el.open), false);
      // Reopen starts compact; other service dialogs retain their previous layout and description.
      await page.locator('#media-card-title').click();
      assert.equal(await page.locator('.media-publication[open]').count(), 0);
      assert.equal(await dialog.evaluate(el => el.scrollTop), 0);
      await page.keyboard.press('Escape');
      await page.locator('#website-card-title').click();
      assert.equal(await page.locator('#detail').getAttribute('aria-describedby'), 'detail-content');
      assert.equal(await page.locator('.media-publication').count(), 0);
      assert.equal(await page.locator('#detail').evaluate(el => el.classList.contains('service-detail-compact')), true);
      assert.equal(await page.locator('#detail').evaluate(el => el.classList.contains('service-detail-media')), false);
      assert.deepEqual(errors, []);
      report.push({ viewport: label, status: 'passed', publications: 7, geometry, pageErrors: errors });
      await page.close();
    }
  } finally { await browser.close(); }
  await fs.writeFile(path.join(output, 'checks.json'), JSON.stringify(report, null, 2));
  console.log(JSON.stringify(report, null, 2));
})().catch(error => { console.error(error); process.exitCode = 1; });
