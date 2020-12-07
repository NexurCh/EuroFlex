console.log('file 1');

var btnToggle = document.querySelector(".decision__hide-arrow");
var cards = document.querySelector(".decision__cards");


btnToggle.addEventListener('click', function () {
  btnToggle.classList.toggle("decision__hide-arrow--rotate");
  cards.classList.toggle("hide-cards");
  if (
    document.querySelector('.decision__hide-text').innerHTML == 'Скрыть все решения') {
    document.querySelector('.decision__hide-text').innerHTML = 'Показать все решения';
  }
  else {
    document.querySelector('.decision__hide-text').innerHTML = 'Скрыть все решения';
  }
})