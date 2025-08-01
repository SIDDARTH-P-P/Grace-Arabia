document.addEventListener('DOMContentLoaded', function() {
    
    // --- Reusable Navbar & Footer Loader ---
    const navbarHTML = `
        <div class="container">
            <a class="navbar-brand" href="index.html">
                <img src="assets/images/logo.png" alt="Grace Arabia Logo">
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav ms-auto">
                    <li class="nav-item"><a class="nav-link" href="index.html#home">Home</a></li>
                    <li class="nav-item"><a class="nav-link" href="index.html#about">About Us</a></li>
                    <li class="nav-item"><a class="nav-link" href="index.html#services">Our Divisions</a></li>
                    <li class="nav-item"><a class="nav-link" href="index.html#why-us">Why Us</a></li>
                </ul>
            </div>
        </div>
    `;

    const footerHTML = `
        <div class="container">
            <div class="row">
                <div class="col-lg-4 col-md-12 mb-4 mb-lg-0">
                    <img src="assets/images/logo.png" alt="Grace Arabia Logo" class="footer-logo">
                    <p class="text-secondary">Your trusted partner in building, innovation, and digital growth across the Middle East and India.</p>
                </div>
                <div class="col-lg-2 col-md-4 mb-4 mb-lg-0">
                    <h5 class="footer-heading">Links</h5>
                    <ul class="list-unstyled">
                        <li><a href="index.html#home">Home</a></li>
                        <li><a href="index.html#about">About</a></li>
                        <li><a href="index.html#services">Services</a></li>
                        <li><a href="index.html#why-us">Why Us</a></li>
                    </ul>
                </div>
                <div class="col-lg-3 col-md-4 mb-4 mb-lg-0">
                    <h5 class="footer-heading">Legal</h5>
                    <ul class="list-unstyled">
                        <li><a href="privacy.html">Privacy Policy</a></li>
                        <li><a href="terms.html">Terms & Conditions</a></li>
                        <li><a href="cookie.html">Cookie Policy</a></li>
                    </ul>
                </div>
                <div class="col-lg-3 col-md-4 mb-4 mb-lg-0">
                    <h5 class="footer-heading">Contact</h5>
                    <p class="text-secondary">
                        📍 Corporate Office: Bahrain<br>
                        🌍 Regional Presence: India | Saudi Arabia
                    </p>
                </div>
            </div>
            <div class="text-center p-3 mt-4 footer-bottom">
                © ${new Date().getFullYear()} Grace Arabia Company for Contracting. All Rights Reserved.
            </div>
        </div>
    `;

    // Inject Navbar and Footer into all pages
    const navbar = document.getElementById('navbar');
    const footer = document.getElementById('footer');
    if (navbar) navbar.innerHTML = navbarHTML;
    if (footer) footer.innerHTML = footerHTML;


    // --- Scroll Animations ---
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const delay = entry.target.getAttribute('data-delay') || 0;
                setTimeout(() => {
                    entry.target.classList.add('is-visible');
                }, delay);
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1
    });

    const elementsToAnimate = document.querySelectorAll('.animate-on-scroll');
    elementsToAnimate.forEach(el => observer.observe(el));


    // --- Active Nav Link on Scroll for index.html ---
    // Only run this part on the main page
    if (window.location.pathname.endsWith('index.html') || window.location.pathname === '/') {
        const navLinks = document.querySelectorAll('#navbarNav .nav-link');
        const sections = document.querySelectorAll('main section');

        window.addEventListener('scroll', () => {
            let current = '';
            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                if (pageYOffset >= sectionTop - 100) {
                    current = section.getAttribute('id');
                }
            });

            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href').includes(current)) {
                    link.classList.add('active');
                }
            });
        });
    }
});