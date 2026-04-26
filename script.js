'use strict';
const who = document.querySelector('.thomas');
const overlay = document.querySelector('.overlay');
const btnCloseWho = document.querySelector('.close--who');
const btnOpenWho = document.querySelector('.btn--who');

btnOpenWho.addEventListener('click', function () {
  who.classList.remove('hidden');
  overlay.classList.remove('hidden');
});

btnCloseWho.addEventListener('click', function () {
  console.log('btn clicked');
  who.classList.add('hidden');
  overlay.classList.add('hidden');
});

overlay.addEventListener('click', function () {
  who.classList.add('hidden');
  overlay.classList.add('hidden');
});
