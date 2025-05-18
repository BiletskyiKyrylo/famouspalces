let currentLang = 'pl';

const translations = {
  en: {
    title: "Popular Places Around the World",
    bestTime: "Best time to visit:",
    maps: "Open in Google Maps",
    regions: {
      all: "All",
      europe: "Europe",
      asia: "Asia",
      america: "America",
      africa: "Africa",
      oceania: "Oceania"
    },
    darkMode: "🌙 Dark Mode",
    lightMode: "🌞 Light Mode"
  },
  pl: {
    title: "Popularne miejsca na świecie",
    bestTime: "Najlepszy czas na wizytę:",
    maps: "Otwórz w Google Maps",
    regions: {
      all: "Wszystko",
      europe: "Europa",
      asia: "Azja",
      america: "Ameryka",
      africa: "Afryka",
      oceania: "Oceania"
    },
    darkMode: "🌙 Tryb ciemny",
    lightMode: "🌞 Tryb jasny"
  },
  uk: {
    title: "Популярні місця світу",
    bestTime: "Найкращий час для відвідування:",
    maps: "Відкрити в Google Maps",
    regions: {
      all: "Всі",
      europe: "Європа",
      asia: "Азія",
      america: "Америка",
      africa: "Африка",
      oceania: "Океанія"
    },
    darkMode: "🌙 Темний режим",
    lightMode: "🌞 Світлий режим"
  },
  ru: {
    title: "Популярные места мира",
    bestTime: "Лучшее время для посещения:",
    maps: "Открыть в Google Maps",
    regions: {
      all: "Все",
      europe: "Европа",
      asia: "Азия",
      america: "Америка",
      africa: "Африка",
      oceania: "Океания"
    },
    darkMode: "🌙 Тёмная тема",
    lightMode: "🌞 Светлая тема"
  }
};

document.addEventListener("DOMContentLoaded", () => {
  const langSwitch = document.getElementById('lang-switch');
langSwitch.value = currentLang;
langSwitch.addEventListener('change', function() {
  currentLang = this.value;
  updateLocalizedText();
  renderPlaces(document.querySelector('.filter-bar button.active').getAttribute('data-region'));
});
});

function updateLocalizedText() {
  document.querySelector('header h1').textContent = t('title');
  document.querySelectorAll('.filter-bar button').forEach(btn => {
    const region = btn.getAttribute('data-region');
    btn.textContent = t(`regions.${region}`);
  });
  setThemeButton && setThemeButton();
}


function t(key) {
  let value = translations[currentLang];
  for (const k of key.split('.')) value = value?.[k];
  return value || key;
}

