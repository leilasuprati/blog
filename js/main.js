// Soft Luxe Edit — shared utilities

document.addEventListener('DOMContentLoaded', () => {
  // Close mobile nav when clicking a link
  document.querySelectorAll('.nav a').forEach(link => {
    link.addEventListener('click', () => {
      document.querySelector('.nav')?.classList.remove('open');
    });
  });
});
