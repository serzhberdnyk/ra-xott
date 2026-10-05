const mediaServiceTitle='Размещение рекламы в журналах и онлайн-медиа';
const mediaServiceDescription='Рекламные полосы, развороты, имиджевые статьи и спецпроекты в журналах и онлайн-медиа. Подбираем издание и формат под вашу аудиторию и задачу';
const websiteServiceTitle='Разработка сайтов для среднего и крупного бизнеса';
const websiteServiceDescription='Для среднего и крупного бизнеса разных направлений, включая промышленные предприятия';
const industryServiceTitle='Цифровая оптимизация промышленных предприятий';
const industryServiceDescription='Оптимизация рабочих процессов и адаптация сайта для выхода на новые рынки';
const marketplaceServiceTitle='Инфографика для маркетплейсов';
const marketplaceServiceDescription='Инфографика, коллажи и обработка фото для Wildberries, Ozon, Яндекс Маркета и AliExpress';
const robotServiceTitle='Аренда сервисных роботов';
const robotServiceDescription='Сервисные роботы для форумов, свадеб, банкетов, дней рождения, выставок и конференций. Дополнительно доступны доставка, техническое сопровождение и брендирование под мероприятие';
const signageServiceTitle='Световые вывески';
const signageServiceDescription='Световые объёмные буквы и вывески для бизнеса. Срок и условия гарантии согласовываем для конкретного проекта';
const brochureServiceTitle='Разработка макетов и буклетов';
const brochureServiceDescription='Макеты и буклеты для ресторанов и других компаний';
const smmServiceTitle='SMM и продвижение в соцсетях';
const smmServiceDescription='Продвижение компаний и проектов в социальных сетях';
const printServiceTitle='Полиграфия, сувениры и упаковка';
const slimServiceTitle='Световые SLIM-панели';
const slimServiceDescription='Продажа SLIM-панелей для оформления витрин и интерьеров торговых точек';
const ledServiceTitle='Продажа и установка LED-экранов';
const ledServiceDescription='Продажа и установка LED-экранов под задачи объекта. Состав оборудования и работ обсуждаем индивидуально';
const eventServiceTitle='Мероприятия и промоакции';
const promotionSolutionTitle='Продвижение мероприятия';
const tvRadioServiceTitle='Реклама на телевидении и радио';
const summitCaseTitle='Блокчейн-саммит на Роза Хуторе';
const summitCaseCampaign='В кампании использовали рекламу на ТНТ, СТС и местном телевидении, а также на радио';
const servicePhotoCredits={
  'МАФ и благоустройство':{
    subject:'На карточке: скамейки в парке Сосенки, Москва',
    author:'Барвенковский',
    source:'https://commons.wikimedia.org/wiki/File:Парк_Сосенки_в_Царицыно._Лавочки.JPG',
    license:'CC BY-SA 3.0',licenseUrl:'https://creativecommons.org/licenses/by-sa/3.0/',
    note:'Тематическая иллюстрация услуги, не проект RA XOTT. Фото кадрировано средствами CSS; исходный файл не изменён'
  },
  'Регистрация товарного знака':{
    subject:'На карточке: главное здание Роспатента, Москва',
    author:'Геннадий Зябловский',
    source:'https://commons.wikimedia.org/wiki/File:Rospatent1.jpg',
    license:'CC BY-SA 4.0',licenseUrl:'https://creativecommons.org/licenses/by-sa/4.0/',
    note:'Тематическая иллюстрация услуги, не проект агентства и не обозначение партнёрства с Роспатентом. Фото кадрировано средствами CSS; исходный файл не изменён'
  }
};
const compactServiceTitles=[websiteServiceTitle,industryServiceTitle,brochureServiceTitle,slimServiceTitle,smmServiceTitle,marketplaceServiceTitle,robotServiceTitle,signageServiceTitle,ledServiceTitle];
const services=[
  ['Видеоэкраны и динамическая реклама','Размещаем динамическую рекламу на цифровых билбордах и LED-экранах в Сочи и других городах России',['Подбираем площадки и график показов под задачи проекта']],
  [websiteServiceTitle,websiteServiceDescription,['Сайты, лендинги и интернет-магазины','SEO','Интернет-продвижение','Состав работ определяется под задачу']],
  [industryServiceTitle,industryServiceDescription,[]],
  [ledServiceTitle,ledServiceDescription,[]],
  ['Брендинг и дизайн','Фирменный стиль, брендбук и логотип Общий визуальный язык для коммуникаций и носителей',['Нейминг и слоганы','Логотип','Фирменный стиль','Брендбук','Дизайн рекламных материалов']],
  [smmServiceTitle,smmServiceDescription,[]],
  ['Наружная реклама и вывески','Видимые решения для пространства: от вывески до видеоэкрана',['Объёмные буквы и вывески','Видеоэкраны и контент','Широкоформатная и интерьерная печать','Согласование рекламных конструкций']],
  [signageServiceTitle,signageServiceDescription,[]],
  [slimServiceTitle,slimServiceDescription,['Кристалайты, фреймлайты и магнетики']],
  [printServiceTitle,'Печатные материалы и носители бренда с единым визуальным решением',['Календари, визитки и листовки','Меню, плейсметы и каталоги','Сувенирная продукция с нанесением','Упаковка и дизайн носителей']],
  [brochureServiceTitle,brochureServiceDescription,[]],
  [mediaServiceTitle,mediaServiceDescription,[]],
  [marketplaceServiceTitle,marketplaceServiceDescription,[]],
  ['Фото и видео','Визуальные материалы для бренда, продукта, события и цифровых каналов',['Фотопроизводство','Видео и монтаж','Контент для экранов']],
  [eventServiceTitle,'События, объединённые идеей и вниманием к деталям',['Мероприятия и конференции',tvRadioServiceTitle,'Флешмобы и промоакции','Оформление события','Помощь в организации фестивалей']],
  [robotServiceTitle,robotServiceDescription,[]],
  ['Мультимедиа и интерактив','Технологии и контент для взаимодействия с аудиторией',['Дополненная и виртуальная реальность (AR/VR)','Мэппинг, фасадные проекции и голограммы','Интерактивные столы и светодиодные фотозоны','Гобопроекции в помещении и на улице','Видеоконтент и экраны']],
  ['МАФ и благоустройство','Малые архитектурные формы для жилых комплексов и городских пространств',['Беседки','Лавочки','Детские площадки','Парклеты','Велопарковки','Кашпо']],
  ['Регистрация товарного знака','Сопровождение регистрации товарного знака в Роспатенте',['Предварительная проверка товарного знака','Подбор классов МКТУ','Подготовка и подача заявки','Сопровождение экспертизы и ответы на запросы','Состав работ и стоимость определяются индивидуально']]
];
const solutions=[['Запуск бренда и бизнеса','Собрать основу бренда, первые носители и цифровую точку входа',['Брендинг и дизайн','Сайт','Рекламные материалы']],['Открытие ресторана','Связать характер заведения, оформление и первое знакомство с гостями',['Айдентика','Вывеска и полиграфия','Фото и цифровая подача']],[promotionSolutionTitle,'Помочь аудитории узнать о событии и почувствовать его идею',[tvRadioServiceTitle,'Визуальная коммуникация','Фото, видео и оформление']],['Ребрендинг','Переосмыслить визуальную систему и последовательно перенести её на носители',['Фирменный стиль','Брендбук','Обновление носителей']],['Оформление объекта','Собрать наружное и внутреннее оформление в единую систему',['Вывески','Навигация и графика','Экранные форматы']],['Контент для маркетплейсов','Показать продукт понятно, последовательно и выразительно',['Предметная съёмка','Инфографика','Дизайн карточек']]];
const projects=[['New Wave','Комплексное оформление и продюсирование'],['Fight Nights','Брендинг, оформление, медиа'],[summitCaseTitle,tvRadioServiceTitle],['Частные проекты','Вывески, интерьер, полиграфия']];
const detail=document.querySelector('#detail');
function showDetail(title,text,items=[],kind='Направление'){
  document.querySelector('#detail-title').textContent=title;
  detail.classList.toggle('service-detail-compact',compactServiceTitles.includes(title));
  const box=document.querySelector('#detail-content');
  const p=document.createElement('p');
  p.textContent=title===marketplaceServiceTitle?'Создаём инфографику и коммерческие коллажи, обрабатываем товарные фотографии: цветокоррекция, замена фона, тексты, дополнительные изображения и значки. Стоимость рассчитывается индивидуально. Для начала нужны подробное ТЗ, качественные фотографии и обратная связь':text;
  box.replaceChildren(p);
  if(items.length){
    const ul=document.createElement('ul');
    items.forEach(t=>{const li=document.createElement('li');li.textContent=t;ul.append(li)});
    box.append(ul);
  }
  if(title===promotionSolutionTitle||title===eventServiceTitle||title===summitCaseTitle){
    const campaign=document.createElement('section');campaign.className='campaign-case';
    if(title!==summitCaseTitle){const heading=document.createElement('h3');heading.textContent=summitCaseTitle;campaign.append(heading)}
    const channels=document.createElement('p');channels.textContent=summitCaseCampaign;
    const result=document.createElement('p');result.className='campaign-result';result.textContent='1 000 ожидали · 2 000 гостей';
    const note=document.createElement('p');note.className='campaign-source-note';note.textContent='План и посещаемость указаны по данным агентства. Изображение на карточке: тематическая иллюстрация конференции';
    campaign.append(channels,result,note);box.append(campaign);
  }
  const credit=servicePhotoCredits[title];
  if(credit){
    const section=document.createElement('section');section.className='service-photo-credit';section.setAttribute('aria-label','Источник иллюстрации');
    const subject=document.createElement('p');subject.textContent=credit.subject;
    const line=document.createElement('p');line.append(document.createTextNode('Фото: '+credit.author+' · '));
    const source=document.createElement('a');source.href=credit.source;source.target='_blank';source.rel='noopener noreferrer';source.textContent='Источник';
    const license=document.createElement('a');license.href=credit.licenseUrl;license.target='_blank';license.rel='noopener noreferrer';license.textContent=credit.license;
    line.append(source,document.createTextNode(' · '),license);
    const note=document.createElement('p');note.textContent=credit.note;
    section.append(subject,line,note);box.append(section);
  }
  if(title==='Видеоэкраны и динамическая реклама'){
    const note=document.createElement('p');note.className='service-photo-credit';
    note.append(document.createTextNode('На карточке: экран на Эстонской улице, 39, Сочи. Иллюстрация формата размещения из '));
    const source=document.createElement('a');source.href='https://raxott.ru/wp-content/uploads/2025/04/ra-xott-videoekrany.pdf#page=3';source.target='_blank';source.rel='noopener noreferrer';source.textContent='архивной презентации RA XOTT, стр. 3';
    note.append(source,document.createTextNode('. Архивная фотография не подтверждает текущую доступность площадки'));box.append(note);
  }
  if(title===brochureServiceTitle){
    const note=document.createElement('p');note.textContent='Занимаемся с 2008 года';box.append(note);
  }
  if(title===slimServiceTitle){
    const label=document.createElement('p');label.textContent='Заявленные характеристики из предоставленных материалов';
    const list=document.createElement('ul');
    ['Яркость от 2000 лк','Равномерное свечение','Замена постера за 30 секунд','В комплекте всё необходимое для монтажа'].forEach(text=>{const item=document.createElement('li');item.textContent=text;list.append(item)});
    box.append(label,list);
  }
  if(title===signageServiceTitle||title===ledServiceTitle||title===brochureServiceTitle||title===slimServiceTitle||title===smmServiceTitle||title===printServiceTitle){
    const gallery=document.createElement('div');gallery.className='service-case-gallery';
    if(title===brochureServiceTitle)gallery.classList.add('brochure-case-gallery');
    if(title===slimServiceTitle)gallery.classList.add('slim-case-gallery');
    if(title===smmServiceTitle)gallery.classList.add('smm-case-gallery');
    if(title===printServiceTitle)gallery.classList.add('print-case-gallery');
    const cases=title===ledServiceTitle?[
      ['tile-led-mount','assets/led-installation-source.png','Монтажная конструкция LED-экрана',793,821,'Монтаж LED-экрана',''],
      ['tile-led-ready','assets/led-completed-source.png','Установленный LED-экран',791,835,'Установленный экран','']
    ]:title===brochureServiceTitle?[
      ['tile-brochure-cover','assets/brochure-beerburger-view-1.png','Буклет Beerburger Station: обложка и разворот',821,850,'Beerburger Station','Работа 2018 года, выполнена без использования искусственного интеллекта'],
      ['tile-brochure-menu','assets/brochure-beerburger-view-2.png','Буклет Beerburger Station: разворот меню',857,855,'Разворот меню',''],
      ['tile-brochure-front','assets/brochure-beerburger-view-3.png','Буклет Beerburger Station: обложка',860,859,'Обложка буклета',''],
      ['tile-brochure-corks','assets/brochure-corks-source.png','CORKS: винная карта, с логотипом Хоттабыч в исходном изображении',857,1069,'CORKS · Винная карта','']
    ]:title===slimServiceTitle?[
      ['tile-slim-frame','assets/slim-frame-source.png','Настенная световая панель: фреймлайт из предоставленных материалов',858,482,'Фреймлайт',''],
      ['tile-slim-crystal','assets/slim-crystal-source.png','Настенная световая панель: кристалайт из предоставленных материалов',846,479,'Кристалайт','']
    ]:title===smmServiceTitle?[
      ['tile-smm-beerburger','assets/smm-beerburger-source.png','Beerburger Station: представленные скриншоты с 164 и 2 954 подписчиками',1247,851,'Beerburger Station · пример продвижения, 2018 год','На представленных скриншотах: 164 → 2 954 подписчика. По публикации агентства — месяц работы']
    ]:title===printServiceTitle?[
      ['tile-print-beerburger','assets/print-beerburger-source.png','Исторический пример офсетного буклета Beerburger Station',1274,1075,'Beerburger Station · офсетная печать, 2018 год','Офсетная печать · 5 000 экземпляров. По публикации агентства от 5 августа 2018 года']
    ]:[
      ['tile-signage-bank','assets/post-bank-source.png','Световая вывеска «ПОЧТА БАНК»',805,643,'Почта Банк',''],
      ['tile-signage-restaurant','assets/signage-source.png','Световая вывеска ресторана «Есть хинкали • Пить вино» с водяными знаками HOTABYCH',1271,852,'Есть хинкали • Пить вино','Сочи. Световые объёмные буквы на подложке с европейскими диодами. В публикации о проекте указана гарантия 5 лет'],
      ['tile-signage-hermes','assets/hermes-source.png','Световая вывеска Hermès',792,631,'Hermès','Световая вывеска'],
      ['tile-signage-rasputin','assets/rasputin-source.png','Световая вывеска «РАСПУТИН» с водяными знаками HOTABYCH',856,635,'Распутин','Световая вывеска']
    ];
    cases.forEach(([className,src,alt,width,height,title,description])=>{
      const figure=document.createElement('figure');
      const image=document.createElement('div');image.className='service-case-image '+className;
      const crop=document.createElement('span');crop.className='tile-source-crop';
      const picture=document.createElement('img');picture.src=src;picture.alt=alt;picture.width=width;picture.height=height;
      crop.append(picture);image.append(crop);
      const caption=document.createElement('figcaption');
      const name=document.createElement('strong');name.textContent=title;caption.append(name);
      if(description){const copy=document.createElement('span');copy.textContent=description;caption.append(copy)}
      figure.append(image,caption);gallery.append(figure);
    });
    box.append(gallery);
  }
  if(title===marketplaceServiceTitle){
    const note=document.createElement('p');
    note.textContent='Включены промежуточные правки и 3 небольшие финальные корректировки';
    const badges=document.createElement('div');
    badges.className='service-badges';
    ['Более 8 лет опыта дизайнеров','Более 795 выполненных работ'].forEach(text=>{const badge=document.createElement('span');badge.textContent=text;badges.append(badge)});
    box.append(note,badges);
  }
  if(title!==mediaServiceTitle&&!compactServiceTitles.includes(title)){
    const note=document.createElement('p');
    note.textContent=kind==='Пример'?'Это иллюстрация визуальной подачи Реальные материалы, результаты и участие RA XOTT в проекте пока не подтверждены':'Состав работ, сроки и стоимость обсуждаются индивидуально';
    box.append(note);
  }
  detail.showModal();
}
// Cards expose details only through explicit button activation.
function labelDialogCard(button,heading,id){
  heading.id=id+'-title';
  button.setAttribute('aria-labelledby',heading.id);
  button.setAttribute('aria-haspopup','dialog');
  button.setAttribute('aria-controls','detail');
}
function makeTile(item,index){const el=document.createElement('article');el.className='tile';const b=document.createElement('button');const img=document.createElement('div');img.className='tile-image';img.style.backgroundPosition=`${(index%7)*100/6}% ${index<7?0:100}%`;img.setAttribute('aria-hidden','true');const h=document.createElement('h3');h.textContent=item[0];b.append(img,h);b.addEventListener('click',()=>showDetail(...item));el.append(b);return el}
const serviceImageFrames={'Видеоэкраны и динамическая реклама':1,'Брендинг и дизайн':0,'Наружная реклама и вывески':1,'Полиграфия, сувениры и упаковка':2,'Размещение рекламы в журналах и онлайн-медиа':3,[websiteServiceTitle]:4,[industryServiceTitle]:7,'Фото и видео':5,'Мероприятия и промоакции':6,'Мультимедиа и интерактив':7};
const servicePhotos={
  [websiteServiceTitle]:['assets/service-selected-01-web.jpg','Рабочее место с компьютерными мониторами',1400,933],
  [industryServiceTitle]:['assets/service-selected-02-industry.jpg','Промышленное оборудование в производственном цехе',1400,933],
  'Брендинг и дизайн':['assets/service-selected-03-branding.jpg','Веер цветовых образцов',1400,852],
  'Фото и видео':['assets/service-selected-04-film.jpg','Профессиональная кинокамера на съёмке',1400,933],
  'Мероприятия и промоакции':['assets/service-selected-05-events.jpg','Докладчик и аудитория на конференции',1400,1000],
  'Мультимедиа и интерактив':['assets/service-selected-06-multimedia.jpg','Световая инсталляция со светящимися нитями',1400,2100],
  'Наружная реклама и вывески':['assets/outdoor-sochi-airport.jpg','Рекламная конструкция у аэропорта Сочи',1323,993],
  'Видеоэкраны и динамическая реклама':['assets/service-selected-09-screens.jpg','Архивная иллюстрация рекламного LED-экрана на Эстонской улице, 39, Сочи',772,579],
  [robotServiceTitle]:['assets/bellabot-real-restaurant.jpg','Сервисный робот BellaBot',1208,809],
  [ledServiceTitle]:['assets/led-installation-source.png','Монтажная конструкция LED-экрана',793,821],
  'МАФ и благоустройство':['assets/service-selected-07-maf.jpg','Скамейки в парке Сосенки, Москва: тематическая иллюстрация благоустройства',3140,2096],
  'Регистрация товарного знака':['assets/service-selected-08-trademark.jpg','Главное здание Роспатента, Москва: тематическая иллюстрация услуги',472,472]
};
const screenshotCards={
  [marketplaceServiceTitle]:['tile-marketplace','assets/marketplace-source.png','Пример товарной инфографики на экране телефона',1285,924],
  [signageServiceTitle]:['tile-signage-bank','assets/post-bank-source.png','Световая вывеска «ПОЧТА БАНК»',805,643],
  [brochureServiceTitle]:['tile-brochure-cover','assets/brochure-beerburger-view-1.png','Буклет Beerburger Station: обложка и разворот',821,850],
  [slimServiceTitle]:['tile-slim-frame','assets/slim-frame-source.png','Настенная световая SLIM-панель',858,482],
  [smmServiceTitle]:['tile-smm-beerburger','assets/smm-beerburger-source.png','Beerburger Station: пример продвижения в соцсетях, 2018 год',1247,851]
};
const serviceCardIds={
  [mediaServiceTitle]:'media-card',
  [websiteServiceTitle]:'website-card',
  [industryServiceTitle]:'industry-card',
  [brochureServiceTitle]:'brochure-card',
  [slimServiceTitle]:'slim-card',
  [smmServiceTitle]:'smm-card',
  [marketplaceServiceTitle]:'marketplace-card',
  [robotServiceTitle]:'robot-card',
  [signageServiceTitle]:'signage-card',
  [ledServiceTitle]:'led-card',
  'МАФ и благоустройство':'maf-card',
  'Регистрация товарного знака':'trademark-card',
  'Видеоэкраны и динамическая реклама':'screen-placement-card'
};
const spriteColumns=[[2,270],[274,531],[535,816],[821,1097],[1102,1381],[1386,1645],[1650,1914]];
services.forEach(x=>{
  const frame=serviceImageFrames[x[0]],tile=makeTile(x,frame??0),img=tile.querySelector('.tile-image');
  if(frame!==undefined){
    const [left,right]=spriteColumns[frame%7],top=frame<7?2:412,width=right-left,height=frame<7?406:407;
    img.style.setProperty('--frame-ratio',`${width}/${height}`);
    img.style.setProperty('--frame-size',`${1916/width*100}% ${821/height*100}%`);
    img.style.setProperty('--frame-position',`${left/(1916-width)*100}% ${top/(821-height)*100}%`);
  }
  const photo=servicePhotos[x[0]];
  if(photo){
    img.classList.add('tile-photo');img.removeAttribute('aria-hidden');
    const picture=document.createElement('img');
    [picture.src,picture.alt,picture.width,picture.height]=photo;
    picture.loading='lazy';img.append(picture);
  }
  const screenshot=screenshotCards[x[0]];
  if(screenshot){
    img.classList.add(screenshot[0]);img.removeAttribute('aria-hidden');
    const crop=document.createElement('span');crop.className='tile-source-crop';
    const picture=document.createElement('img');
    [picture.src,picture.alt,picture.width,picture.height]=screenshot.slice(1);
    picture.loading='lazy';crop.append(picture);img.append(crop);
  }
  if(x[0]===mediaServiceTitle){
    img.classList.add('tile-media');img.removeAttribute('aria-hidden');
    const logo=document.createElement('img');logo.className='tile-media-logo';logo.src='assets/the-village-header.png';logo.alt='The Village+ | Юг';logo.loading='lazy';logo.width=697;logo.height=184;
    const sample=document.createElement('div');sample.className='tile-media-sample';
    const picture=document.createElement('img');picture.src='assets/the-village-page-branding.png';picture.alt='Пример брендированной страницы онлайн-медиа The Village из презентации';picture.loading='lazy';picture.width=776;picture.height=411;
    sample.append(picture);img.append(logo,sample);
  }
  const cardId=serviceCardIds[x[0]];
  if(cardId)labelDialogCard(tile.querySelector('button'),tile.querySelector('h3'),cardId);
  if(x[0]===marketplaceServiceTitle){
    const badges=document.createElement('div');badges.className='service-card-badges';
    ['Более 8 лет опыта дизайнеров','Более 795 выполненных работ'].forEach(text=>{const badge=document.createElement('span');badge.textContent=text;badges.append(badge)});
    tile.append(badges);
  }
  document.querySelector('.service-grid').append(tile);
});
function addCampaignImage(image){
  image.classList.add('campaign-image');image.removeAttribute('aria-hidden');image.style.backgroundImage='none';
  const picture=document.createElement('img');picture.src='assets/service-selected-05-events.jpg';picture.alt='Тематическая иллюстрация конференции, не фотография блокчейн-саммита';picture.width=1400;picture.height=1000;picture.loading='lazy';
  const badges=document.createElement('div');badges.className='campaign-channel-badges';
  const label=document.createElement('span');label.className='campaign-channel-label';label.textContent='Каналы кампании';badges.append(label);
  ['ТНТ','СТС'].forEach(text=>{const badge=document.createElement('span');badge.className='campaign-channel';badge.textContent=text;badges.append(badge)});
  image.append(picture,badges);
}
function addCampaignCaption(card,includeService=false){
  if(includeService){const label=document.createElement('p');label.className='campaign-card-service';label.textContent=tvRadioServiceTitle;card.append(label)}
  const note=document.createElement('p');note.className='campaign-card-note';note.textContent='Фото: иллюстрация конференции';card.append(note);
}
solutions.forEach((x,i)=>{
  const tile=makeTile(x,i+8);
  if(x[0]===promotionSolutionTitle){labelDialogCard(tile.querySelector('button'),tile.querySelector('h3'),'solution-card-'+i);addCampaignImage(tile.querySelector('.tile-image'));addCampaignCaption(tile.querySelector('button'),true)}
  document.querySelector('.solution-grid').append(tile);
});
projects.forEach((x,i)=>{const b=document.createElement('button');b.className='project-card';const img=document.createElement('div');img.className='project-picture';img.style.backgroundPosition=(i*100/3)+'% 50%';img.setAttribute('aria-hidden','true');const h=document.createElement('h3');h.textContent=x[0];const p=document.createElement('p');p.textContent=x[1];b.append(img,h,p);if(x[0]===summitCaseTitle){addCampaignImage(img);addCampaignCaption(b);labelDialogCard(b,h,'summit-project-card')}b.addEventListener('click',()=>showDetail(x[0],x[1],[],x[0]===summitCaseTitle?'Кейс':'Пример'));document.querySelector('.project-grid').append(b)});const grid=document.querySelector('.project-grid');document.querySelector('#project-next').addEventListener('click',()=>grid.append(grid.firstElementChild));document.querySelector('#project-prev').addEventListener('click',()=>grid.prepend(grid.lastElementChild));document.querySelector('#project-all').addEventListener('click',()=>showDetail('Проекты','Кейс блокчейн-саммита на Роза Хуторе: продвижение на телевидении и радио. Сведения предоставлены агентством. Остальные проекты пока показывают иллюстративную подачу и требуют подтверждения участия RA XOTT',projects.map(x=>x[0]),'Обзор'));
const about=()=>showDetail('RA XOTT','Рекламное агентство полного цикла из Сочи Рабочая структура объединяет брендинг, производство, размещение рекламы, digital, контент, события и мультимедиа',['Основательница - Любовь Безус','Состав команды и партнёров уточняется под проект','Личный проект основательницы - bezuslove']);document.querySelector('#about-open').addEventListener('click',about);
const brief=document.querySelector('#brief');document.querySelectorAll('.brief-open').forEach(b=>b.addEventListener('click',()=>brief.showModal()));document.querySelector('#detail-cta').addEventListener('click',()=>{detail.close();brief.showModal()});document.querySelectorAll('dialog').forEach(d=>{d.querySelector('.close').addEventListener('click',()=>d.close());d.addEventListener('click',e=>{if(e.target===d){const r=d.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)d.close()}})});
