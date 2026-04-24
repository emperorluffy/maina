'use strict';
const openWho = document.querySelector('.btn--who');

const overlay = document.querySelector('.overlay');

const btnCloseWho = document.querySelector('.close--who');

const thomas = document.querySelector('.thomas');

console.log(openWho);

const openThomas = function () {
  console.log('btn clicked');
  thomas.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

openWho.addEventListener('click', openThomas);

const closeThomas = function () {
  thomas.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnCloseWho.addEventListener('click', closeThomas);
overlay.addEventListener('click', closeThomas);
