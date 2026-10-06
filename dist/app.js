const mediaServiceTitle='Размещение рекламы в журналах и онлайн-медиа';
const mediaServiceDescription='Рекламные полосы, развороты, имиджевые статьи и спецпроекты в журналах и онлайн-медиа. Подбираем издание и формат под вашу аудиторию и задачу';
// Publication formats are a curated catalogue, not a promise of current inventory.
// Provenance and archive/current distinctions are recorded in sources/media-service-sources.json.
const mediaPublications=[
  {
    name:'Дорогое удовольствие',type:'Печатный журнал',geography:'Сочи и Красная Поляна',
    teaser:'Обеспеченная аудитория, бизнес, мода и стиль жизни',status:'Архивный каталог',
    audience:'В архивной презентации издание ориентировано на обеспеченных читателей, собственников бизнеса, топ-менеджеров и госслужащих. Подходит для знакомства с брендом, продуктом или услугой в lifestyle-контексте.',
    distribution:'В архиве перечислены бутики и магазины одежды, ювелирные и интерьерные салоны, рестораны, отели, SPA и фитнес-центры, автосалоны и бизнес-точки Сочи и Красной Поляны.',
    groups:[{title:'Печатные форматы из архива',items:[
      'Рекламный макет на одну полосу или разворот',
      'Рекламная статья на 1, 2 или 3 полосы',
      'Первый разворот, 2–6-й субразвороты и 1–4-я субполосы',
      '3-я и 4-я обложки, гейтфолдер — раскрывающаяся вкладка',
      'Твёрдая вкладка на бумаге 250 г'
    ]}],
    metrics:{label:'Аудитория в архивной презентации (дата файла 19.04.2022)',items:[
      ['83%','обеспеченные и высокообеспеченные читатели'],
      ['73%','собственники бизнеса, топ-менеджеры и госслужащие'],
      ['57% / 43%','женщины / мужчины'],
      ['87%','ведут активный образ жизни и следят за внешностью']
    ],note:'Стр. 2–3 архива. Дата исследования, выборка и методика не указаны. Текущий сочинский выпуск и возможность размещения уточняются у издателя.'}
  },
  {
    name:'Собака.ru',type:'Печатный журнал и онлайн-медиа',geography:'Сочи и Краснодар',
    teaser:'Городское lifestyle- и fashion-издание: люди, еда, стиль',status:'Есть данные 2026',
    audience:'Городская аудитория, интересующаяся модой, культурой, ресторанами и героями города. Печатное размещение можно рассматривать отдельно от материалов на сайте.',
    distribution:'В архиве указано бесплатное распространение в городских заведениях Сочи и Краснодара. Конкретные актуальные точки, выпуск и географию кампании согласовываем при подборе.',
    groups:[{title:'Печатные форматы из архива',items:[
      '1/2 полосы, целая полоса и разворот',
      'Лицевая, 3-я и 4-я обложки; разворот в начале журнала',
      'Гейтфолд, плотная двусторонняя страница, вкладка продукции в тираж',
      'Рубрика «Портреты»: съёмка и создание образа с фотографом и стилистами',
      'Заметки и публикации в тематических рубриках: еда, интервью, светская хроника'
    ]},{title:'Онлайн-форматы из архива',items:[
      'Промопроект или фотопост: статья с фотографиями и активными ссылками',
      'Лонгрид или спецпроект с видео, интервью, графиками и исследованиями',
      'Сквозной баннер и брендирование сайта'
    ]}],
    metrics:{label:'Региональный тираж по медиакиту издателя 2026',items:[
      ['6 000 экз.','Сочи'],['5 000 экз.','Краснодар']
    ],note:'Это тиражи двух региональных изданий, а не охват читателей. Печатные выпуски 2026 подтверждены. С июня 2026 у сочинского издания новый издатель; текущие рекламные условия согласовываются заново.'},
    links:[['Медиакит 2026','https://static.sobaka.ru/uploads/pdf/MEDIA-KIT_Sobaka_RU_2026.pdf'],['Выпуски Сочи','https://www.sobaka.ru/sochi/magazine/archive'],['Рекламодателям','https://www.sobaka.ru/sochi/marketing']]
  },
  {
    name:'SCAPP',type:'Печатный журнал, сайт и Telegram',geography:'Сочи',
    teaser:'Гастрономия, городская жизнь, бизнес и архитектура',status:'Есть данные издателя',
    audience:'Городское медиа о Сочи: гастрономия, городская жизнь, бизнес и архитектура. Позволяет выбрать имиджевое присутствие в печати, подробный материал на сайте или отдельный цифровой формат.',
    distribution:'В официальном списке распространения журнала указаны рестораны, отели и санатории, магазины, салоны, автоцентры и private banking. Печатную географию и цифровую аудиторию рассматриваем отдельно.',
    groups:[{title:'Печатные форматы на странице издателя',items:[
      'Имиджевые размещения и развороты',
      'Публикации, спецпроекты и тематические номера'
    ]},{title:'Онлайн и дополнительные площадки',items:[
      'Большие материалы, новости, гиды и партнёрские публикации на сайте',
      'Спецпроекты, Telegram и офлайн-события — по индивидуальному запросу'
    ]},{title:'Дополнительные digital-форматы из архива',items:[
      'Статья до 3 000 знаков из материалов клиента или с работой журналиста и фотографа',
      'Рекламная новость и публикация в тематическом обзоре',
      'Баннеры 1050 × 150 и 300 × 500 px, слайдер',
      'Брендирование страниц и рубрик, спонсорство рубрик, product placement'
    ]}],
    metrics:{label:'Показатели на официальной странице издателя, проверка 05.10.2026',items:[
      ['5 000 экз.','тираж печатного журнала'],
      ['90 000','уникальных пользователей сайта в месяц'],
      ['5 000','подписчиков Telegram']
    ],note:'Показатели заявлены издателем; дата их измерения на странице не указана. Архивные digital-форматы приведены по стр. 5 PDF с датой файла 19.04.2022, где есть блок медиакита 2017. Технические требования уточняются перед размещением.'},
    links:[['Рекламодателям SCAPP','https://sochi.scapp.ru/reklamodatelyam/'],['Распространение журнала','https://sochi.scapp.ru/tochki-rasprostraneniya-zhurnala-scapp/']]
  },
  {
    name:'Стиль Жизни Sochi',type:'Печатный журнал',geography:'Сочи',
    teaser:'Персоны, путешествия, бизнес, мода и искусство',status:'Архивный каталог',
    audience:'В архиве журнал обращается к сочинцам и гостям курорта. Рубрики: «Персона», «Путешествия», «Бизнес», «Мода», «Авто», «Гурмэ», «Кино», «Искусство» и «Светская хроника».',
    distribution:'В архивной презентации заявлено более 350 мест распространения в Сочи. Точного перечня адресов на странице нет; действующую сеть распространения нужно подтвердить у издателя.',
    groups:[{title:'Печатные форматы из архива',items:[
      'Полоса и имиджевый разворот; первый, второй и третий развороты',
      '3-я и 4-я обложки, гейтфолдер, плотная полоса 250 г',
      'Полоса после слова редактора, новостная заметка на 1/2 полосы',
      'Рекламное обозрение на 3 или 5 полос, участие в рубрике',
      'Фотопроект на 6 полос и разворот в «Светской хронике»',
      'Вклейки, специальные вложения и тематические приложения'
    ]}],
    metrics:{label:'Основные возрастные группы в архиве (дата файла 19.04.2022)',items:[
      ['41%','читатели 28–37 лет'],['21%','читатели 20–27 лет'],['19%','читатели 38–48 лет']
    ],note:'Стр. 6 архива. Дата исследования и методика не указаны. Текущий выпуск и рекламная доступность не подтверждены; условия уточняются перед подбором.'}
  },
  {
    name:'ТЕМА',type:'Газета',geography:'Сочи',
    teaser:'Новости, афиша, мода, интервью и гастрономия',status:'Архивный каталог',
    audience:'В презентации издание названо «глянцевой газетой». Среди рубрик — новости, beauty, гаджеты, кино и музыка, афиша, мода, интервью и гурмэ. Демографический состав аудитории в источнике не указан.',
    distribution:'В архивном предложении указана сочинская площадка. Отдельный тираж и адреса распространения на стр. 6 не приведены.',
    groups:[{title:'Печатные форматы из архива',items:[
      '1/4 полосы, 1/2 полосы или целая полоса',
      'Разворот и первый разворот',
      '3-я и 4-я обложки'
    ]}],
    note:'Форматы приведены по стр. 6 архивной презентации (дата файла 19.04.2022). Текущий выпуск и возможность размещения требуют подтверждения у издателя.'
  },
  {
    name:'F/B magazine',type:'Печатный журнал',geography:'Сочи и Красная Поляна',
    teaser:'Фотоистории, имиджевые публикации и светская хроника',status:'Архивный каталог',
    audience:'В архиве заявлен средний возраст читателя 32 года. В рекламном предложении представлены большие фотоистории, фотопроекты и светская хроника.',
    distribution:'Архивный перечень охватывает рестораны и кафе, отели и горные курорты, бутики, интерьерные и ювелирные салоны, SPA, фитнес и клиники, автосалоны, жилые комплексы и агентства недвижимости. География — Сочи и Красная Поляна.',
    groups:[{title:'Печатные форматы из архива',items:[
      'Полоса в первой трети издания или без фиксированной позиции',
      'Первый, второй и обычный развороты',
      'Плотная двусторонняя вставка; 3-я и 4-я обложки; 3-я обложка вместе с полосой',
      'Фальш-обложка — дополнительная рекламная обложка',
      'Обложка с фотопроектом на 8 полос; фотоистории на 6 или 8 полос',
      'Публикация в «Светской хронике»'
    ]}],
    metrics:{label:'Распространение в архивной презентации (дата файла 19.04.2022)',items:[
      ['5 000 экз.','заявленный тираж'],['12','выпусков в год'],['Более 120','постоянных точек, без сезонных']
    ],note:'Стр. 7–8 архива. Тираж, периодичность и точки не актуализированы; выборка для среднего возраста не указана. Текущие условия и доступность размещения уточняются у издателя.'}
  },
  {
    name:'The Village Юг',type:'Онлайн-медиа',geography:'Региональная площадка «Юг»',
    teaser:'Нативные материалы, бизнес-кейсы, спецпроекты и баннеры',status:'Архивный каталог',
    audience:'В архиве представлены рубрики о городе, людях, бизнесе, развлечениях, еде и стиле. Региональный охват и состав аудитории именно The Village Юг в источнике не указаны.',
    distribution:'Размещение на сайте: главная страница, рубрики, страницы материалов и обсуждений. Это цифровая площадка; печатного распространения в источнике нет.',
    groups:[{title:'Материалы и спецпроекты из архива',items:[
      'Промоновость «Коротко» с фотографией, контактным блоком и ссылками',
      '«Слово шефа»: концепция ресторана, сезонные блюда, завтраки и бизнес-ланчи',
      'Дайджест из 5–10 продуктов с описаниями и ссылками',
      'Фотопост из 10 тематических фотографий с интеграцией бренда',
      'Бизнес-кейс с цифрами и комментариями экспертов',
      'Спецпроект с индивидуальной вёрсткой; нативные форматы «Процесс», «Тест», «Детали», «Цифры»'
    ]},{title:'Баннеры и брендирование из архива',items:[
      'Баннер 990 × 250 px над обсуждениями или внизу материалов',
      'Брендирование страницы: фон и баннер 300 × 500 px на компьютере',
      'Мобильный halfscreen-баннер 620 × 500 px'
    ]}],
    note:'Стр. 9 архивной презентации (дата файла 19.04.2022). Текущая возможность размещения The Village Юг не подтверждена. Исторический график трафика сайтов Look At Media за 2015–2017 не используется как региональный охват этой площадки.'
  }
];
function mediaCopy(text,className=''){
  const p=document.createElement('p');p.textContent=text;if(className)p.className=className;return p;
}
function appendMediaServiceDetail(box){
  const overview=document.createElement('section');overview.className='media-format-overview';overview.setAttribute('aria-label','Форматы размещения');
  [
    ['В печати','Полосы и развороты, обложки, имиджевые статьи, интервью, фотоистории и специальные вложения. Выбор зависит от издания и номера.'],
    ['В онлайн-медиа','Баннеры, промоновости, фотопосты, лонгриды, бизнес-кейсы, спецпроекты и брендирование страниц. Формат подбирается под задачу и аудиторию.']
  ].forEach(([title,text])=>{
    const section=document.createElement('section');const h=document.createElement('h3');h.textContent=title;section.append(h,mediaCopy(text));overview.append(section);
  });
  box.append(overview);
  const heading=document.createElement('h3');heading.className='media-catalog-heading';heading.textContent='Издания и площадки';box.append(heading);
  box.append(mediaCopy('Откройте издание, чтобы посмотреть аудиторию, географию и конкретные форматы. Каталог включает архивные предложения из презентации RA XOTT (дата файла 19.04.2022); свежие сведения издателей отмечены отдельно. Стоимость, выпуск и доступность согласовываются перед размещением.','media-catalog-note'));
  const catalog=document.createElement('div');catalog.className='media-publication-list';
  mediaPublications.forEach(publication=>{
    const item=document.createElement('details');item.className='media-publication';
    const summary=document.createElement('summary');
    const title=document.createElement('span');title.className='media-publication-name';title.textContent=publication.name;
    const meta=document.createElement('span');meta.className='media-publication-meta';meta.textContent=publication.type+' · '+publication.geography;
    const teaser=document.createElement('span');teaser.className='media-publication-teaser';teaser.textContent=publication.teaser;
    const status=document.createElement('span');status.className='media-publication-status';status.textContent=publication.status;
    summary.append(title,meta,teaser,status);item.append(summary);
    const body=document.createElement('div');body.className='media-publication-body';
    [['Аудитория и тематика',publication.audience],['География и распространение',publication.distribution]].forEach(([label,text])=>{
      const section=document.createElement('section');const h=document.createElement('h4');h.textContent=label;section.append(h,mediaCopy(text));body.append(section);
    });
    publication.groups.forEach(group=>{
      const section=document.createElement('section');const h=document.createElement('h4');h.textContent=group.title;
      const list=document.createElement('ul');group.items.forEach(text=>{const li=document.createElement('li');li.textContent=text;list.append(li)});section.append(h,list);body.append(section);
    });
    if(publication.metrics){
      const section=document.createElement('section');section.className='media-publication-metrics';
      const h=document.createElement('h4');h.textContent=publication.metrics.label;
      const metrics=document.createElement('dl');
      publication.metrics.items.forEach(([value,label])=>{
        const group=document.createElement('div');const dt=document.createElement('dt');dt.textContent=label;const dd=document.createElement('dd');dd.textContent=value;group.append(dt,dd);metrics.append(group);
      });
      section.append(h,metrics,mediaCopy(publication.metrics.note,'media-source-note'));body.append(section);
    }
    if(publication.note)body.append(mediaCopy(publication.note,'media-source-note'));
    if(publication.links){
      const links=document.createElement('div');links.className='media-publication-links';links.setAttribute('aria-label','Официальные источники '+publication.name);
      publication.links.forEach(([title,url])=>{const a=document.createElement('a');a.textContent=title;a.href=url;a.target='_blank';a.rel='noopener noreferrer';links.append(a)});body.append(links);
    }
    item.append(body);catalog.append(item);
  });
  box.append(catalog);
  const next=document.createElement('section');next.className='media-selection-note';const h=document.createElement('h3');h.textContent='Подберём размещение под вашу задачу';
  next.append(h,mediaCopy('Расскажите, что продвигаете, в каком городе и к какой дате. Для подбора пригодятся описание аудитории, ориентир по бюджету, фотографии и материалы бренда. Сравним площадки и форматы, уточним действующие условия у издателя.'));
  box.append(next);
}
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
// Real portfolio materials only. Dates refer to publications unless the project year is confirmed.
const projects=[
  {
    "id": "summit",
    "title": "Блокчейн-саммит на Роза Хуторе",
    "service": "Реклама на телевидении и радио",
    "summary": "1 000 ожидали · 2 000 гостей",
    "sourceNote": "По данным агентства",
    "text": "Реклама на телевидении и радио",
    "summit": true
  },
  {
    "id": "post-bank",
    "title": "Почта Банк",
    "service": "Световая вывеска",
    "summary": "Фасадная вывеска и монтаж",
    "sourceNote": "Пример из предоставленных материалов",
    "text": "Пример световой фасадной вывески с объёмными буквами. На фотографиях показаны готовое оформление, процесс монтажа и крупный ракурс букв.",
    "images": [
      {
        "className": "tile-signage-bank",
        "src": "assets/optimized/post-bank-source.webp",
        "alt": "Готовая световая фасадная вывеска «ПОЧТА БАНК»",
        "width": 805,
        "height": 643,
        "label": "Готовая вывеска"
      },
      {
        "className": "",
        "src": "assets/optimized/post-bank-installation-source.webp",
        "alt": "Монтажник работает над объёмными буквами «ПОЧТА БАНК»",
        "width": 782,
        "height": 634,
        "label": "Процесс монтажа"
      },
      {
        "className": "",
        "src": "assets/optimized/post-bank-detail-source.webp",
        "alt": "Крупный ракурс световых объёмных букв «ПОЧТА БАНК»",
        "width": 776,
        "height": 643,
        "label": "Крупный ракурс букв"
      }
    ]
  },
  {
    "id": "hermes",
    "title": "Hermès",
    "service": "Световая вывеска",
    "summary": "Подсвеченные буквы на фасаде",
    "sourceNote": "Пример из предоставленных материалов",
    "text": "Пример световой вывески Hermès. Три фотографии показывают подсвеченные буквы на фасаде: общий вид, боковой ракурс и крупный план.",
    "images": [
      {
        "className": "tile-signage-hermes",
        "src": "assets/optimized/hermes-source.webp",
        "alt": "Крупный фронтальный ракурс световой вывески Hermès",
        "width": 792,
        "height": 631,
        "label": "Световые буквы"
      },
      {
        "className": "",
        "src": "assets/optimized/hermes-facade-source.webp",
        "alt": "Ночной общий вид фасада с подсвеченными буквами Hermès",
        "width": 791,
        "height": 640,
        "label": "Общий вид фасада"
      },
      {
        "className": "",
        "src": "assets/optimized/hermes-side-source.webp",
        "alt": "Боковой ракурс фасада и световых букв Hermès",
        "width": 785,
        "height": 619,
        "label": "Боковой ракурс"
      }
    ]
  },
  {
    "id": "khinkali-wine",
    "title": "Есть хинкали • Пить вино",
    "service": "Световая вывеска ресторана",
    "summary": "Сочи · объёмные буквы на подложке",
    "sourceNote": "Публикация от 14 декабря 2020 года",
    "text": "Световая вывеска ресторана «Есть хинкали • Пить вино» в Сочи. В публикации от 14 декабря 2020 года описаны объёмные буквы на подложке с европейскими диодами.",
    "facts": [
      "Для этого исторического проекта в публикации указан гарантийный срок 5 лет"
    ],
    "notes": [
      "На исходной фотографии сохранены водяные знаки HOTABYCH. «Хоттабыч» — прежнее название агентства"
    ],
    "images": [
      {
        "className": "tile-signage-restaurant",
        "src": "assets/optimized/signage-source.webp",
        "alt": "Световая вывеска «Есть хинкали • Пить вино» в Сочи; исходная публикация с водяными знаками HOTABYCH",
        "width": 1271,
        "height": 852,
        "label": "Вывеска и исходная публикация"
      }
    ]
  },
  {
    "id": "rasputin",
    "title": "Распутин",
    "service": "Световая вывеска",
    "summary": "Объёмные буквы на фасаде",
    "sourceNote": "Пример из предоставленных материалов",
    "text": "Пример световой вывески «Распутин»: объёмные буквы над входом и готовое фасадное оформление.",
    "notes": [
      "На исходной фотографии сохранены водяные знаки HOTABYCH. «Хоттабыч» — прежнее название агентства"
    ],
    "images": [
      {
        "className": "tile-signage-rasputin",
        "src": "assets/optimized/rasputin-source.webp",
        "alt": "Фасад со световой вывеской «РАСПУТИН» и исходными водяными знаками HOTABYCH",
        "width": 856,
        "height": 635,
        "label": "Готовая световая вывеска"
      }
    ]
  },
  {
    "id": "beerburger",
    "title": "Beerburger Station",
    "service": "Дизайн буклета, офсетная печать и SMM",
    "summary": "2018 · тираж 5 000 экземпляров",
    "sourceNote": "Макеты и публикации агентства 2018 года",
    "text": "Объединённый пример работы для Beerburger Station: дизайн буклета, офсетная печать и ведение аккаунта в соцсетях. Пользователь подтвердил, что макеты выполнены в 2018 году без использования искусственного интеллекта.",
    "facts": [
      "Дизайн буклета: обложка и развороты с меню",
      "Офсетная печать: 5 пачек по 1 000 буклетов, всего 5 000 экземпляров. Публикация от 5 августа 2018 года",
      "SMM: на представленных скриншотах аккаунта — 164 → 2 954 подписчика. Публикация от 13 августа 2018 года",
      "По подписи SMM-публикации: месяц ведения Instagram и 565 просмотров профиля"
    ],
    "notes": [
      "В подписи SMM-поста указано «2 700» привлечённых людей. Эти сведения отличаются от чисел на скриншотах; они сохранены как данные исторической публикации",
      "Цены, телефон и предложения ресторана на макетах относятся к исходным материалам 2018 года"
    ],
    "images": [
      {
        "className": "tile-brochure-cover",
        "src": "assets/optimized/brochure-beerburger-view-1.webp",
        "alt": "Буклет Beerburger Station: обложка и разворот, работа 2018 года без ИИ",
        "width": 821,
        "height": 850,
        "label": "Буклет · обложка и разворот"
      },
      {
        "className": "tile-brochure-menu",
        "src": "assets/optimized/brochure-beerburger-view-2.webp",
        "alt": "Разворот меню буклета Beerburger Station",
        "width": 857,
        "height": 855,
        "label": "Разворот меню"
      },
      {
        "className": "tile-brochure-front",
        "src": "assets/optimized/brochure-beerburger-view-3.webp",
        "alt": "Обложка буклета Beerburger Station",
        "width": 860,
        "height": 859,
        "label": "Обложка буклета"
      },
      {
        "className": "tile-print-beerburger",
        "src": "assets/optimized/print-beerburger-source.webp",
        "alt": "Исходная публикация от 5 августа 2018 года об офсетной печати буклета Beerburger Station",
        "width": 1274,
        "height": 1075,
        "label": "Офсетная печать · исходная публикация"
      },
      {
        "className": "tile-smm-beerburger",
        "src": "assets/optimized/smm-beerburger-source.webp",
        "alt": "Исходная SMM-публикация Beerburger Station: скриншоты с 164 и 2 954 подписчиками",
        "width": 1247,
        "height": 851,
        "label": "SMM · представленные скриншоты"
      }
    ]
  },
  {
    "id": "corks",
    "title": "CORKS",
    "service": "Дизайн винной карты",
    "summary": "Винная карта CORKS Wine Bar Kitchen",
    "sourceNote": "Пример из предоставленных материалов",
    "text": "Пример винной карты CORKS Wine Bar Kitchen. На изображении показаны обложки и внутренние страницы раздела WINE.",
    "notes": [
      "В исходном изображении сохранён логотип «Хоттабыч», прежнее название агентства"
    ],
    "images": [
      {
        "className": "tile-brochure-corks",
        "src": "assets/optimized/brochure-corks-source.webp",
        "alt": "Винная карта CORKS Wine Bar Kitchen с исходным логотипом «Хоттабыч»",
        "width": 857,
        "height": 1069,
        "label": "Винная карта"
      }
    ]
  },
  {
    "id": "led-installation",
    "title": "Монтаж LED-экрана",
    "service": "Установка экранного оборудования",
    "summary": "Монтажная конструкция и готовый экран",
    "sourceNote": "Фотографии из предоставленных материалов",
    "text": "Пример монтажа LED-экрана. На двух фотографиях показаны монтажная металлическая конструкция и готовый большой экран.",
    "images": [
      {
        "className": "tile-led-mount",
        "src": "assets/optimized/led-installation-source.webp",
        "alt": "Монтажная металлическая конструкция большого LED-экрана",
        "width": 793,
        "height": 821,
        "label": "Монтажная конструкция"
      },
      {
        "className": "tile-led-ready",
        "src": "assets/optimized/led-completed-source.webp",
        "alt": "Готовый установленный LED-экран из предоставленных материалов",
        "width": 791,
        "height": 835,
        "label": "Готовый экран"
      }
    ]
  }
];
function appendRealProjectDetail(box,project){
  if(project.notes){
    project.notes.forEach(text=>{const note=document.createElement('p');note.className='project-detail-note';note.textContent=text;box.append(note)});
  }
  const gallery=document.createElement('div');gallery.className='service-case-gallery project-case-gallery';
  project.images.forEach(photo=>{
    const figure=document.createElement('figure');
    const image=document.createElement('div');image.className='service-case-image '+photo.className;
    const crop=document.createElement('span');crop.className='tile-source-crop';
    const picture=document.createElement('img');picture.src=photo.src;picture.alt=photo.alt;picture.width=photo.width;picture.height=photo.height;picture.loading='lazy';picture.decoding='async';
    const caption=document.createElement('figcaption');const name=document.createElement('strong');name.textContent=photo.label;caption.append(name);
    crop.append(picture);image.append(crop);figure.append(image,caption);gallery.append(figure);
  });
  box.append(gallery);
}

