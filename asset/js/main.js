let pc = document.getElementById('pc');
let phone = document.getElementById('phone');
let tab = document.getElementById('tab');
let responsiveframe = document.getElementById('responsiveframe');

//Responsive 
pc.addEventListener('click', function () {
  let x = responsiveframe.style.maxWidth = '100rem';
  console.log(x);
});

tab.addEventListener('click', function () {
  let x = responsiveframe.style.maxWidth = '50rem';
  console.log(x);
});

phone.addEventListener('click', function () {
  let x = responsiveframe.style.maxWidth = '24rem';
  console.log(x);
});



//Billings Model
let buybutton = document.getElementById('buynow');
let billingsModel = document.getElementById('billingsModel');
let modelClose = document.getElementById('modelClose');

//Payment Model
let paymentModel = document.getElementById('paymentModel');
let continueBillings = document.getElementById('continueBillings');
let modelCloseAll = document.getElementById('modelCloseAll');


buybutton.addEventListener('click', function () {
  billingsModel.style.display = 'block';
});

modelClose.addEventListener('click', function () {
  billingsModel.style.display = 'none';
});

continueBillings.addEventListener('click', function () {
  paymentModel.style.display = 'block';
  billingsModel.style.display = 'none';
});

modelCloseAll.addEventListener('click', function () {
  paymentModel.style.display = 'none';
});