document.addEventListener("DOMContentLoaded", () => {
  const navbarToggle = document.getElementById("navbar-toggle");
  const mobileMenu = document.getElementById("mobile-menu");
  const mainContent = document.getElementById("main-content");
  const loadingScreen = document.getElementById("loading-screen");

  if (navbarToggle && mobileMenu) {
    navbarToggle.addEventListener("click", () => {
      mobileMenu.classList.toggle("hidden");
    });
  }

  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      if (!mobileMenu.classList.contains("hidden")) {
        mobileMenu.classList.add("hidden");
      }

      // Scroll to the target section
      const targetId = this.getAttribute("href");
      const targetElement = document.querySelector(targetId);

      if (targetElement) {
        // Adjust scroll position for fixed header
        const headerOffset = document.querySelector('.header-main').offsetHeight;
        const elementPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
        // Added a small buffer (e.g., 20px) to prevent content from being perfectly
        // hidden behind the fixed header. Adjust as needed.
        const offsetPosition = elementPosition - headerOffset - 20;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth"
        });
      }
    });
  });

  // Initialize AOS (Animate On Scroll) library
  AOS.init({
    once: true, // Only animate once as it's a single page section.
    duration: 1000, // Animation duration in ms
    easing: 'ease-out-cubic', // Easing function
  });

  // Loading screen logic
  // Simulate a network request or asset loading delay
    // Show loading screen initially
    setTimeout(() => {
      loadingScreen.classList.add("fade-out");
      mainContent.classList.add("show");
    }, 1500);


  // Optional: Add a class to the header on scroll for styling changes
  const headerMain = document.querySelector('.header-main');
  if (headerMain) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 50) { // After scrolling 50px
        headerMain.classList.add('scrolled'); // Add a class for styling
      } else {
        headerMain.classList.remove('scrolled');
      }
    });
  }
});