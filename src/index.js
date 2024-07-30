const main = document.querySelector('.main');

function showMain() {
  main.classList.remove('hidden');
}

function hideMain() {
  main.classList.add('hidden');
}

hideMain();

fetch('https://serverjson-g1d6.onrender.com/locales/en.json')
  .then(res => res.json())
  .then(enTranslations => {
    const savedLanguage = localStorage.getItem('language') || 'en';

    i18next.init(
      {
        lng: 'en',
        debug: true,
        resources: {
          en: {
            translation: enTranslations,
          },
        },
      },
      function (err, t) {
        updateContent();
        showMain();

        if (savedLanguage !== 'en') {
          fetch(`${savedLanguage}.json`)
            .then(res => res.json())
            .then(translations => {
              i18next.addResourceBundle(
                savedLanguage,
                'translation',
                translations
              );
              i18next.changeLanguage(savedLanguage, () => {
                updateContent();
                showMain();
              });
            });
        }
      }
    );
  });

function changeLanguage(lng) {
  hideMain();
  fetch(`https://serverjson-g1d6.onrender.com/locales/${lng}.json`)
    .then(res => res.json())
    .then(translations => {
      i18next.addResourceBundle(lng, 'translation', translations);
      i18next.changeLanguage(lng, function (err, t) {
        localStorage.setItem('language', lng);
        updateContent();
        showMain();
      });
    });
}

function updateContent() {
  const elements = document.querySelectorAll('[id]');
  elements.forEach(element => {
    const key = element.id;
    element.innerHTML = i18next.t(key);
  });
}

window.changeLanguage = changeLanguage;