const detail=document.querySelector('#detail');
function showDetail(title,text,items=[],kind='Направление'){
  document.querySelector('#detail-title').textContent=title;
  detail.classList.toggle('service-detail-compact',compactServiceTitles.includes(title));
  detail.classList.toggle('service-detail-media',title===mediaServiceTitle);
  detail.setAttribute('aria-describedby',title===mediaServiceTitle?'media-detail-intro':'detail-content');
  const box=document.querySelector('#detail-content');
  const p=document.createElement('p');
  p.textContent=title===marketplaceServiceTitle?'Создаём инфографику и коммерческие коллажи, обрабатываем товарные фотографии: цветокоррекция, замена фона, тексты, дополнительные изображения и значки. Стоимость рассчитывается индивидуально. Для начала нужны подробное ТЗ, качественные фотографии и обратная связь':text;
  box.replaceChildren(p);
  if(title===mediaServiceTitle){p.id='media-detail-intro';appendMediaServiceDetail(box)}
  if(items.length){
    const ul=document.createElement('ul');
    items.forEach(t=>{const li=document.createElement('li');li.textContent=t;ul.append(li)});
    box.append(ul);
  }
  if(title==='Мультимедиа и интерактив'){
    const intro=document.createElement('p');intro.textContent='Голографические проекции для сцен, презентаций и мероприятий';
    const figure=document.createElement('figure');figure.className='service-hologram-example';
    const crop=document.createElement('div');crop.className='service-hologram-photo';
    const image=document.createElement('img');image.decoding='async';image.src='assets/optimized/holographic-projection-user.webp';image.alt='Сценическое выступление: пример голографической проекции';image.width=1273;image.height=868;image.loading='lazy';
    const caption=document.createElement('figcaption');caption.textContent='Пример голографической проекции · иллюстрация формата из предоставленных материалов';
    crop.append(image);figure.append(crop,caption);box.append(intro,figure);
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
      ['tile-led-mount','assets/optimized/led-installation-source.webp','Монтажная конструкция LED-экрана',793,821,'Монтаж LED-экрана',''],
      ['tile-led-ready','assets/optimized/led-completed-source.webp','Установленный LED-экран',791,835,'Установленный экран','']
    ]:title===brochureServiceTitle?[
      ['tile-brochure-cover','assets/optimized/brochure-beerburger-view-1.webp','Буклет Beerburger Station: обложка и разворот',821,850,'Beerburger Station','Работа 2018 года, выполнена без использования искусственного интеллекта'],
      ['tile-brochure-menu','assets/optimized/brochure-beerburger-view-2.webp','Буклет Beerburger Station: разворот меню',857,855,'Разворот меню',''],
      ['tile-brochure-front','assets/optimized/brochure-beerburger-view-3.webp','Буклет Beerburger Station: обложка',860,859,'Обложка буклета',''],
      ['tile-brochure-corks','assets/optimized/brochure-corks-source.webp','CORKS: винная карта, с логотипом Хоттабыч в исходном изображении',857,1069,'CORKS · Винная карта','']
    ]:title===slimServiceTitle?[
      ['tile-slim-frame','assets/optimized/slim-frame-source.webp','Настенная световая панель: фреймлайт из предоставленных материалов',858,482,'Фреймлайт',''],
      ['tile-slim-crystal','assets/optimized/slim-crystal-source.webp','Настенная световая панель: кристалайт из предоставленных материалов',846,479,'Кристалайт','']
    ]:title===smmServiceTitle?[
      ['tile-smm-beerburger','assets/optimized/smm-beerburger-source.webp','Beerburger Station: представленные скриншоты с 164 и 2 954 подписчиками',1247,851,'Beerburger Station · пример продвижения, 2018 год','На представленных скриншотах: 164 → 2 954 подписчика. По публикации агентства — месяц работы']
    ]:title===printServiceTitle?[
      ['tile-print-beerburger','assets/optimized/print-beerburger-source.webp','Исторический пример офсетного буклета Beerburger Station',1274,1075,'Beerburger Station · офсетная печать, 2018 год','Офсетная печать · 5 000 экземпляров. По публикации агентства от 5 августа 2018 года']
    ]:[
      ['tile-signage-bank','assets/optimized/post-bank-source.webp','Световая вывеска «ПОЧТА БАНК»',805,643,'Почта Банк',''],
      ['tile-signage-restaurant','assets/optimized/signage-source.webp','Световая вывеска ресторана «Есть хинкали • Пить вино» с водяными знаками HOTABYCH',1271,852,'Есть хинкали • Пить вино','Сочи. Световые объёмные буквы на подложке с европейскими диодами. В публикации о проекте указана гарантия 5 лет'],
      ['tile-signage-hermes','assets/optimized/hermes-source.webp','Световая вывеска Hermès',792,631,'Hermès','Световая вывеска'],
      ['tile-signage-rasputin','assets/optimized/rasputin-source.webp','Световая вывеска «РАСПУТИН» с водяными знаками HOTABYCH',856,635,'Распутин','Световая вывеска']
    ];
    cases.forEach(([className,src,alt,width,height,title,description])=>{
      const figure=document.createElement('figure');
      const image=document.createElement('div');image.className='service-case-image '+className;
      const crop=document.createElement('span');crop.className='tile-source-crop';
      const picture=document.createElement('img');picture.decoding='async';picture.src=src;picture.alt=alt;picture.width=width;picture.height=height;picture.loading='lazy';
      crop.append(picture);image.append(crop);
      const caption=document.createElement('figcaption');
      const name=document.createElement('strong');name.textContent=title;caption.append(name);
      if(description){const copy=document.createElement('span');copy.textContent=description;caption.append(copy)}
      figure.append(image,caption);gallery.append(figure);
    });
    box.append(gallery);
  }
  if(kind==='Кейс'){const project=projects.find(project=>project.title===title);if(project&&!project.summit)appendRealProjectDetail(box,project)}
  if(title===marketplaceServiceTitle){
    const note=document.createElement('p');
    note.textContent='Включены промежуточные правки и 3 небольшие финальные корректировки';
    const badges=document.createElement('div');
    badges.className='service-badges';
    ['Более 8 лет опыта дизайнеров','Более 795 выполненных работ'].forEach(text=>{const badge=document.createElement('span');badge.textContent=text;badges.append(badge)});
    box.append(note,badges);
  }
  if(kind!=='Кейс'&&title!==mediaServiceTitle&&!compactServiceTitles.includes(title)){
    const note=document.createElement('p');
    note.textContent='Состав работ, сроки и стоимость обсуждаются индивидуально';
    box.append(note);
  }
  detail.showModal();
  if(title===mediaServiceTitle)detail.scrollTop=0;
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
  [ledServiceTitle]:['assets/optimized/led-installation-source.webp','Монтажная конструкция LED-экрана',793,821],
  'МАФ и благоустройство':['assets/optimized/service-selected-07-maf-1570.webp','Скамейки в парке Сосенки, Москва: тематическая иллюстрация благоустройства',3140,2096],
  'Регистрация товарного знака':['assets/optimized/trademark-rospatent-user.webp','Роспатент — Федеральная служба по интеллектуальной собственности: изображение предоставлено пользователем',1200,800]
};
const screenshotCards={
  [marketplaceServiceTitle]:['tile-marketplace','assets/optimized/marketplace-source.webp','Пример товарной инфографики на экране телефона',1285,924],
  [signageServiceTitle]:['tile-signage-bank','assets/optimized/post-bank-source.webp','Световая вывеска «ПОЧТА БАНК»',805,643],
  [brochureServiceTitle]:['tile-brochure-cover','assets/optimized/brochure-beerburger-view-1.webp','Буклет Beerburger Station: обложка и разворот',821,850],
  [slimServiceTitle]:['tile-slim-frame','assets/optimized/slim-frame-source.webp','Настенная световая SLIM-панель',858,482],
  [smmServiceTitle]:['tile-smm-beerburger','assets/optimized/smm-beerburger-source.webp','Beerburger Station: пример продвижения в соцсетях, 2018 год',1247,851]
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
services.forEach((x,index)=>{
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
    const picture=document.createElement('img');picture.decoding='async';
    [picture.src,picture.alt,picture.width,picture.height]=photo;
    if(x[0]==='МАФ и благоустройство'){
      picture.srcset='assets/optimized/service-selected-07-maf-785.webp 785w, assets/optimized/service-selected-07-maf-1570.webp 1570w';
      picture.sizes='(max-width: 700px) calc((90vw - 16px) / 2), (min-width: 1600px) 359px, calc((92.6vw - 48px) / 4)';
    }
    picture.loading='lazy';img.append(picture);
  }
  const screenshot=screenshotCards[x[0]];
  if(screenshot){
    img.classList.add(screenshot[0]);img.removeAttribute('aria-hidden');
    const crop=document.createElement('span');crop.className='tile-source-crop';
    const picture=document.createElement('img');picture.decoding='async';
    [picture.src,picture.alt,picture.width,picture.height]=screenshot.slice(1);
    picture.loading='lazy';crop.append(picture);img.append(crop);
  }
  if(x[0]===mediaServiceTitle){
    img.classList.add('tile-media');img.removeAttribute('aria-hidden');
    const logo=document.createElement('img');logo.decoding='async';logo.className='tile-media-logo';logo.src='assets/the-village-header.png';logo.alt='The Village+ | Юг';logo.loading='lazy';logo.width=697;logo.height=184;
    const sample=document.createElement('div');sample.className='tile-media-sample';
    const picture=document.createElement('img');picture.decoding='async';picture.src='assets/the-village-page-branding.png';picture.alt='Пример брендированной страницы онлайн-медиа The Village из презентации';picture.loading='lazy';picture.width=776;picture.height=411;
    sample.append(picture);img.append(logo,sample);
  }
  const cardId=serviceCardIds[x[0]];
  if(cardId)labelDialogCard(tile.querySelector('button'),tile.querySelector('h3'),cardId);
  document.querySelector('.service-grid').append(tile);
});
function addCampaignImage(image){
  image.classList.add('campaign-image');image.removeAttribute('aria-hidden');image.style.backgroundImage='none';
  const picture=document.createElement('img');picture.decoding='async';picture.src='assets/service-selected-05-events.jpg';picture.alt='Тематическая иллюстрация конференции, не фотография блокчейн-саммита';picture.width=1400;picture.height=1000;picture.loading='lazy';
  const badges=document.createElement('div');badges.className='campaign-channel-badges';
  [['assets/tnt-logo-official.png','ТНТ — телеканал рекламной кампании',794,261],['assets/ctc-logo.svg','СТС — телеканал рекламной кампании',755,279]].forEach(([src,alt,width,height])=>{
    const logo=document.createElement('img');logo.decoding='async';logo.className='campaign-channel-logo';logo.src=src;logo.alt=alt;logo.width=width;logo.height=height;logo.loading='lazy';badges.append(logo);
  });
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
projects.forEach(project=>{
  const button=document.createElement('button');button.className='project-card';
  const image=document.createElement('div');image.className='project-picture';
  if(project.summit){addCampaignImage(image)}else{
    const photo=project.images[0];image.classList.add('project-source-picture',photo.className);image.style.backgroundImage='none';
    const crop=document.createElement('span');crop.className='tile-source-crop';
    const picture=document.createElement('img');picture.src=photo.src;picture.alt=photo.alt;picture.width=photo.width;picture.height=photo.height;picture.loading='lazy';picture.decoding='async';crop.append(picture);image.append(crop);
  }
  const copy=document.createElement('div');copy.className='project-copy';
  const heading=document.createElement('h3');heading.textContent=project.title;
  const service=document.createElement('p');service.textContent=project.service;
  const summary=document.createElement('p');summary.className=project.summit?'project-result':'project-summary';summary.textContent=project.summary;
  const source=document.createElement('p');source.className='project-source-note';source.textContent=project.sourceNote;
  const open=document.createElement('span');open.className='project-open';open.textContent='Подробнее о кейсе →';
  copy.append(heading,service,summary,source);if(project.summit)addCampaignCaption(copy);copy.append(open);
  button.append(image,copy);labelDialogCard(button,heading,project.id+'-project-card');
  button.addEventListener('click',()=>showDetail(project.title,project.text,project.facts??[],'Кейс'));
  document.querySelector('.project-grid').append(button);
});
const about=()=>showDetail('RA XOTT','Рекламное агентство полного цикла из Сочи Рабочая структура объединяет брендинг, производство, размещение рекламы, digital, контент, события и мультимедиа',['Основательница - Любовь Безус','Состав команды и партнёров уточняется под проект','Личный проект основательницы - bezuslove']);document.querySelector('#about-open').addEventListener('click',about);
const brief=document.querySelector('#brief');document.querySelectorAll('.brief-open').forEach(b=>b.addEventListener('click',()=>brief.showModal()));document.querySelector('#detail-cta').addEventListener('click',()=>{detail.close();brief.showModal()});document.querySelectorAll('dialog').forEach(d=>{d.querySelector('.close').addEventListener('click',()=>d.close());d.addEventListener('click',e=>{if(e.target===d){const r=d.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)d.close()}})});
