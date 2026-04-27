'use strict';

//Who is Thomas Button
const who = document.querySelector('.thomas');
const overlay = document.querySelector('.overlay');
const btnCloseWho = document.querySelector('.close--who');
const btnOpenWho = document.querySelector('.btn--who');

btnOpenWho.addEventListener('click', function () {
  who.classList.remove('hidden');
  overlay.classList.remove('hidden');
});

btnCloseWho.addEventListener('click', function () {
  who.classList.add('hidden');
  overlay.classList.add('hidden');
});

overlay.addEventListener('click', function () {
  who.classList.add('hidden');
  overlay.classList.add('hidden');
});

const closeWho = function () {
  who.classList.add('hidden');
  overlay.classList.add('hidden');
};

document.addEventListener('keydown', function (e) {
  console.log(e.key);

  if (e.key === 'Escape') {
    if (!who.classList.contains('hidden')) {
      closeWho();
    }
  }
});

//Want to play?
const play = document.querySelector('.play');
const btnClosePlay = document.querySelector('.close--play');
const btnOpenPlay = document.querySelector('.btn--play');

btnOpenPlay.addEventListener('click', function () {
  play.classList.remove('hidden');
  overlay.classList.remove('hidden');
});

btnClosePlay.addEventListener('click', function () {
  play.classList.add('hidden');
  overlay.classList.add('hidden');
});

overlay.addEventListener('click', function () {
  play.classList.add('hidden');
  overlay.classList.add('hidden');
});

const closePlay = function () {
  play.classList.add('hidden');
  overlay.classList.add('hidden');
};

document.addEventListener('keydown', function (e) {
  console.log(e.key);

  if (e.key === 'Escape') {
    if (!play.classList.contains('hidden')) {
      closePlay();
    }
  }
});

//What's New?
const next = document.querySelector('.next');
const btnCloseNext = document.querySelector('.close--next');
const btnOpenNext = document.querySelector('.btn--next');

btnOpenNext.addEventListener('click', function () {
  next.classList.remove('hidden');
  overlay.classList.remove('hidden');
});

btnCloseNext.addEventListener('click', function () {
  next.classList.add('hidden');
  overlay.classList.add('hidden');
});

overlay.addEventListener('click', function () {
  next.classList.add('hidden');
  overlay.classList.add('hidden');
});

const closeNext = function () {
  next.classList.add('hidden');
  overlay.classList.add('hidden');
};

document.addEventListener('keydown', function (e) {
  console.log(e.key);

  if (e.key === 'Escape') {
    if (!next.classList.contains('hidden')) {
      closeNext();
    }
  }
});
