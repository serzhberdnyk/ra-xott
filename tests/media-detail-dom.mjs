import fs from 'node:fs';
import vm from 'node:vm';
import assert from 'node:assert/strict';
import {execFileSync} from 'node:child_process';
import {fileURLToPath} from 'node:url';
import path from 'node:path';
const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'..');
class Element{
 constructor(tag='div',attrs={}){this.tagName=tag;this.attrs={...attrs};this.children=[];this.events={};this.hidden=false;this.open=false;this.style={setProperty:(k,v)=>this.style[k]=v};this.value='';this._text='';this._html='';this.dataset={};for(const [k,v] of Object.entries(attrs))if(k.startsWith('data-'))this.dataset[k.slice(5)]=v;this.classList={add:(...cs)=>this.className=[...new Set([...this.className.split(' ').filter(Boolean),...cs])].join(' '),remove:c=>this.className=this.className.split(' ').filter(x=>x!==c).join(' '),contains:c=>this.className.split(' ').includes(c),toggle:(c,f)=>{const next=f??!this.classList.contains(c);next?this.classList.add(c):this.classList.remove(c);return next}};}
 set id(v){this.attrs.id=v}get id(){return this.attrs.id||''}set className(v){this.attrs.class=v}get className(){return this.attrs.class||''}
 set textContent(v){this._text=String(v);this.children=[]}get textContent(){return this._text+this.children.map(c=>c.textContent).join(' ')}
 set innerHTML(v){this._html=String(v);this.children=[]}get innerHTML(){return this._html||this.textContent}
 append(...els){for(const el of els){if(el.parent)el.parent.children=el.parent.children.filter(x=>x!==el);this.children.push(el);el.parent=this;}}
 prepend(el){if(el.parent)el.parent.children=el.parent.children.filter(x=>x!==el);this.children.unshift(el);el.parent=this}
 replaceChildren(...els){this.children=[];this._text='';this.append(...els)}get firstElementChild(){return this.children[0]}get lastElementChild(){return this.children.at(-1)}
 setAttribute(k,v){this.attrs[k]=String(v)}getAttribute(k){return this.attrs[k]??null}removeAttribute(k){delete this.attrs[k]}
 addEventListener(k,f){(this.events[k]??=[]).push(f)}dispatch(k,e={}){for(const f of this.events[k]||[])f({target:this,...e})}
 getBoundingClientRect(){return {left:10,right:500,top:10,bottom:500}}showModal(){this.open=true}close(){this.open=false;this.dispatch('close')}focus(){this.dispatch('focus')}scrollIntoView(){this.scrolled=true}contains(el){return el===this||this.children.some(c=>c.contains(el))}
 querySelector(q){return this.querySelectorAll(q)[0]||null}
 querySelectorAll(q){const parts=q.split(' ');const simple=(el,s)=>s.split(',').some(sel=>{const id=sel.match(/#([\w-]+)/);if(id&&el.id!==id[1])return false;const cls=[...sel.matchAll(/\.([\w-]+)/g)].map(x=>x[1]);if(cls.some(c=>!el.classList.contains(c)))return false;const tag=sel.match(/^[\w-]+/);if(tag&&el.tagName!==tag[0])return false;const attr=sel.match(/\[([\w-]+)\]/);if(attr&&!(attr[1]==='open'?el.open:attr[1] in el.attrs))return false;return true});const matches=el=>{if(!simple(el,parts.at(-1)))return false;let p=el.parent;for(let i=parts.length-2;i>=0;i--){while(p&&!simple(p,parts[i]))p=p.parent;if(!p)return false;p=p.parent}return true};const result=[];const visit=el=>{for(const c of el.children){if(matches(c))result.push(c);visit(c)}};visit(this);return result}
}
function launch(source,htmlOverride){
const document=new Element('document');document.createElement=t=>new Element(t);document.createTextNode=t=>{const e=new Element('#text');e.textContent=t;return e};
const stack=[document],html=htmlOverride??fs.readFileSync(root+'/dist/index.html','utf8');
for(const token of html.match(/<[^>]+>|[^<]+/g)||[]){if(token.startsWith('<!'))continue;if(token.startsWith('</')){stack.pop();continue}if(token.startsWith('<')){const m=token.match(/^<([\w-]+)/);if(!m)continue;const attrs={};for(const a of token.matchAll(/([\w-]+)="([^"]*)"/g))attrs[a[1]]=a[2];const el=new Element(m[1],attrs);stack.at(-1).append(el);if(!['meta','link','br','img','input','path','circle'].includes(m[1]))stack.push(el)}else{const el=new Element('#text');el.textContent=token;stack.at(-1).append(el)}}

const counters={timers:0};
const context=vm.createContext({document,matchMedia:()=>({matches:true,addEventListener(){}}),setTimeout:()=>{counters.timers++;return 1},setInterval:()=>{counters.timers++;return 1},clearTimeout(){},clearInterval(){}});
vm.runInContext(source,context);
return {document,context,counters};
}

// Deterministic DOM tests supplement, but do not replace, browser rendering QA.
// GitHub snapshot of Sites v31; override for local isolated verification.
const baseline=process.env.MEDIA_BASELINE_REF || '69c1c1d5391d5cfac131dd1ebbcafa9c26055dcd';
const oldfile=p=>execFileSync('git',['show',baseline+':'+p],{cwd:root,maxBuffer:50*1024*1024});
const app=launch(fs.readFileSync(root+'/dist/app.js','utf8'));
const before=launch(oldfile('dist/app.js').toString(),oldfile('dist/index.html').toString());
const $=q=>app.document.querySelector(q),b$=q=>before.document.querySelector(q);
const snap=e=>({tag:e.tagName,attrs:e.attrs,text:e._text,html:e._html,style:Object.fromEntries(Object.entries(e.style).filter(([k,v])=>typeof v!=='function')),src:e.src,alt:e.alt,width:e.width,height:e.height,loading:e.loading,children:e.children.map(snap)});
const services=app.document.querySelectorAll('.service-grid .tile button');
const oldServices=before.document.querySelectorAll('.service-grid .tile button');
assert.equal(services.length,19);
let preservedDialogs=0;
for(let i=0;i<services.length;i++){
  assert.deepEqual(snap(services[i]),snap(oldServices[i]),'Service card changed');
  services[i].dispatch('click');oldServices[i].dispatch('click');
  const title=services[i].querySelector('h3').textContent;
  if(title!=='Размещение рекламы в журналах и онлайн-медиа'){
    if(title==='Мультимедиа и интерактив'){
      const content=snap($('#detail-content'));
      const stripped={...content,children:content.children.filter(c=>c.attrs?.class!=='service-hologram-example'&&c.text!=='Голографические проекции для сцен, презентаций и мероприятий')};
      assert.deepEqual(stripped,snap(b$('#detail-content')),'Existing multimedia content changed');
      const example=$('.service-hologram-example');assert(example);
      const image=example.querySelector('img');assert.equal(image.src,'assets/holographic-projection-user.png');assert.equal(image.width,1273);assert.equal(image.height,868);
      assert.equal($('#detail-content').querySelectorAll('ul').length,1);
      assert.equal($('#detail-content').querySelectorAll('li').filter(x=>x.textContent.includes('голограммы')).length,1);
      assert(example.textContent.includes('Пример голографической проекции'));
      assert(!example.textContent.includes('Сочи'));assert(!example.textContent.includes('наш'));
    }else{
      assert.deepEqual(snap($('#detail-content')),snap(b$('#detail-content')),'Other service detail changed');preservedDialogs++;
    }
    assert.equal($('#detail').getAttribute('aria-describedby'),'detail-content');
    assert(!$('#detail').classList.contains('service-detail-media'));
  }
  $('#detail-cta').dispatch('click');assert(!$('#detail').open&&$('#brief').open);$('#brief').close();b$('#detail').close();
}
const media=services.find(c=>c.querySelector('h3').textContent==='Размещение рекламы в журналах и онлайн-медиа');
media.dispatch('click');
assert($('#detail').open&&$('#detail').classList.contains('service-detail-media'));
assert.equal($('#detail').getAttribute('aria-describedby'),'media-detail-intro');
assert($('#media-detail-intro'));
assert.equal($('#detail').scrollTop,0);
const publications=$('#detail-content').querySelectorAll('details');
const names=['Дорогое удовольствие','Собака.ru','SCAPP','Стиль Жизни Sochi','ТЕМА','F/B magazine','The Village Юг'];
assert.equal(publications.length,7);
for(const [i,item] of publications.entries()){
  assert.equal(item.querySelector('summary').querySelector('.media-publication-name').textContent,names[i]);
  assert(!item.open);
  assert.equal(item.querySelectorAll('summary').length,1);
  assert(item.querySelector('.media-publication-body').textContent.length>450);
  assert.equal(item.querySelectorAll('[title]').length,0);
}
const fullText=$('#detail-content').textContent;
assert(fullText.includes('дата файла 19.04.2022'));
assert(fullText.includes('2017'));
assert(fullText.includes('05.10.2026'));
for(const price of ['110 000 ₽','300 000 ₽','110000','от 50 000'])assert(!fullText.includes(price),'Historical price was promoted');
assert(!fullText.includes('HOTABYCH'),'Unproven source identity was claimed');
assert.equal($('#detail-content').querySelectorAll('.media-format-overview').length,1);
assert.equal($('#detail-content').querySelectorAll('.media-publication-links a').length,5);
assert(publications[6].textContent.includes('Онлайн-медиа'));
assert(publications[6].textContent.includes('печатного распространения в источнике нет'));
assert(publications[1].textContent.includes('6 000 экз.'));
assert(publications[1].textContent.includes('5 000 экз.'));
assert(publications[2].textContent.includes('уникальных пользователей сайта в месяц'));
for(const link of $('#detail-content').querySelectorAll('.media-publication-links a')){
  assert(link.href.startsWith('https://'));
  assert.equal(link.target,'_blank');assert.equal(link.rel,'noopener noreferrer');
}
$('#detail-cta').dispatch('click');assert(!$('#detail').open&&$('#brief').open);$('#brief').close();
media.dispatch('click');assert.equal($('#detail').scrollTop,0);assert.equal($('#detail-content').querySelectorAll('details[open]').length,0);$('#detail').close();
for(const q of ['.hero','#screens','.founder','footer','#brief','.solution-grid','.project-grid'])assert.deepEqual(snap($(q)),snap(b$(q)),q+' changed');
const solutions=app.document.querySelectorAll('.solution-grid .tile button'),oldSolutions=before.document.querySelectorAll('.solution-grid .tile button');
assert.equal(solutions.length,6);
for(let i=0;i<solutions.length;i++){
  solutions[i].dispatch('click');oldSolutions[i].dispatch('click');
  assert.deepEqual(snap($('#detail-content')),snap(b$('#detail-content')),'Solution detail changed');
  $('#detail').close();b$('#detail').close();
}
const caseCard=$('.project-card');assert.equal(app.document.querySelectorAll('.project-card').length,1);
caseCard.dispatch('click');b$('.project-card').dispatch('click');assert.deepEqual(snap($('#detail-content')),snap(b$('#detail-content')));$('#detail').close();b$('#detail').close();
for(const card of [...services,...solutions,caseCard]){card.dispatch('pointerenter',{pointerType:'mouse'});assert(!$('#detail').open);assert(!card.events.pointerenter&&!card.events.mouseover);}
assert.equal(app.counters.timers,0);
const mapping=JSON.parse(fs.readFileSync(root+'/sources/media-service-sources.json','utf8'));assert.equal(mapping.publications.length,7);
const tracked=execFileSync('git',['ls-tree','-r','--name-only',baseline],{cwd:root,encoding:'utf8'}).trim().split('\n');let preservedFiles=0;
const mirrorMetadata=new Set(['README.md','RECOVERY.json','SHA256SUMS','.gitignore','history/README.md','history/SITES-HISTORY.json','history/SITES-VERSIONS.json']);
for(const file of tracked){if(mirrorMetadata.has(file)||['dist/app.js','dist/style.css'].includes(file))continue;assert(fs.readFileSync(root+'/'+file).equals(oldfile(file)),file+' changed');preservedFiles++;}
const result={baseline,status:'passed',serviceCardsPreserved:19,otherServiceDialogsPreserved:preservedDialogs,multimediaDetail:'Existing content preserved; one supplied holographic example added, no duplicate list entry',solutionCardsAndDetailsPreserved:6,projectCardsAndDetailsPreserved:1,mediaPublications:7,nativeDisclosures:'details/summary, initially closed',sourceDates:'file date explicit; current 2026 figures distinct',contacts:'all existing click-to-contact paths passed',hoverDialogs:0,timers:0,otherTrackedFilesBytePreserved:preservedFiles,browserQA:'Not covered by this deterministic DOM test; run browser rendering QA separately.'};
console.log(JSON.stringify(result,null,2));