const places = [
  // EUROPE
  {
    name: {
      en: 'Eiffel Tower, Paris',
      pl: 'Wieża Eiffla, Paryż',
      uk: 'Ейфелева вежа, Париж',
      ru: 'Эйфелева башня, Париж'
    },
    image: 'images/eiffel.jpg',
    description: {
      en: 'A symbol of Paris and France, built in 1889.',
      pl: 'Symbol Paryża i Francji, zbudowany w 1889 roku.',
      uk: 'Символ Парижа та Франції, побудований у 1889 році.',
      ru: 'Символ Парижа и Франции, построен в 1889 году.'
    },
    region: 'europe',
    country: {
      en: 'France',
      pl: 'Francja',
      uk: 'Франція',
      ru: 'Франция'
    },
    flag: '🇫🇷',
    bestTime: {
      en: 'April to June & September to November',
      pl: 'Kwiecień–czerwiec i wrzesień–listopad',
      uk: 'Квітень–червень та вересень–листопад',
      ru: 'Апрель–июнь и сентябрь–ноябрь'
    },
    maps: 'https://maps.app.goo.gl/LvThdV9z5Cw363Nw6'
  },
  {
    name: {
      en: 'Santorini, Greece',
      pl: 'Santorini, Grecja',
      uk: 'Санторіні, Греція',
      ru: 'Санторини, Греция'
    },
    image: 'images/santorini.jpg',
    description: {
      en: 'Island with white houses and blue domes.',
      pl: 'Wyspa z białymi domami i niebieskimi kopułami.',
      uk: 'Острів з білими будинками і синіми куполами.',
      ru: 'Остров с белыми домиками и синими куполами.'
    },
    region: 'europe',
    country: {
      en: 'Greece',
      pl: 'Grecja',
      uk: 'Греція',
      ru: 'Греция'
    },
    flag: '🇬🇷',
    bestTime: {
      en: 'May to October',
      pl: 'Maj–październik',
      uk: 'Травень–жовтень',
      ru: 'Май–октябрь'
    },
    maps: 'https://maps.app.goo.gl/mDLyoAwfpkF6w5cC9'
  },
  {
    name: {
      en: 'Colosseum, Rome',
      pl: 'Koloseum, Rzym',
      uk: 'Колізей, Рим',
      ru: 'Колизей, Рим'
    },
    image: 'images/colosseum.jpg',
    description: {
      en: 'Ancient Roman arena.',
      pl: 'Starożytna rzymska arena.',
      uk: 'Стародавня римська арена.',
      ru: 'Древнеримский амфитеатр.'
    },
    region: 'europe',
    country: {
      en: 'Italy',
      pl: 'Włochy',
      uk: 'Італія',
      ru: 'Италия'
    },
    flag: '🇮🇹',
    bestTime: {
      en: 'April to June & September to October',
      pl: 'Kwiecień–czerwiec i wrzesień–październik',
      uk: 'Квітень–червень та вересень–жовтень',
      ru: 'Апрель–июнь и сентябрь–октябрь'
    },
    maps: 'https://maps.app.goo.gl/DP8AV54SxwiAaEwv8'
  },
  {
    name: {
      en: 'Big Ben, London',
      pl: 'Big Ben, Londyn',
      uk: 'Біг-Бен, Лондон',
      ru: 'Биг-Бен, Лондон'
    },
    image: 'images/bigben.jpg',
    description: {
      en: 'Famous clock tower in UK.',
      pl: 'Słynna wieża zegarowa w Wielkiej Brytanii.',
      uk: 'Відома годинникова вежа у Великій Британії.',
      ru: 'Знаменитая часовая башня в Великобритании.'
    },
    region: 'europe',
    country: {
      en: 'United Kingdom',
      pl: 'Wielka Brytania',
      uk: 'Велика Британія',
      ru: 'Великобритания'
    },
    flag: '🇬🇧',
    bestTime: {
      en: 'March to May & September to November',
      pl: 'Marzec–maj i wrzesień–listopad',
      uk: 'Березень–травень та вересень–листопад',
      ru: 'Март–май и сентябрь–ноябрь'
    },
    maps: 'https://maps.app.goo.gl/UDJ6MCBzZiXH5Mxt8'
  },
  {
    name: {
      en: 'Neuschwanstein Castle, Germany',
      pl: 'Zamek Neuschwanstein, Niemcy',
      uk: 'Замок Нойшванштайн, Німеччина',
      ru: 'Замок Нойшванштайн, Германия'
    },
    image: 'images/neuschwanstein.jpg',
    description: {
      en: 'Fairy-tale castle in Bavaria.',
      pl: 'Bajkowy zamek w Bawarii.',
      uk: 'Казковий замок у Баварії.',
      ru: 'Сказочный замок в Баварии.'
    },
    region: 'europe',
    country: {
      en: 'Germany',
      pl: 'Niemcy',
      uk: 'Німеччина',
      ru: 'Германия'
    },
    flag: '🇩🇪',
    bestTime: {
      en: 'May to October',
      pl: 'Maj–październik',
      uk: 'Травень–жовтень',
      ru: 'Май–октябрь'
    },
    maps: 'https://maps.app.goo.gl/3V5szUsPi3PifGq69'
  },

  // ASIA
  {
    name: {
      en: 'Great Wall of China',
      pl: 'Wielki Mur Chiński',
      uk: 'Великий китайський мур',
      ru: 'Великая Китайская стена'
    },
    image: 'images/great_wall.jpg',
    description: {
      en: 'Massive wall in China.',
      pl: 'Ogromny mur w Chinach.',
      uk: 'Величезний мур у Китаї.',
      ru: 'Огромная стена в Китае.'
    },
    region: 'asia',
    country: {
      en: 'China',
      pl: 'Chiny',
      uk: 'Китай',
      ru: 'Китай'
    },
    flag: '🇨🇳',
    bestTime: {
      en: 'September to November & March to May',
      pl: 'Wrzesień–listopad i marzec–maj',
      uk: 'Вересень–листопад та березень–травень',
      ru: 'Сентябрь–ноябрь и март–май'
    },
    maps: 'https://maps.app.goo.gl/9cvrY4TfEu2sMh9FA'
  },
  {
    name: {
      en: 'Taj Mahal, India',
      pl: 'Tadż Mahal, Indie',
      uk: 'Тадж-Махал, Індія',
      ru: 'Тадж-Махал, Индия'
    },
    image: 'images/taj.jpg',
    description: {
      en: 'Marble mausoleum and symbol of love.',
      pl: 'Marmurowe mauzoleum i symbol miłości.',
      uk: 'Мармуровий мавзолей і символ кохання.',
      ru: 'Мраморный мавзолей и символ любви.'
    },
    region: 'asia',
    country: {
      en: 'India',
      pl: 'Indie',
      uk: 'Індія',
      ru: 'Индия'
    },
    flag: '🇮🇳',
    bestTime: {
      en: 'October to March',
      pl: 'Październik–marzec',
      uk: 'Жовтень–березень',
      ru: 'Октябрь–март'
    },
    maps: 'https://maps.app.goo.gl/j51LNwQmFHuhSo167'
  },
  {
    name: {
      en: 'Mount Fuji, Japan',
      pl: 'Góra Fuji, Japonia',
      uk: 'Гора Фудзі, Японія',
      ru: 'Гора Фудзи, Япония'
    },
    image: 'images/fuji.jpg',
    description: {
      en: 'Sacred mountain of Japan.',
      pl: 'Święta góra Japonii.',
      uk: 'Священна гора Японії.',
      ru: 'Священная гора Японии.'
    },
    region: 'asia',
    country: {
      en: 'Japan',
      pl: 'Japonia',
      uk: 'Японія',
      ru: 'Япония'
    },
    flag: '🇯🇵',
    bestTime: {
      en: 'July to September (for climbing); April-May (for views)',
      pl: 'Lipiec–wrzesień (wspinaczka); kwiecień–maj (widoki)',
      uk: 'Липень–вересень (для сходження); квітень–травень (для краєвидів)',
      ru: 'Июль–сентябрь (для восхождения); апрель–май (для видов)'
    },
    maps: 'https://maps.app.goo.gl/PmyfyPmskHT2rFsS8'
  },
  {
    name: {
      en: 'Petra, Jordan',
      pl: 'Petra, Jordania',
      uk: 'Петра, Йорданія',
      ru: 'Петра, Иордания'
    },
    image: 'images/petra.jpg',
    description: {
      en: 'City carved in rock.',
      pl: 'Miasto wykute w skale.',
      uk: 'Місто, висічене в скелі.',
      ru: 'Город, высеченный в скале.'
    },
    region: 'asia',
    country: {
      en: 'Jordan',
      pl: 'Jordania',
      uk: 'Йорданія',
      ru: 'Иордания'
    },
    flag: '🇯🇴',
    bestTime: {
      en: 'March to May & September to November',
      pl: 'Marzec–maj i wrzesień–listopad',
      uk: 'Березень–травень та вересень–листопад',
      ru: 'Март–май и сентябрь–ноябрь'
    },
    maps: 'https://maps.app.goo.gl/MgbRPr3LmqvFQhpZ7'
  },
  {
    name: {
      en: 'Angkor Wat, Cambodia',
      pl: 'Angkor Wat, Kambodża',
      uk: 'Ангкор-Ват, Камбоджа',
      ru: 'Ангкор-Ват, Камбоджа'
    },
    image: 'images/angkorwat.jpg',
    description: {
      en: 'Largest religious monument in the world.',
      pl: 'Największy zabytek religijny na świecie.',
      uk: 'Найбільша релігійна споруда у світі.',
      ru: 'Крупнейший религиозный памятник в мире.'
    },
    region: 'asia',
    country: {
      en: 'Cambodia',
      pl: 'Kambodża',
      uk: 'Камбоджа',
      ru: 'Камбоджа'
    },
    flag: '🇰🇭',
    bestTime: {
      en: 'November to March',
      pl: 'Listopad–marzec',
      uk: 'Листопад–березень',
      ru: 'Ноябрь–март'
    },
    maps: 'https://maps.app.goo.gl/2812AX4cLnGnr3Xt5'
  },

  // AMERICA
  {
    name: {
      en: 'Statue of Liberty, NYC',
      pl: 'Statua Wolności, Nowy Jork',
      uk: 'Статуя Свободи, Нью-Йорк',
      ru: 'Статуя Свободы, Нью-Йорк'
    },
    image: 'images/liberty.jpg',
    description: {
      en: 'Gift from France, symbol of freedom.',
      pl: 'Prezent od Francji, symbol wolności.',
      uk: 'Подарунок з Франції, символ свободи.',
      ru: 'Подарок из Франции, символ свободы.'
    },
    region: 'america',
    country: {
      en: 'USA',
      pl: 'USA',
      uk: 'США',
      ru: 'США'
    },
    flag: '🇺🇸',
    bestTime: {
      en: 'April to June & September to early November',
      pl: 'Kwiecień–czerwiec i wrzesień–początek listopada',
      uk: 'Квітень–червень та вересень–початок листопада',
      ru: 'Апрель–июнь и сентябрь–начало ноября'
    },
    maps: 'https://maps.app.goo.gl/kRq28nmRZFuU1ZnG8'
  },
  {
    name: {
      en: 'Machu Picchu, Peru',
      pl: 'Machu Picchu, Peru',
      uk: 'Мачу-Пікчу, Перу',
      ru: 'Мачу-Пикчу, Перу'
    },
    image: 'images/machu.jpg',
    description: {
      en: 'Ancient Incan city in the Andes.',
      pl: 'Starożytne miasto Inków w Andach.',
      uk: 'Стародавнє місто інків в Андах.',
      ru: 'Древний город инков в Андах.'
    },
    region: 'america',
    country: {
      en: 'Peru',
      pl: 'Peru',
      uk: 'Перу',
      ru: 'Перу'
    },
    flag: '🇵🇪',
    bestTime: {
      en: 'April to October',
      pl: 'Kwiecień–październik',
      uk: 'Квітень–жовтень',
      ru: 'Апрель–октябрь'
    },
    maps: 'https://maps.app.goo.gl/8CVtmd6bWo1UFEK5A'
  },
  {
    name: {
      en: 'Niagara Falls',
      pl: 'Wodospad Niagara',
      uk: 'Водоспад Ніагара',
      ru: 'Ниагарский водопад'
    },
    image: 'images/niagara.jpg',
    description: {
      en: 'Waterfalls on US/Canada border.',
      pl: 'Wodospady na granicy USA i Kanady.',
      uk: 'Водоспади на кордоні США та Канади.',
      ru: 'Водопады на границе США и Канады.'
    },
    region: 'america',
    country: {
      en: 'USA / Canada',
      pl: 'USA / Kanada',
      uk: 'США / Канада',
      ru: 'США / Канада'
    },
    flag: '🇺🇸🇨🇦',
    bestTime: {
      en: 'June to August',
      pl: 'Czerwiec–sierpień',
      uk: 'Червень–серпень',
      ru: 'Июнь–август'
    },
    maps: 'https://maps.app.goo.gl/D3h5L13hAjMY3kLt7'
  },
  {
    name: {
      en: 'Christ the Redeemer, Brazil',
      pl: 'Chrystus Odkupiciel, Brazylia',
      uk: 'Статуя Христа-Спасителя, Бразилія',
      ru: 'Статуя Христа-Искупителя, Бразилия'
    },
    image: 'images/christ.jpg',
    description: {
      en: 'Huge statue in Rio.',
      pl: 'Ogromny posąg w Rio.',
      uk: 'Велетенська статуя в Ріо.',
      ru: 'Огромная статуя в Рио.'
    },
    region: 'america',
    country: {
      en: 'Brazil',
      pl: 'Brazylia',
      uk: 'Бразилія',
      ru: 'Бразилия'
    },
    flag: '🇧🇷',
    bestTime: {
      en: 'December to March',
      pl: 'Grudzień–marzec',
      uk: 'Грудень–березень',
      ru: 'Декабрь–март'
    },
    maps: 'https://maps.app.goo.gl/HPLeHSvuan8zdvnQ6'
  },
  {
    name: {
      en: 'Banff National Park, Canada',
      pl: 'Park Narodowy Banff, Kanada',
      uk: 'Національний парк Банф, Канада',
      ru: 'Национальный парк Банф, Канада'
    },
    image: 'images/banff.jpg',
    description: {
      en: 'Scenic nature in Canada.',
      pl: 'Malownicza przyroda Kanady.',
      uk: 'Мальовнича природа Канади.',
      ru: 'Живописная природа Канады.'
    },
    region: 'america',
    country: {
      en: 'Canada',
      pl: 'Kanada',
      uk: 'Канада',
      ru: 'Канада'
    },
    flag: '🇨🇦',
    bestTime: {
      en: 'June to August & December to March (skiing)',
      pl: 'Czerwiec–sierpień i grudzień–marzec (narty)',
      uk: 'Червень–серпень та грудень–березень (лижний сезон)',
      ru: 'Июнь–август и декабрь–март (лыжи)'
    },
    maps: 'https://maps.app.goo.gl/qQyj2YGihavSBLPP6'
  },

  // AFRICA
  {
    name: {
      en: 'Giza Pyramids, Egypt',
      pl: 'Piramidy w Gizie, Egipt',
      uk: 'Піраміди Гізи, Єгипет',
      ru: 'Пирамиды Гизы, Египет'
    },
    image: 'images/giza.jpg',
    description: {
      en: 'Ancient pyramids of Pharaohs.',
      pl: 'Starożytne piramidy faraonów.',
      uk: 'Стародавні піраміди фараонів.',
      ru: 'Древние пирамиды фараонов.'
    },
    region: 'africa',
    country: {
      en: 'Egypt',
      pl: 'Egipt',
      uk: 'Єгипет',
      ru: 'Египет'
    },
    flag: '🇪🇬',
    bestTime: {
      en: 'October to April',
      pl: 'Październik–kwiecień',
      uk: 'Жовтень–квітень',
      ru: 'Октябрь–апрель'
    },
    maps: 'https://maps.app.goo.gl/YXWQ9Q127NHVRK8U6'
  },
  {
    name: {
      en: 'Table Mountain, South Africa',
      pl: 'Góra Stołowa, RPA',
      uk: 'Столова гора, ПАР',
      ru: 'Столовая гора, ЮАР'
    },
    image: 'images/tablemountain.jpg',
    description: {
      en: 'Flat-topped mountain in Cape Town.',
      pl: 'Płaska góra w Kapsztadzie.',
      uk: 'Плоска гора в Кейптауні.',
      ru: 'Плоская гора в Кейптауне.'
    },
    region: 'africa',
    country: {
      en: 'South Africa',
      pl: 'RPA',
      uk: 'ПАР',
      ru: 'ЮАР'
    },
    flag: '🇿🇦',
    bestTime: {
      en: 'March to May & September to November',
      pl: 'Marzec–maj i wrzesień–listopad',
      uk: 'Березень–травень та вересень–листопад',
      ru: 'Март–май и сентябрь–ноябрь'
    },
    maps: 'https://maps.app.goo.gl/nB7dTwQy4y4FdQ117'
  },
  {
    name: {
      en: 'Sahara Desert',
      pl: 'Sahara',
      uk: 'Сахара',
      ru: 'Сахара'
    },
    image: 'images/sahara.jpg',
    description: {
      en: 'The world’s largest hot desert.',
      pl: 'Największa gorąca pustynia na świecie.',
      uk: 'Найбільша гаряча пустеля світу.',
      ru: 'Крупнейшая жаркая пустыня в мире.'
    },
    region: 'africa',
    country: {
      en: 'North Africa',
      pl: 'Afryka Północna',
      uk: 'Північна Африка',
      ru: 'Северная Африка'
    },
    flag: '🏜️',
    bestTime: {
      en: 'October to April',
      pl: 'Październik–kwiecień',
      uk: 'Жовтень–квітень',
      ru: 'Октябрь–апрель'
    },
    maps: 'https://maps.app.goo.gl/tQYab8nSM9yndzZLA'
  },
  {
    name: {
      en: 'Victoria Falls, Zambia/Zimbabwe',
      pl: 'Wodospad Wiktorii, Zambia/Zimbabwe',
      uk: 'Водоспад Вікторія, Замбія/Зімбабве',
      ru: 'Водопад Виктория, Замбия/Зимбабве'
    },
    image: 'images/victoria.jpg',
    description: {
      en: 'Spectacular waterfall on the Zambezi River.',
      pl: 'Spektakularny wodospad na rzece Zambezi.',
      uk: 'Вражаючий водоспад на річці Замбезі.',
      ru: 'Зрелищный водопад на реке Замбези.'
    },
    region: 'africa',
    country: {
      en: 'Zambia / Zimbabwe',
      pl: 'Zambia / Zimbabwe',
      uk: 'Замбія / Зімбабве',
      ru: 'Замбия / Зимбабве'
    },
    flag: '🇿🇲🇿🇼',
    bestTime: {
      en: 'February to May (after rainy season)',
      pl: 'Luty–maj (po porze deszczowej)',
      uk: 'Лютий–травень (після сезону дощів)',
      ru: 'Февраль–май (после сезона дождей)'
    },
    maps: 'https://maps.app.goo.gl/JaFXzXe6Vam1AP4a8'
  },
  {
    name: {
      en: 'Serengeti National Park, Tanzania',
      pl: 'Park Narodowy Serengeti, Tanzania',
      uk: 'Національний парк Серенгеті, Танзанія',
      ru: 'Национальный парк Серенгети, Танзания'
    },
    image: 'images/serengeti.jpg',
    description: {
      en: 'Famous for its annual migration of wildebeest.',
      pl: 'Słynie z corocznej migracji gnu.',
      uk: 'Відомий щорічною міграцією антилоп гну.',
      ru: 'Известен ежегодной миграцией антилоп гну.'
    },
    region: 'africa',
    country: {
      en: 'Tanzania',
      pl: 'Tanzania',
      uk: 'Танзанія',
      ru: 'Танзания'
    },
    flag: '🇹🇿',
    bestTime: {
      en: 'June to September',
      pl: 'Czerwiec–wrzesień',
      uk: 'Червень–вересень',
      ru: 'Июнь–сентябрь'
    },
    maps: 'https://maps.app.goo.gl/wzzAvCcpATk3BJTVA'
  },

  // OCEANIA
  {
    name: {
      en: 'Sydney Opera House',
      pl: 'Opera w Sydney',
      uk: 'Оперний театр у Сіднеї',
      ru: 'Сиднейская опера'
    },
    image: 'images/sydney.jpg',
    description: {
      en: 'Iconic Australian performance hall.',
      pl: 'Ikoniczna australijska sala widowiskowa.',
      uk: 'Знакова австралійська концертна зала.',
      ru: 'Знаковый австралийский концертный зал.'
    },
    region: 'oceania',
    country: {
      en: 'Australia',
      pl: 'Australia',
      uk: 'Австралія',
      ru: 'Австралия'
    },
    flag: '🇦🇺',
    bestTime: {
      en: 'September to November & March to May',
      pl: 'Wrzesień–listopad i marzec–maj',
      uk: 'Вересень–листопад та березень–травень',
      ru: 'Сентябрь–ноябрь и март–май'
    },
    maps: 'https://maps.app.goo.gl/TbkBSqjfq9a3iYLC9'
  },
  {
    name: {
      en: 'Great Barrier Reef, Australia',
      pl: 'Wielka Rafa Koralowa, Australia',
      uk: 'Великий Бар’єрний риф, Австралія',
      ru: 'Большой Барьерный риф, Австралия'
    },
    image: 'images/barrierreef.jpg',
    description: {
      en: 'Largest coral reef system in the world.',
      pl: 'Największy system raf koralowych na świecie.',
      uk: 'Найбільша система коралових рифів у світі.',
      ru: 'Крупнейшая система коралловых рифов в мире.'
    },
    region: 'oceania',
    country: {
      en: 'Australia',
      pl: 'Australia',
      uk: 'Австралія',
      ru: 'Австралия'
    },
    flag: '🇦🇺',
    bestTime: {
      en: 'June to November (dry season)',
      pl: 'Czerwiec–listopad (pora sucha)',
      uk: 'Червень–листопад (сухий сезон)',
      ru: 'Июнь–ноябрь (сухой сезон)'
    },
    maps: 'https://maps.app.goo.gl/zdQZwQRBqTrjLEhw8'
  },
  {
    name: {
      en: 'Milford Sound, New Zealand',
      pl: 'Milford Sound, Nowa Zelandia',
      uk: 'Мілфорд-Саунд, Нова Зеландія',
      ru: 'Милфорд-Саунд, Новая Зеландия'
    },
    image: 'images/milford.jpg',
    description: {
      en: 'Spectacular fjord in New Zealand.',
      pl: 'Spektakularny fiord w Nowej Zelandii.',
      uk: 'Вражаючий фіорд у Новій Зеландії.',
      ru: 'Впечатляющий фьорд в Новой Зеландии.'
    },
    region: 'oceania',
    country: {
      en: 'New Zealand',
      pl: 'Nowa Zelandia',
      uk: 'Нова Зеландія',
      ru: 'Новая Зеландия'
    },
    flag: '🇳🇿',
    bestTime: {
      en: 'November to March',
      pl: 'Listopad–marzec',
      uk: 'Листопад–березень',
      ru: 'Ноябрь–март'
    },
    maps: 'https://maps.app.goo.gl/Th9gBJcnv4LoLMkYA'
  },
  {
    name: {
      en: 'Uluru, Australia',
      pl: 'Uluru, Australia',
      uk: 'Улуру, Австралія',
      ru: 'Улуру, Австралия'
    },
    image: 'images/uluru.jpg',
    description: {
      en: 'Massive sandstone monolith.',
      pl: 'Ogromny piaskowcowy monolit.',
      uk: 'Величезний піщаниковий моноліт.',
      ru: 'Огромный песчаниковый монолит.'
    },
    region: 'oceania',
    country: {
      en: 'Australia',
      pl: 'Australia',
      uk: 'Австралія',
      ru: 'Австралия'
    },
    flag: '🇦🇺',
    bestTime: {
      en: 'May to September',
      pl: 'Maj–wrzesień',
      uk: 'Травень–вересень',
      ru: 'Май–сентябрь'
    },
    maps: 'https://maps.app.goo.gl/ZNV6BYbnfudtCLgA7'
  },
  {
    name: {
      en: 'Bora Bora, French Polynesia',
      pl: 'Bora Bora, Polinezja Francuska',
      uk: 'Бора-Бора, Французька Полінезія',
      ru: 'Бора-Бора, Французская Полинезия'
    },
    image: 'images/borabora.jpg',
    description: {
      en: 'Paradise island in the South Pacific.',
      pl: 'Wyspa rajska na południowym Pacyfiku.',
      uk: 'Райський острів у південній частині Тихого океану.',
      ru: 'Райский остров в южной части Тихого океана.'
    },
    region: 'oceania',
    country: {
      en: 'French Polynesia',
      pl: 'Polinezja Francuska',
      uk: 'Французька Полінезія',
      ru: 'Французская Полинезия'
    },
    flag: '🇵🇫',
    bestTime: {
      en: 'November & April (shoulder season)',
      pl: 'Listopad i kwiecień (poza sezonem)',
      uk: 'Листопад і квітень (міжсезоння)',
      ru: 'Ноябрь и апрель (межсезонье)'
    },
    maps: 'https://maps.app.goo.gl/5SNurKaYRk3BYgxQ7'
  }
];


