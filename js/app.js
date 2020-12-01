console.log('file 1');

var btnToggle = document.querySelector(".decision__hide-arrow");
var cards = document.querySelector(".decision__cards");


btnToggle.addEventListener('click', function () {
//   btnToggle.classList.toggle("rotate-arrow");
  cards.classList.toggle("hide-cards");
  console.log('2222');
})