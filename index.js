const svg = document.querySelector('#loader');
const text = document.querySelector('.hello');
setTimeout(() => {
  svg.remove();
  text.classList.remove('hide');
}, 2800);