// ==== DOM elements ====
const gallery      = document.getElementById('gallery');
const modal        = document.getElementById('modal');
const modalImg     = document.getElementById('modal-img');
const modalCaption = document.getElementById('modal-caption');
const modalClose   = document.querySelector('.modal-close');
const themeToggle  = document.getElementById('theme-toggle');

// ==== State ====
let currentIndex = 0;
let currentFiltered = [];

// ==== Gallery render ====
function renderPlaces(region = 'all') {
  gallery.innerHTML = '';
  currentFiltered = places
    .map((p, i) => ({ ...p, _id: i }))
    .filter(p => region === 'all' || p.region === region);

  currentFiltered.forEach((place, i) => {
    const div = document.createElement('div');
    div.classList.add('place');
    div.style.animationDelay = `${i * 0.1}s`;
    div.innerHTML = `
      <div class="image-container">
        <img src="${place.image}" alt="${place.name[currentLang] || place.name.en}" loading="lazy" data-id="${place._id}" data-idx="${i}" />
        <div class="tooltip">${place.description?.[currentLang] || place.description?.en || place.description}</div>
      </div>
      <h3>${place.name[currentLang] || place.name.en || place.name}</h3>
    `;
    gallery.appendChild(div);
  });

  if (currentFiltered.length === 1) {
    gallery.firstChild.classList.add('single');
  }

  setModalListeners();
}

