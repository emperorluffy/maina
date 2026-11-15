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

  // Theme Toggle Functionality (Light Mode Default)
  const themeToggle = document.getElementById('theme-toggle');
  const currentTheme = localStorage.getItem('theme') || 'light';

  if (currentTheme === 'dark') {
    document.documentElement.setAttribute('data-theme', 'dark');
    document.body.classList.add('dark-mode');
  } else {
    document.documentElement.setAttribute('data-theme', 'light');
    document.body.classList.add('light-mode');
  }

  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
      if (isDark) {
        document.documentElement.setAttribute('data-theme', 'light');
        document.body.classList.remove('dark-mode');
        document.body.classList.add('light-mode');
        localStorage.setItem('theme', 'light');
      } else {
        document.documentElement.setAttribute('data-theme', 'dark');
        document.body.classList.remove('light-mode');
        document.body.classList.add('dark-mode');
        localStorage.setItem('theme', 'dark');
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
    const submitBtn = form.querySelector('.submit-btn');
    const originalBtnText = submitBtn.textContent;
    submitBtn.textContent = 'Posting Reply...';
    submitBtn.disabled = true;

    try {
      await emailjs.sendForm('service_nzx2dix', 'template_a9wwmp9', form);

      // Display sleek in-page thread reply success card (stays until reload)
      showThreadReplySuccess(form);
      form.reset();
    } catch (error) {
      alert(
        'Failed to send message. Error details: ' + JSON.stringify(error),
      );
    } finally {
      submitBtn.textContent = originalBtnText;
      submitBtn.disabled = false;
    }
  })();
}

function showThreadReplySuccess(form) {
  let existing = document.getElementById('thread-success-banner');
  if (existing) existing.remove();

  const successBanner = document.createElement('div');
  successBanner.id = 'thread-success-banner';
  successBanner.className = 'thread-success-popup';
  successBanner.innerHTML = `
    <div class="success-avatar">
      <img src="profile.png" alt="Thomas Gakumu" />
    </div>
    <div class="success-content">
      <div class="success-header">
        <strong>Thomas Gakumu</strong> <i class="fa-solid fa-circle-check verified"></i>
        <span class="handle">@thomas_gakumu</span>
      </div>
      <p class="success-msg">💬 Reply posted successfully! Thank you for reaching out. I will get back to you soon.</p>
    </div>
  `;

  form.parentNode.insertBefore(successBanner, form);
  // Stays persistent on the thread post until browser reload.
}
