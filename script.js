// 🌗 Light/Dark Mode Toggle
const themeToggle = document.getElementById('themeToggle');
themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});

// 🎮 Counter Game
let count = 0;
const countDisplay = document.getElementById('count');
document.getElementById('incrementBtn').addEventListener('click', () => {
  count++;
  countDisplay.textContent = count;
});
document.getElementById('resetBtn').addEventListener('click', () => {
  count = 0;
  countDisplay.textContent = count;
});

// ❓ Collapsible FAQ Section
const faqToggle = document.querySelector('.faq-toggle');
const faqAnswer = document.querySelector('.faq-answer');
faqToggle.addEventListener('click', () => {
  faqAnswer.classList.toggle('hidden');
});

// ✅ Form Validation
document.getElementById('signupForm').addEventListener('submit', function (e) {
  e.preventDefault();
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value;
  const messages = [];

  // Name validation
  if (name.length < 2) {
    messages.push('Name must be at least 2 characters long.');
  }

  // Email validation using regex
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    messages.push('Please enter a valid email address.');
  }

  // Password validation
  if (password.length < 6) {
    messages.push('Password must be at least 6 characters.');
  }

  const formMessages = document.getElementById('formMessages');
  formMessages.innerHTML = '';
  if (messages.length > 0) {
    messages.forEach(msg => {
      const p = document.createElement('p');
      p.textContent = msg;
      p.style.color = 'red';
      formMessages.appendChild(p);
    });
  } else {
    formMessages.innerHTML = '<p style="color:green;">Form submitted successfully!</p>';
  }
});
