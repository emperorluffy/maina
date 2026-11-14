'use strict';
emailjs.init('UKlUrVqvzAN_5skk7');

document.addEventListener('DOMContentLoaded', () => {
  // Toggle Mobile Menu
  const menuIcon = document.querySelector('#menu-icon');
  const navbar = document.querySelector('.navbar');

  if (menuIcon && navbar) {
    menuIcon.addEventListener('click', () => {
      menuIcon.classList.toggle('fa-xmark');
      navbar.classList.toggle('active');
    });
  }

  // Theme Toggle Functionality (Light / Dark Mode)
  const themeToggle = document.getElementById('theme-toggle');
  const currentTheme = localStorage.getItem('theme') || 'dark';

  if (currentTheme === 'light') {
    document.documentElement.setAttribute('data-theme', 'light');
    document.body.classList.add('light-mode');
  }

  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      const isLight = document.documentElement.getAttribute('data-theme') === 'light';
      if (isLight) {
        document.documentElement.removeAttribute('data-theme');
        document.body.classList.remove('light-mode');
        localStorage.setItem('theme', 'dark');
      } else {
        document.documentElement.setAttribute('data-theme', 'light');
        document.body.classList.add('light-mode');
        localStorage.setItem('theme', 'light');
      }
    });
  }

  // Like Button Interactivity
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
      if (menuIcon && navbar) {
        menuIcon.classList.remove('fa-xmark');
        navbar.classList.remove('active');
      }
    });
  });
});

function sendEmail(e) {
  e.preventDefault();

  (async () => {
    const form = document.getElementById('contact-form');

    try {
      await emailjs.sendForm('service_nzx2dix', 'template_a9wwmp9', form);
      alert('Reply posted successfully! I will get back to you soon.');
      form.reset();
    } catch (error) {
      alert(
        'Failed to send message. Error details: ' + JSON.stringify(error),
      );
    }
  })();
}
