   // Initialize the page
   function initializePage() {
    const loadingScreen = document.getElementById("loading-screen");
    const mainContent = document.getElementById("main-content");
    const mobileMenu = document.getElementById("mobile-menu");
    const navbarToggle = document.getElementById("navbar-toggle");



    // Show loading screen initially
    setTimeout(() => {
      loadingScreen.classList.add("fade-out");
      mainContent.classList.add("show");
    }, 1500);

      // Mobile menu toggle
      navbarToggle.addEventListener("click", () => {
        mobileMenu.classList.toggle("hidden");
      });
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth'
          });
        }
      });
    });

    // Add scroll effect to navigation
    window.addEventListener('scroll', () => {
      const nav = document.querySelector('.nav-glass');
      if (window.scrollY > 100) {
        nav.style.background = 'rgba(15, 20, 25, 0.98)';
      } else {
        nav.style.background = 'rgba(15, 20, 25, 0.95)';
      }
    });

    // Add click effects to buttons
    document.querySelectorAll('.btn-luxury').forEach(btn => {
      btn.addEventListener('click', function (e) {
        e.preventDefault();
        console.log('Button clicked:', this.textContent);
        // Add button functionality here
      });
    });
  }

  // Initialize when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializePage);
  } else {
    initializePage();
  }

    // Initialize AOS (Animate On Scroll) library
    AOS.init({
      once: true, // Only animate once as it's a single page section.
      duration: 1000, // Animation duration in ms
      easing: 'ease-out-cubic', // Easing function
    });