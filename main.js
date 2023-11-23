let pc = document.getElementById('pc');
let phone = document.getElementById('phone');
let tab = document.getElementById('tab');
let responsiveframe = document.getElementById('responsiveframe');



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