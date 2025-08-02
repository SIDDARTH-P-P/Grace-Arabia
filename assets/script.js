document.addEventListener("DOMContentLoaded", () => {
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
      const serviceId = card.getAttribute("data-service-id");
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

  const dropdownBtn = document.querySelector("#dropdown-button");
  const dropdownMenu = document.querySelector("#dropdown-menu");

  dropdownBtn.addEventListener("click", function (e) {
    e.preventDefault(); // prevent a tag from navigating
    dropdownMenu.classList.toggle("hidden");
  });

  document.addEventListener('click', function (e) {
  if (!dropdownBtn.contains(e.target) && !dropdownMenu.contains(e.target)) {
    dropdownMenu.classList.add('hidden');
  }
});
});
