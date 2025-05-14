const themeSelect = document.getElementById('theme');
const animateBtn = document.getElementById('animateBtn');

// Load saved theme from localStorage
document.addEventListener('DOMContentLoaded', () => {
  const savedTheme = localStorage.getItem('theme') || 'light';
  document.body.className = savedTheme;
  themeSelect.value = savedTheme;
});

// Store theme selection in localStorage
themeSelect.addEventListener('change', () => {
  const selectedTheme = themeSelect.value;
  localStorage.setItem('theme', selectedTheme);
  document.body.className = selectedTheme;
});

// Animate button when clicked
animateBtn.addEventListener('click', () => {
  animateBtn.classList.add('animate');
  setTimeout(() => {
    animateBtn.classList.remove('animate');
  }, 500); // Match animation duration
});