// ==== Modal listeners ====
function setModalListeners() {
  document.querySelectorAll('.image-container img').forEach((img) => {
    img.onclick = function () {
      const idx = parseInt(img.getAttribute('data-idx'));
      openModal(idx);
    };
  });
}

function openModal(idx) {
  currentIndex = idx;
  showModalPlace(currentIndex);
  modal.classList.add('open');
  modal.style.display = 'block';
}

function showModalPlace(idx) {
  const placeObj = currentFiltered[idx];
  if (!placeObj) return;

  modalImg.src = placeObj.image;
  modalCaption.innerHTML = `
    <div style="font-size:2rem;line-height:1">${placeObj.flag ?? ''}</div>
    <div style="font-weight:600; font-size:1.08em; margin-bottom:2px">${placeObj.country?.[currentLang] || placeObj.country?.en || placeObj.country}</div>
    <div style="margin: 7px 0 13px 0">${placeObj.description?.[currentLang] || placeObj.description?.en || placeObj.description}</div>
    <div style="font-size:0.97em;color:#ffd700;margin-bottom:2px">
      <span style="color:#aaa">${t('bestTime')}</span>
      <span style="color:#ffecb3">${placeObj.bestTime?.[currentLang] || placeObj.bestTime?.en || placeObj.bestTime || '-'}</span>
    </div>
    <a href="${placeObj.maps ?? '#'}" target="_blank" style="display:inline-block;margin-top:7px;color:#4af;text-decoration:underline;">
      ${t('maps')}
    </a>
  `;
  updateModalArrows();
}
function updateModalArrows() {
  if (!document.querySelector('.modal-arrow-left')) {
    const left = document.createElement('span');
    left.className = 'modal-arrow modal-arrow-left';
    left.innerHTML = `
      <svg viewBox="0 0 32 32">
        <path d="M20 6L10 16L20 26" stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    `;
    left.title = 'Previous';
    left.onclick = (e) => { e.stopPropagation(); goPrev(); };
    modal.appendChild(left);

    const right = document.createElement('span');
    right.className = 'modal-arrow modal-arrow-right';
    right.innerHTML = `
      <svg viewBox="0 0 32 32">
        <path d="M12 6L22 16L12 26" stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    `;
    right.title = 'Next';
    right.onclick = (e) => { e.stopPropagation(); goNext(); };
    modal.appendChild(right);
  }
  document.querySelector('.modal-arrow-left').style.display = (currentIndex > 0) ? 'flex' : 'none';
  document.querySelector('.modal-arrow-right').style.display = (currentIndex < currentFiltered.length - 1) ? 'flex' : 'none';
}

