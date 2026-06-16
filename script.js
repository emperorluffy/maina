'use strict';
emailjs.init('UKlUrVqvzAN_5skk7');
// Toggle Mobile Menu
const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('.navbar');

menuIcon.addEventListener('click', () => {
  menuIcon.classList.toggle('fa-xmark');
  navbar.classList.toggle('active');
});

// Scroll Sections Active Link Activation
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('header nav a');

window.addEventListener('scroll', () => {
  let top = window.scrollY;

  sections.forEach((sec) => {
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');

    if (top >= offset && top < offset + height) {
      navLinks.forEach((links) => {
        links.classList.remove('active');
        document
          .querySelector('header nav a[href*=' + id + ']')
          .classList.add('active');
      });
    }
  });

  // Remove menu toggle icons when clicking nav links (scrolls down)
  menuIcon.classList.remove('fa-xmark');
  navbar.classList.remove('active');
});

function sendEmail(e) {
  e.preventDefault();

  const form = document.getElementById('contact-form');

  emailjs.sendForm('service_nzx2dix', 'template_a9wwmp9', form).then(
    () => {
      alert('Message sent successfully! I will get back to you soon.');
      form.reset();
    },
    (error) => {
      alert(
        'Failed to send the message. Error details: ' + JSON.stringify(error),
      );
    },
  );
}
