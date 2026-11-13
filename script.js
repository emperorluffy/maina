'use strict';
emailjs.init('UKlUrVqvzAN_5skk7');

// Toggle Mobile Menu
const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('.navbar');

menuIcon.addEventListener('click', () => {
  menuIcon.classList.toggle('fa-xmark');
  navbar.classList.toggle('active');
});

// Like Button Interactivity for Thread Theme
document.querySelectorAll('.like-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const icon = btn.querySelector('i');
    const countSpan = btn.querySelector('.count');
    let count = parseInt(countSpan.textContent);

    if (btn.classList.contains('liked')) {
      btn.classList.remove('liked');
      icon.classList.remove('fa-solid');
      icon.classList.add('fa-regular');
      countSpan.textContent = count - 1;
    } else {
      btn.classList.add('liked');
      icon.classList.remove('fa-regular');
      icon.classList.add('fa-solid');
      countSpan.textContent = count + 1;
    }
  });
});

// Close mobile menu on nav link click
document.querySelectorAll('.navbar a').forEach(link => {
  link.addEventListener('click', () => {
    menuIcon.classList.remove('fa-xmark');
    navbar.classList.remove('active');
  });
});

function sendEmail(e) {
  e.preventDefault();

  const form = document.getElementById('contact-form');

  emailjs.sendForm('service_nzx2dix', 'template_a9wwmp9', form).then(
    () => {
      alert('Reply posted successfully! I will get back to you soon.');
      form.reset();
    },
    (error) => {
      alert(
        'Failed to send message. Error details: ' + JSON.stringify(error),
      );
    },
  );
}