function goPrev() {
  if (currentIndex > 0) {
    currentIndex--;
    showModalPlace(currentIndex);
  }
}
function goNext() {
  if (currentIndex < currentFiltered.length - 1) {
    currentIndex++;
    showModalPlace(currentIndex);
  }
}

// ==== Modal close ====
modalClose.onclick = () => {
  modal.style.display = 'none';
  modal.classList.remove('open');
};
window.onclick = (e) => {
  if (e.target === modal) {
    modal.style.display = 'none';
    modal.classList.remove('open');
  }
};

// ==== Initial render ====
updateLocalizedText();
renderPlaces();

// ==== Theme toggle ====
function setThemeButton() {
  themeToggle.innerHTML = document.body.classList.contains('dark') ? t('lightMode') : t('darkMode');
}
setThemeButton();
themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  setThemeButton();
});

// ==== Filter bar ====
document.querySelectorAll('.filter-bar button').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.filter-bar button').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const region = btn.getAttribute('data-region');
    renderPlaces(region);
  });
});

// ==== Keyboard navigation for modal ====
window.addEventListener('keydown', function (e) {
  if (!modal.classList.contains('open')) return;

  if (e.key === 'ArrowLeft') {
    goPrev();
    e.preventDefault();
  }
  if (e.key === 'ArrowRight') {
    goNext();
    e.preventDefault();
  }
  if (e.key === 'Escape') {
    modal.style.display = 'none';
    modal.classList.remove('open');
    e.preventDefault();
  }
});