import domFunctions from './modules/dom-functions.js';
const { toggleHiddenElement, changeToFunkyColor } = domFunctions;

const buttonElement = document.getElementById('secret-button');
const pElement = document.getElementById('secret-p');

buttonElement.addEventListener('click', () => {
  toggleHiddenElement(pElement);
  changeToFunkyColor(buttonElement);
});

// https://www.codecademy.com/paths/build-web-apps-with-react/tracks/bwa-modern-javascript-modules-and-browser-compatibility/modules/es-6-modules/articles/implementing-modules-using-es-6-syntax