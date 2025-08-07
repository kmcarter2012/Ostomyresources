// JavaScript for the Ostomy Resource Directory
// Handles search filtering and responsive navigation toggle

document.addEventListener('DOMContentLoaded', () => {
  const searchInput = document.getElementById('search-input');
  const resources = document.querySelectorAll('.resource');

  // Filter resources as user types
  searchInput.addEventListener('input', () => {
    const query = searchInput.value.trim().toLowerCase();
    resources.forEach(resource => {
      const text = resource.getAttribute('data-name') + ' ' + resource.textContent.toLowerCase();
      if (text.includes(query)) {
        resource.style.display = '';
      } else {
        resource.style.display = 'none';
      }
    });
  });

  // Toggle navigation on small screens
  const navToggle = document.querySelector('.nav-toggle');
  const navLinks = document.querySelector('.nav-links');
  navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('open');
  });
});
