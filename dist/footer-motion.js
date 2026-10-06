/* Ambient only: two precomposed SVG image layers, no pointer response. */
(() => {
  const footer = document.querySelector('[data-rx-footer]');
  if (!footer || footer.dataset.rxInitialized) return;
  footer.dataset.rxInitialized = 'true';
  const reduced = matchMedia('(prefers-reduced-motion: reduce)');
  const toggle = footer.querySelector('.rx-motion-toggle');
  const supportsMotion = 'IntersectionObserver' in window;
  let visible = false;
  let paused = false;
  const update = () => {
    footer.dataset.rxActive = String(visible && !document.hidden && !reduced.matches && !paused);
    if (toggle) {
      toggle.hidden = reduced.matches || !supportsMotion;
      toggle.setAttribute('aria-pressed', String(paused));
      toggle.textContent = paused ? 'Включить анимацию' : 'Приостановить анимацию';
    }
  };
  if (supportsMotion) {
    const observer = new IntersectionObserver(entries => {
      visible = entries.some(entry => entry.isIntersecting);
      update();
    }, { threshold: 0 });
    observer.observe(footer);
  }
  reduced.addEventListener('change', update);
  document.addEventListener('visibilitychange', update);
  toggle?.addEventListener('click', () => { paused = !paused; update(); });
  update();
})();
