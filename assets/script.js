document.addEventListener("DOMContentLoaded", () => {
  // flyonui.init();
  const navbarToggle = document.getElementById("navbar-toggle");
  const mobileMenu = document.getElementById("mobile-menu");
  const allSections = document.querySelectorAll("main > section");
  const detailPage = document.getElementById("service-detail-page");
  const detailContent = document.getElementById("service-detail-content");
  const loadingScreen = document.getElementById("loading-screen");
  const mainPageContent = document.getElementById("main-content");
  const cardLinks = document.querySelectorAll(".card-link");
  const backButton = document.getElementById("back-to-services");

  navbarToggle.addEventListener("click", () => {
    mobileMenu.classList.toggle("hidden");
  });
  const menuToggle = document.getElementById("navbar-toggle");
  const menu = document.getElementById("menu");
  const menuIcon = document.getElementById("menu-icon");
  const closeIcon = document.getElementById("close-icon");

  menuToggle.addEventListener("click", () => {
    menu.classList.toggle("hidden");
    menuIcon.classList.toggle("hidden");
    closeIcon.classList.toggle("hidden");
  });

  // Smooth scrolling for navigation links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      // Hide detail page if a main section link is clicked
      detailPage.classList.add("hidden");

      // Show all sections again before scrolling
      allSections.forEach((section) => {
        section.classList.remove("hidden");
      });

      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth",
      });
    });
  });

  // Card click logic
  cardLinks.forEach((card) => {
    card.addEventListener("click", () => {
      const serviceTitle = card.getAttribute("data-service-title");
      const serviceIcon = card.getAttribute("data-service-icon");
      const serviceDescription = card.getAttribute("data-service-description");

      // Show loading screen
      loadingScreen.classList.remove("fade-out");
      mainPageContent.classList.remove("show");

      // Simulate a delay for the loading animation
      setTimeout(() => {
        // Hide all other sections
        allSections.forEach((section) => {
          section.classList.add("hidden");
        });

        // Show the detail page and populate content
        detailPage.classList.remove("hidden");
        detailContent.innerHTML = `
                    <h2 class="text-4xl md:text-5xl font-extrabold leading-tight text-light-text mb-6">${serviceTitle}</h2>
                    <div class="flex items-center space-x-4 mb-8">
                        <div class="p-6 bg-blue-200 text-blue-800 rounded-lg flex-shrink-0">
                            <i class="${serviceIcon} text-4xl"></i>
                        </div>
                        <p class="text-gray-300 text-lg">${serviceDescription}</p>
                    </div>
                    <p class="text-gray-400">This is a detailed page for ${serviceTitle}. Here you can add more information about the service, case studies, or a contact form specific to this offering. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent scelerisque, sapien in placerat fermentum, ligula eros efficitur justo, eget consectetur leo ligula ac metus.</p>
                `;

        // Hide loading screen and show main content
        loadingScreen.classList.add("fade-out");
        mainPageContent.classList.add("show");

        // Scroll to the top of the detail page
        window.scrollTo({ top: 0, behavior: "smooth" });
      }, 1000); // 1-second delay
    });
  });

  // Back button logic
  backButton.addEventListener("click", () => {
    detailPage.classList.add("hidden");
    allSections.forEach((section) => {
      section.classList.remove("hidden");
    });
    window.scrollTo({
      top: document.getElementById("our-services").offsetTop,
      behavior: "smooth",
    });
  });

  // Initial AOS initialization
  AOS.init({
    once: false,
    duration: 800,
  });

  // Loading screen logic
  setTimeout(() => {
    loadingScreen.classList.add("fade-out");
    mainPageContent.classList.add("show");
  }, 500);

  document.getElementById("navbar-toggle").onclick = () => {
    document.getElementById("mobile-menu").classList.remove("translate-x-full");
  };

  document.getElementById("close-menu").onclick = () => {
    document.getElementById("mobile-menu").classList.add("translate-x-full");
  };

  const toggleBtn = document.getElementById("navbar-toggle");
  const bar1 = document.getElementById("bar1");
  const bar2 = document.getElementById("bar2");
  const bar3 = document.getElementById("bar3");

  const dropdownBtn = document.getElementById("dropdown-button");
  const dropdownMenu = document.getElementById("dropdown-menu");
  const dropdownArrow = document.getElementById("dropdown-arrow");

  let menuOpen = false;

  //   toggleBtn.addEventListener("click", () => {
  //     menuOpen = !menuOpen;
  //     mobileMenu.classList.toggle("translate-x-full");

  //   // Animate hamburger to X
  //   if (menuOpen) {
  //     bar1.classList.add("rotate-45", "translate-y-1.5");
  //     bar2.classList.add("opacity-0");
  //     bar3.classList.add("-rotate-45", "-translate-y-1.5");
  //   } else {
  //     bar1.classList.remove("rotate-45", "translate-y-1.5");
  //     bar2.classList.remove("opacity-0");
  //     bar3.classList.remove("-rotate-45", "-translate-y-1.5");
  //   }
  // });

  // Dropdown toggle
  // dropdownBtn.addEventListener("click", (e) => {
  //   e.preventDefault();
  //   dropdownMenu.classList.toggle("hidden");
  //   dropdownArrow.classList.toggle("rotate-180");
  // });

  // Close dropdown if click outside
  document.addEventListener("click", (e) => {
    if (!dropdownBtn.contains(e.target) && !dropdownMenu.contains(e.target)) {
      dropdownMenu.classList.add("hidden");
      dropdownArrow.classList.remove("rotate-180");
    }
  });
});

