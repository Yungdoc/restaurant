
        const hamburger = document.getElementById('hamburger');
        const mobileMenu = document.getElementById('mobileMenu');
        const menuOverlay = document.getElementById('menuOverlay');
        const mobileMenuLinks = document.querySelectorAll('.mobile-menu a');

        // Toggle mobile menu
        function toggleMobileMenu() {
            hamburger.classList.toggle('active');
            mobileMenu.classList.toggle('active');
            menuOverlay.classList.toggle('active');
            
            // Prevent body scroll when menu is open
            if (mobileMenu.classList.contains('active')) {
                document.body.style.overflow = 'hidden';
            } else {
                document.body.style.overflow = 'auto';
            }
        }

        // X bar close for mobile menu
        const closeX = document.getElementById('closeX');
        if (closeX) {
            closeX.addEventListener('click', function() {
                const hamburger = document.getElementById('hamburger');
                const mobileMenu = document.getElementById('mobileMenu');
                const menuOverlay = document.getElementById('menuOverlay');
                hamburger.classList.remove('active');
                mobileMenu.classList.remove('active');
                menuOverlay.classList.remove('active');
                document.body.style.overflow = 'auto';
            });
        }

        // Close mobile menu
        function closeMobileMenu() {
            hamburger.classList.remove('active');
            mobileMenu.classList.remove('active');
            menuOverlay.classList.remove('active');
            document.body.style.overflow = 'auto';
        }

        // Event listeners
        hamburger.addEventListener('click', toggleMobileMenu);
        menuOverlay.addEventListener('click', closeMobileMenu);

        // Close menu when clicking on links
        mobileMenuLinks.forEach(link => {
            link.addEventListener('click', closeMobileMenu);
        });

        // Close menu on window resize if open
        window.addEventListener('resize', () => {
            if (window.innerWidth > 768 && mobileMenu.classList.contains('active')) {
                closeMobileMenu();
            }
        });

        // Handle escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && mobileMenu.classList.contains('active')) {
                closeMobileMenu();
            }
        });

        // Slider functionality
        const indicators = document.querySelectorAll('.indicator');
        let currentSlide = 0;

        // Update active indicator
        function updateIndicators() {
            indicators.forEach((indicator, index) => {
                indicator.classList.toggle('active', index === currentSlide);
            });
        }

        // Auto-update indicators based on animation
        setInterval(() => {
            currentSlide = (currentSlide + 1) % 4;
            updateIndicators();
        }, 4000); // Change every 4 seconds to match animation timing

        // Optional: Click functionality for indicators
        indicators.forEach((indicator, index) => {
            indicator.addEventListener('click', () => {
                currentSlide = index;
                updateIndicators();
                // You could also modify the animation here if you want manual control
            });
        });

        // Footer dropdown toggle function for mobile only
        function toggleFooterDropdown(element) {
            // Only work on mobile screens
            if (window.innerWidth <= 768) {
                const arrow = element.querySelector('.footer-dropdown-arrow');
                const ul = element.nextElementSibling;
                
                // Close all other dropdowns first
                document.querySelectorAll('.footer-section ul').forEach(list => {
                    if (list !== ul) {
                        list.classList.remove('show');
                    }
                });
                document.querySelectorAll('.footer-dropdown-arrow').forEach(otherArrow => {
                    if (otherArrow !== arrow) {
                        otherArrow.classList.remove('active');
                    }
                });
                
                // Toggle current dropdown
                arrow.classList.toggle('active');
                ul.classList.toggle('show');
            }
        }