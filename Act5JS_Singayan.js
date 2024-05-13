document.addEventListener("DOMContentLoaded", function() {
  const navbarLinks = document.querySelectorAll('.navbar-nav .nav-link');

  navbarLinks.forEach(link => {
    link.addEventListener('click', function(event) {
      event.preventDefault();

      const targetId = this.getAttribute('href').substring(1);
      
      const contentDivs = document.querySelectorAll('.center > div');
      contentDivs.forEach(div => {
        div.style.display = 'none';
      });
      
      const selectedDiv = document.getElementById(targetId);
      if (selectedDiv) {
        selectedDiv.style.display = 'block';
      }
    });
  });
});
document.addEventListener("DOMContentLoaded", function() {
  const toggleButton = document.getElementById('toggleButton');
  const body = document.body;

  toggleButton.addEventListener('click', function() {
    body.classList.toggle('light-mode');
    body.classList.toggle('dark-mode');
  });
});
document.addEventListener("DOMContentLoaded", function() {
  const toggleSwitch = document.getElementById('modeToggleSwitch');
  const body = document.body;

  toggleSwitch.addEventListener('change', function() {
    body.classList.toggle('light-mode');
    body.classList.toggle('dark-mode');
  });
});

