    // Loading Screen
    window.addEventListener('load', function() {
        const loadingScreen = document.getElementById('loading-screen');
        const mainContent = document.getElementById('main-content');
        
        setTimeout(() => {
          loadingScreen.style.opacity = '0';
          setTimeout(() => {
            loadingScreen.style.display = 'none';
            mainContent.style.opacity = '1';
            mainContent.style.transition = 'opacity 0.5s ease-in-out';
            
            // Trigger fade-in animations
            const fadeElements = document.querySelectorAll('.fade-in');
            fadeElements.forEach((el, index) => {
              setTimeout(() => {
                el.classList.add('visible');
              }, index * 100);
            });
          }, 500);
        }, 2000);
      });
  
      // Mobile Navigation Toggle
      document.getElementById('navbar-toggle').addEventListener('click', function() {
        const mobileMenu = document.getElementById('mobile-menu');
        mobileMenu.classList.toggle('hidden');
      });
  
      // Scroll-triggered animations
      const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      };
  
      const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      }, observerOptions);
  
      // Observe all fade-in elements
      document.addEventListener('DOMContentLoaded', function() {
        const fadeElements = document.querySelectorAll('.fade-in');
        fadeElements.forEach(el => {
          observer.observe(el);
        });
      });
  
      // Smooth scrolling for anchor links
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
          e.preventDefault();
          const target = document.querySelector(this.getAttribute('href'));
          if (target) {
            target.scrollIntoView({
              behavior: 'smooth',
              block: 'start'
            });
          }
        });
      });
  
      // Add scroll effect to navbar
      window.addEventListener('scroll', function() {
        const navbar = document.getElementById('navbar');
        if (window.scrollY > 100) {
          navbar.style.background = 'rgba(17, 19, 21, 0.98)';
          navbar.style.backdropFilter = 'blur(15px)';
        } else {
          navbar.style.background = 'rgba(17, 19, 21, 0.95)';
          navbar.style.backdropFilter = 'blur(10px)';
        }
      });
  
      // Counter animation for stats
      function animateCounters() {
        const counters = document.querySelectorAll('.stat-number');
        
        counters.forEach(counter => {
          const target = parseInt(counter.textContent.replace(/\D/g, ''));
          const suffix = counter.textContent.replace(/\d/g, '');
          let current = 0;
          const increment = target / 100;
          const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
              counter.textContent = target + suffix;
              clearInterval(timer);
            } else {
              counter.textContent = Math.floor(current) + suffix;
            }
          }, 20);
        });
      }
  
      // Trigger counter animation when stats section is visible
      const statsObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            animateCounters();
            statsObserver.unobserve(entry.target);
          }
        });
      }, { threshold: 0.5 });
  
      document.addEventListener('DOMContentLoaded', function() {
        const statsSection = document.querySelector('.stat-card');
        if (statsSection) {
          statsObserver.observe(statsSection);
        }
      });