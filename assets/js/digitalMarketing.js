// Loading screen
window.addEventListener("load", function () {
  const loadingScreen = document.getElementById("loading-screen");
  const mainContent = document.getElementById("main-content");
  // Initial AOS initialization
  AOS.init({
    once: false,
    duration: 800,
  });

  // Loading screen logic
  setTimeout(() => {
    loadingScreen.classList.add("fade-out");
    mainContent.classList.add("show");
  }, 500);
});

// Mobile menu toggle
document.getElementById("navbar-toggle").addEventListener("click", function () {
  const mobileMenu = document.getElementById("mobile-menu");
  mobileMenu.classList.toggle("hidden");
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});

// Counter animation
function animateCounter(element, target) {
  let current = 0;
  const increment = target / 100;
  const timer = setInterval(() => {
    current += increment;
    if (current >= target) {
      current = target;
      clearInterval(timer);
    }
    element.textContent = Math.floor(current) + (element.dataset.suffix || "");
  }, 20);
}

// Intersection Observer for animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      // Counter animation
      if (entry.target.classList.contains("stats-number")) {
        const target = parseInt(entry.target.textContent);
        animateCounter(entry.target, target);
      }

      // Add animation classes
      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0)";
    }
  });
}, observerOptions);

// Observe elements
document
  .querySelectorAll(
    ".fade-in-up, .slide-in-left, .slide-in-right, .stats-number"
  )
  .forEach((el) => {
    el.style.opacity = "0";
    el.style.transform = "translateY(30px)";
    observer.observe(el);
  });

// Navbar scroll effect
window.addEventListener("scroll", function () {
  const navbar = document.getElementById("navbar");
  if (window.scrollY > 100) {
    navbar.style.background = "rgba(15, 15, 15, 0.98)";
  } else {
    navbar.style.background = "rgba(15, 15, 15, 0.95)";
  }
});
