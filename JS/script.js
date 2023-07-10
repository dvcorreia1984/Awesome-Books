const btnColor = document.querySelector('test');
const backgrod = document.getElementById('backgrod');

function chBackcolor() {
  backgrod.style.backgroundColor = 'red';
}
function chcolor() {
  backgrod.style.backgroundColor = '';
}

btnColor.addEventListener('click', chBackcolor());

btnColor.addEventListener('click', chcolor());

const books = [
  {   Id:1,
      Title:"Lorem ipsum",
      Author:"Testeroo Testyy"},
   {  Id:2,
      Title:"Second Books",
      Author:"Testeroo Testyy"},
];