// document.addEventListener('DOMContentLoaded', () => {
//   const mobileToggle = document.getElementById('ga-mobile-toggle');
//   const mobileNav = document.getElementById('ga-mobile-nav');
//   const menuIcon = document.getElementById('ga-menu-icon');
//   const closeIcon = document.getElementById('ga-close-icon');

//   const divisionBtn = document.getElementById('ga-mobile-division-btn');
//   const divisionContent = document.getElementById('ga-mobile-division');
//   const divisionArrow = document.getElementById('ga-mobile-division-arrow');

//   // mobile toggle
//   mobileToggle.addEventListener('click', () => {
//     mobileNav.classList.toggle('hidden');
//     menuIcon.classList.toggle('hidden');
//     closeIcon.classList.toggle('hidden');
//     const expanded = mobileToggle.getAttribute('aria-expanded') === 'true';
//     mobileToggle.setAttribute('aria-expanded', (!expanded).toString());
//   });

//   // mobile division collapse
//   divisionBtn.addEventListener('click', () => {
//     divisionContent.classList.toggle('hidden');
//     const open = !divisionContent.classList.contains('hidden');
//     divisionBtn.setAttribute('aria-expanded', open.toString());
//     divisionArrow.style.transform = open ? 'rotate(180deg)' : 'rotate(0deg)';
//   });

//   // optional: close mobile menu if click outside (small helper)
//   document.addEventListener('click', (e) => {
//     if (!mobileNav.contains(e.target) && !mobileToggle.contains(e.target) && !mobileNav.classList.contains('hidden')) {
//       // close
//       mobileNav.classList.add('hidden');
//       menuIcon.classList.remove('hidden');
//       closeIcon.classList.add('hidden');
//       mobileToggle.setAttribute('aria-expanded','false');
//     }
//   });
// });

document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const form = e.target;
  const formData = new FormData(form);
  const messageBox = document.getElementById("formMessage");
  const submitBtn = document.getElementById("submitBtn");
  const btnText = document.getElementById("btnText");
  const btnSpinner = document.getElementById("btnSpinner");

  // Show loader
  btnText.textContent = "Sending...";
  btnSpinner.classList.remove("hidden");
  submitBtn.disabled = true;

  fetch("send-mail.php", {
    method: "POST",
    body: formData,
  })
    .then((response) => response.text())
    .then((result) => {
      messageBox.textContent = result;
      messageBox.className = "text-green-600 text-sm mt-4 md:col-span-2";

      form.reset(); // Clear form

      // Reset UI after 2 seconds
      setTimeout(() => {
        messageBox.textContent = "";
      }, 2000);
    })
    .catch((error) => {
      messageBox.textContent = "Something went wrong. Please try again.";
      messageBox.className = "text-red-600 text-sm mt-4 md:col-span-2";
    })
    .finally(() => {
      // Hide loader and re-enable button
      btnText.textContent = "SEND NOW";
      btnSpinner.classList.add("hidden");
      submitBtn.disabled = false;
    });
});

// Add click handlers for service cards
document.querySelectorAll(".service-card-link").forEach((card) => {
  card.addEventListener("click", function (e) {
    // Add click animation
    this.style.transform = "translateY(-2px) scale(0.98)";
    setTimeout(() => {
      this.style.transform = "";
    }, 150);
  });
});

// Add intersection observer for staggered animations
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.animationDelay = `${
          entry.target.dataset.delay || 0
        }ms`;
      }
    });
  },
  { threshold: 0.1 }
);

document.querySelectorAll(".service-card-link").forEach((card) => {
  observer.observe(card);
});
