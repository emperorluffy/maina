'use strict';

// Selecting elements
const btnsOpenWho = document.querySelectorAll('.btn--who');
const btnCloseWho = document.querySelector('.close--who');
const overlay = document.querySelector('.overlay');
const thomas = document.querySelector('.thomas');

// --- Functions ---

/**
 * Opens the modal/info section
 */
const openModal = function () {
  thomas.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

/**
 * Closes the modal/info section
 */
const closeModal = function () {
  thomas.classList.add('hidden');
  overlay.classList.add('hidden');
};

// --- Event Listeners ---

// Attach open event to all "Who" buttons
btnsOpenWho.forEach((btn) => btn.addEventListener('click', openModal));

// Close when clicking the close button or the overlay
btnCloseWho.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

// Optional: Close modal on 'Escape' key press
document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !thomas.classList.contains('hidden')) {
    closeModal();
  }
});
