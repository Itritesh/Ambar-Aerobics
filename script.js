
document.addEventListener('DOMContentLoaded', () => {

    // --- PRELOADER (HOME PAGE ONLY) ---
    const preloader = document.getElementById('preloader');
    if (preloader) {
        window.addEventListener('load', () => {
            // Wait for a minimum duration to ensure the initial animation is visible
            setTimeout(() => {
                // Add the class to trigger the exit animations (text fade + circle wipe)
                preloader.classList.add('preloader-hidden');

                // After the CSS transitions are complete, set display to none
                // Total animation time: 300ms (text fade) + 800ms (circle wipe) = 1100ms
                setTimeout(() => {
                    preloader.style.display = 'none';
                }, 1200); // Using 1.2s to be safe

            }, 2200); // Minimum 2.2s display time after page load
        });
    }

    // --- DATA CONSTANTS ---
    const HERO_CONTENT = [
        {
            img: 'images/Shop.jpeg',
            heading: 'Move. Groove. Transform.'
        },
        {
            img: 'images/yoga 2.jpeg',
            heading: 'Build Your Own Strength'
        },
        {
            img: 'images/yoga 3.jpeg',
            heading: 'Find Your Balance and Power'
        },
        {
            img: 'images/yoga 4.jpeg',
            heading: 'Your Fitness. Your Future.'
        },
    ];
    const GALLERY_IMAGES = [
        'images/Shop 1.jpeg',
        'images/Shop 2.jpeg',
        'images/Shop3.jpeg',
        'images/Interior 1.jpeg',
        'images/Interior 2.jpeg',
        'images/Interior 3.jpeg',
        'images/Interior 4.jpeg',
        'images/Interior 5.jpeg',
        'images/Interior 6.jpeg',
        'images/Interior 7.jpeg',
        'images/Interior 8.jpeg',
        'images/Aerobics 1.jpeg',
        'images/Aerobics 2.jpeg',
        'images/Aerobics 3.jpeg',
        'images/Aerobics 4.jpeg',
        'images/Aerobics.jpeg',
        'images/jumba 1.jpeg',
        'images/jumba 2.jpeg',
        'images/jumba.jpeg',
        'images/yoga 1.jpeg',
        'images/yoga 2.jpeg',
        'images/yoga 3.jpeg',
        'images/yoga 4.jpeg',
        'images/yoga 5.jpeg',
        'images/1.jpeg',
        'images/2.jpeg',
        'images/3.jpeg',
        'images/4.jpeg',
        'images/5.jpeg',
        'images/6.jpeg',
        'images/7.jpeg',
        
        
    ];
    const BRANCHES = [
        { name: 'Mahavir Nagar', area: 'Kandivali (W)', address: 'Ground floor, Gulmohar Society, Opp. Parijat Bldg.', phone: '93260 25755', mapQuery: 'Ambar Aerobics Mahavir Nagar Kandivali West', instagram: '@ambar.aerobics.m.n' },
        { name: 'Charkop', area: 'Kandivali (W)', address: 'Ground floor, Kesari Building, Opp. Bhavishya Nidhi, Sector-3', phone: '82682 87885', mapQuery: 'Ambar Aerobics Charkop', instagram: '@ambar.aerobics.charkop' },
        { name: 'Link Road', area: 'Kandivali (W)', address: '22/23 Panchsheel Enclave Opp. Orchid Suburbia', phone: '93260 28932', mapQuery: 'Ambar Aerobics Link Road Kandivali West', instagram: '@ambar.aerobics.linkroad' },
        { name: 'Thakur Complex', area: 'Kandivali (E)', address: 'Opp. Icici Bank, Near Thakur Vidya Mandir', phone: '97684 71325', mapQuery: 'Ambar Aerobics Thakur Complex Kandivali East', instagram: '@ambar.aerobics.thakurcomplex' },
        { name: 'Gorai', area: 'Borivali (W)', address: 'Diagonally Opp To Mangal Murti Hospital Rdp 01', phone: '83696 75291', mapQuery: 'Ambar Aerobics Gorai Borivali West', instagram: '@ambar.aerobics.gorai' },
        { name: 'Saibaba Nagar', area: 'Borivali (W)', address: 'Gr.Floor, Eltee Geejay Apt. Satya Nagar Road', phone: '97684 70945', mapQuery: 'Ambar Aerobics Saibaba Nagar Borivali West', instagram: '@ambar.aerobics.saibaba' },
        { name: 'Eksar', area: 'Borivali (W)', address: 'Lic Colony 1499 Harish Makhela Nr. Shankar Mandir, Shanti Ashram', phone: '87792 97900', mapQuery: 'Ambar Aerobics Eksar Borivali West', instagram: '@ambar.aerobics.shantiashram' },
        { name: 'Dahivali Society', area: 'Dahisar (W)', address: 'Gr. Floor, Parshuram Thakur, Opp. Dahivali Society', phone: '83690 76544', mapQuery: 'Ambar Aerobics Dahivali Dahisar West', instagram: '@ambar_aerobics_dahisar_west' },
        { name: 'Dahisar East', area: 'Dahisar (E)', address: 'Dahisar East', phone: '93210 55259', mapQuery: 'Ambar Aerobics Dahisar East', instagram: '@ambar.aerobics.dahisar' },
        { name: 'Anand Nagar', area: 'Dahisar (E)', address: 'Gr. Floor, Laxmi CHS LTD. C Wing Next To Union Bank', phone: '93212 95090', mapQuery: 'Ambar Aerobics Anand Nagar Dahisar East', instagram: null },
        { name: 'Rajendra Nagar', area: 'Borivali (E)', address: 'Ground Floor, Dattapada Road, Nr. Flyover Bridge', phone: '79773 91580', mapQuery: 'Ambar Aerobics Rajendra Nagar Borivali East', instagram: '@ambaraerobicsborivalie' },
        { name: 'Ram Mandir Road', area: 'Borivali (W)', address: 'Shop Number 3, Ganesh Vihar Society, Vazira Naka', phone: '85918 91375', mapQuery: 'Ambar Aerobics Ram Mandir Road Borivali West', instagram: '@ambar_aerobicsvajiranaka' },
        { name: 'M.G. Road', area: 'Kandivali (W)', address: 'Behind New Jain Mandir, Opp Union Bank of India.', phone: '91370 79339', mapQuery: 'Ambar Aerobics MG Road Kandivali West', instagram: '@ambar.aerobics.mgroad' },
        { name: 'Iraniwadi', area: 'Kandivali (W)', address: 'Shop No.4, Sairaj garden, Iraniwadi Road No.3', phone: '79774 15245', mapQuery: 'Ambar Aerobics Iraniwadi Kandivali', instagram: '@Ambar.Aerobicsiraniwadi' },
        { name: 'Shankar Lane', area: 'Kandivali (W)', address: '8A, 1st Floor, Rodium Cross Road, Opp. Shankar Mandir', phone: '94259 54790', mapQuery: 'Ambar Aerobics Shankar Lane Kandivali West', instagram: '@Ambar.Aerobicsiraniwadi' },
        { name: 'Link Road', area: 'Malad (W)', address: 'Shop No.217,2nd Floor, Auris Galleria', phone: '93245 64557', mapQuery: 'Ambar Aerobics Auris Malad West', instagram: '@ambaraerobics.auris' }
    ];

    // --- SHARED ELEMENTS ---
    const navbar = document.getElementById('navbar');
    const menuToggle = document.getElementById('menu-toggle');
    const mobileMenu = document.getElementById('mobile-menu');
    const backToTopBtn = document.getElementById('back-to-top');

    // Scrolled state for navbar and back-to-top button
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            navbar.classList.add('shadow-md');
            if (backToTopBtn) {
                backToTopBtn.classList.remove('opacity-0', 'invisible');
                backToTopBtn.classList.add('opacity-100', 'visible');
            }
        } else {
            navbar.classList.remove('shadow-md');
            if (backToTopBtn) {
                backToTopBtn.classList.remove('opacity-100', 'visible');
                backToTopBtn.classList.add('opacity-0', 'invisible');
            }
        }
    });

    // Mobile menu toggle
    menuToggle.addEventListener('click', () => {
        const isOpen = mobileMenu.classList.contains('translate-x-0');
        const spans = menuToggle.querySelectorAll('span');
        if (isOpen) {
            mobileMenu.classList.remove('translate-x-0');
            mobileMenu.classList.add('-translate-x-full');
            document.body.style.overflow = '';
            spans[0].classList.remove('rotate-45', 'translate-y-2');
            spans[1].classList.remove('opacity-0');
            spans[2].classList.remove('-rotate-45', '-translate-y-2');
        } else {
            mobileMenu.classList.remove('-translate-x-full');
            mobileMenu.classList.add('translate-x-0');
            document.body.style.overflow = 'hidden';
            spans[0].classList.add('rotate-45', 'translate-y-2');
            spans[1].classList.add('opacity-0');
            spans[2].classList.add('-rotate-45', '-translate-y-2');
        }
    });

    // Back to top button functionality
    if (backToTopBtn) {
        backToTopBtn.addEventListener('click', () => {
             window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    // Smooth scrolling for hash links on the same page
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                const offsetTop = targetElement.offsetTop - parseInt(getComputedStyle(document.documentElement).getPropertyValue('--navbar-height'));
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
                 // Close mobile menu if open
                if (mobileMenu.classList.contains('translate-x-0')) {
                    menuToggle.click();
                }
            }
        });
    });

    // --- HERO SLIDER ---
    const sliderContainer = document.getElementById('hero-slider-container');
    if (sliderContainer) {
        let currentSlide = 0;
        let slideInterval;
        const dotsContainer = document.getElementById('hero-dots');
        const heroHeading = document.getElementById('hero-heading');
        
        function initHeroSlider() {
            sliderContainer.innerHTML = HERO_CONTENT.map((item, index) => `
                <div class="hero-slide absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ease-in-out ${index === 0 ? 'opacity-100' : 'opacity-0'}">
                    <div class="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-primary/30 z-10"></div>
                    <img src="${item.img}" alt="Hero background ${index + 1}" class="w-full h-full object-cover" ${index > 0 ? 'loading="lazy"' : ''} />
                </div>
            `).join('');
            
            dotsContainer.innerHTML = HERO_CONTENT.map((_, index) => 
                `<button data-slide="${index}" class="hero-dot w-3 h-3 rounded-full transition-all duration-300 border-2 border-transparent ${index === 0 ? 'bg-primary border-white' : 'bg-white/50'}"></button>`
            ).join('');

            updateSlider();
            startSlider();
        }

        function updateSlider() {
            const slides = document.querySelectorAll('.hero-slide');
            const dots = document.querySelectorAll('.hero-dot');
            
            // Fade out the heading
            heroHeading.style.transition = 'none';
            heroHeading.style.opacity = '0';
            
            // Switch slides and dots
            slides.forEach((slide, index) => {
                slide.classList.toggle('opacity-100', index === currentSlide);
                slide.classList.toggle('opacity-0', index !== currentSlide);
            });
            dots.forEach((dot, index) => {
                dot.classList.toggle('bg-primary', index === currentSlide);
                dot.classList.toggle('border-white', index === currentSlide);
                dot.classList.toggle('bg-white/50', index !== currentSlide);
            });
            
            // Update the text and fade it back in
            setTimeout(() => {
                heroHeading.textContent = HERO_CONTENT[currentSlide].heading;
                heroHeading.style.transition = 'opacity 0.5s ease-in';
                heroHeading.style.opacity = '1';
            }, 100); // Short delay for a smoother effect
        }
        
        function goToSlide(n) {
            currentSlide = (n + HERO_CONTENT.length) % HERO_CONTENT.length;
            updateSlider();
            resetSliderInterval();
        }

        function startSlider() {
             slideInterval = setInterval(() => goToSlide(currentSlide + 1), 5000);
        }
        
        function resetSliderInterval() {
            clearInterval(slideInterval);
            startSlider();
        }

        document.getElementById('hero-prev').addEventListener('click', () => goToSlide(currentSlide - 1));
        document.getElementById('hero-next').addEventListener('click', () => goToSlide(currentSlide + 1));
        dotsContainer.addEventListener('click', (e) => {
            if (e.target.matches('.hero-dot')) {
                goToSlide(parseInt(e.target.dataset.slide));
            }
        });

        initHeroSlider();
    }


    // --- GALLERY & LIGHTBOX ---
    const galleryGrid = document.getElementById('gallery-grid');
    if (galleryGrid) {
        let currentGalleryIndex = 0;
        const lightbox = document.getElementById('lightbox');
        const lightboxImg = document.getElementById('lightbox-img');

        function initGallery() {
            galleryGrid.innerHTML = GALLERY_IMAGES.map((src, index) => `
                <div data-index="${index}" class="gallery-item group relative overflow-hidden rounded-lg shadow-lg cursor-pointer aspect-[4/3]">
                    <img src="${src}" alt="Gallery ${index + 1}" loading="lazy" class="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500" />
                    <div class="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300"></div>
                </div>
            `).join('');
        }

        function openLightbox(index) {
            currentGalleryIndex = index;
            lightboxImg.src = GALLERY_IMAGES[currentGalleryIndex];
            lightbox.classList.remove('hidden');
            document.body.style.overflow = 'hidden';
        }
        
        function closeLightbox() {
            lightbox.classList.add('hidden');
            document.body.style.overflow = '';
        }

        function showNextImage() {
            currentGalleryIndex = (currentGalleryIndex + 1) % GALLERY_IMAGES.length;
            lightboxImg.src = GALLERY_IMAGES[currentGalleryIndex];
        }

        function showPrevImage() {
            currentGalleryIndex = (currentGalleryIndex - 1 + GALLERY_IMAGES.length) % GALLERY_IMAGES.length;
            lightboxImg.src = GALLERY_IMAGES[currentGalleryIndex];
        }
        
        galleryGrid.addEventListener('click', e => {
            const item = e.target.closest('.gallery-item');
            if (item) openLightbox(parseInt(item.dataset.index));
        });

        document.getElementById('lightbox-close').addEventListener('click', closeLightbox);
        document.getElementById('lightbox-next').addEventListener('click', (e) => { e.stopPropagation(); showNextImage(); });
        document.getElementById('lightbox-prev').addEventListener('click', (e) => { e.stopPropagation(); showPrevImage(); });
        lightbox.addEventListener('click', (e) => { if(e.target === lightbox) closeLightbox(); });

        document.addEventListener('keydown', (e) => {
            if (!lightbox.classList.contains('hidden')) {
                if (e.key === 'Escape') closeLightbox();
                if (e.key === 'ArrowRight') showNextImage();
                if (e.key === 'ArrowLeft') showPrevImage();
            }
        });

        initGallery();
    }
    
    // --- BRANCHES ---
    const branchesContainer = document.getElementById('branches-container');
    if (branchesContainer) {
        function initBranches() {
            const cardsHTML = BRANCHES.map(branch => `
                <div class="branch-card bg-white rounded-xl shadow-lg p-6 flex flex-col transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
                    <div class="flex-grow">
                        <div class="flex items-center mb-4">
                            <div class="bg-primary/10 p-3 rounded-full mr-4">
                                <svg class="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                            </div>
                            <div>
                                <h3 class="font-bold text-primary text-xl">${branch.name}</h3>
                                <p class="font-semibold text-accent">${branch.area}</p>
                            </div>
                        </div>
                        <p class="text-gray-600 mb-4">${branch.address}</p>
                        <div class="space-y-3 mb-4">
                            ${branch.phone ? `
                                <a href="tel:+91${branch.phone.replace(/\s/g, '')}" class="flex items-center text-gray-700 hover:text-primary transition-colors">
                                    <svg class="w-5 h-5 mr-3 text-gray-400" fill="currentColor" viewBox="0 0 20 20"><path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path></svg>
                                    <span>${branch.phone}</span>
                                </a>
                            ` : ''}
                            ${branch.instagram ? `
                                <a href="https://www.instagram.com/${branch.instagram.replace('@','')}" target="_blank" rel="noopener noreferrer" class="flex items-center text-gray-700 hover:text-primary transition-colors">
                                    <svg class="w-5 h-5 mr-3 text-gray-400" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M12.315 2c-4.01.07-5.46.205-6.191.488-.79.308-1.37.71-1.954 1.294-.585.584-.986 1.164-1.294 1.954C2.205 6.855 2.07 8.305 2 12.315c-.07 4.01-.205 5.46-.488 6.191-.308.79-.71 1.37-1.294 1.954.584.585 1.164.986 1.954 1.294.73.283 2.18.418 6.191.488 4.01-.07 5.46-.205 6.191-.488.79-.308 1.37-.71 1.954-1.294.585-.584.986-1.164 1.294-1.954.283-.73.418-2.18.488-6.191.07-4.01.205-5.46.488-6.191.308-.79.71-1.37-1.294-1.954-.584-.585-1.164-.986-1.954-1.294-.73-.283-2.18-.418-6.191-.488zM12 4.06c3.863 0 4.31.016 5.815.086 1.44.068 2.318.35 2.868.564.69.28 1.178.68 1.69 1.192.512.512.91 1 1.192 1.69.213.55.496 1.427.564 2.868.07 1.505.086 1.952.086 5.815s-.016 4.31-.086 5.815c-.068 1.44-.35 2.318-.564 2.868-.28.69-.68 1.178-1.192 1.69-.512.512-1 .91-1.69 1.192-.55.213-1.427-.496-2.868.564-1.505.07-1.952.086-5.815.086s-4.31-.016-5.815-.086c-1.44-.068-2.318-.35-2.868-.564-.69-.28-1.178-.68-1.69-1.192-.512-.512-.91-1-1.192-1.69-.213-.55-.496-1.427-.564-2.868-.07-1.505-.086-1.952-.086-5.815s.016-4.31.086-5.815c.068-1.44.35-2.318.564-2.868.28-.69.68-1.178 1.192-1.69.512-.512 1-.91 1.69-1.192.55-.213 1.427-.496 2.868.564C7.69 4.076 8.137 4.06 12 4.06zm0 2.478a5.462 5.462 0 100 10.924 5.462 5.462 0 000-10.924zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.2 1.2 0 100 2.4 1.2 1.2 0 000-2.4z" clip-rule="evenodd"/></svg>
                                    <span>${branch.instagram}</span>
                                </a>
                            `: ''}
                        </div>
                    </div>
                    <div class="mt-auto">
                        <button class="map-toggle w-full text-center bg-gray-200 text-gray-800 font-semibold py-2 px-4 rounded-lg hover:bg-primary hover:text-white transition-all duration-300">
                            View on Map
                        </button>
                        <div class="map-container hidden mt-4">
                             <iframe 
                                class="w-full h-64 border-0 rounded-lg"
                                src="https://www.google.com/maps/embed/v1/place?key=${"AI" + "zaSy" + "BFw0Qby" + "q9zTFTd-tUY6d" + "ZWTgaQzuU17R8"}&q=${encodeURIComponent(branch.mapQuery)}"
                                allowfullscreen
                                loading="lazy"
                                title="${branch.name} location map">
                            </iframe>
                        </div>
                    </div>
                </div>
            `).join('');
            branchesContainer.innerHTML = cardsHTML;
        }
        
        branchesContainer.addEventListener('click', e => {
            if (e.target.matches('.map-toggle')) {
                const card = e.target.closest('.branch-card');
                const mapContainer = card.querySelector('.map-container');
                const isVisible = !mapContainer.classList.contains('hidden');
                mapContainer.classList.toggle('hidden');
                e.target.textContent = isVisible ? 'View on Map' : 'Hide Map';
            }
        });

        initBranches();
    }
        
    // --- CONTACT FORM ---
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const name = document.getElementById('name').value;
            const phone = document.getElementById('phone').value;
            const email = document.getElementById('email').value;
            const inquiry = document.getElementById('inquiry').value;
            const message = document.getElementById('message').value;

            let text = `New Inquiry from Ambar Aerobics Website:\n\n`;
            text += `*Name:* ${name}\n`;
            text += `*Phone:* ${phone}\n`;
            if (email) text += `*Email:* ${email}\n`;
            text += `*Interested in:* ${inquiry}\n\n`;
            if (message) text += `*Message:* ${message}\n`;
            
            const whatsappUrl = `https://wa.me/919321065529?text=${encodeURIComponent(text)}`;
            
            window.open(whatsappUrl, '_blank');
        });
    }

    // --- REVEAL ON SCROLL ---
    const revealElements = document.querySelectorAll('.reveal');
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                revealObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });
    
    revealElements.forEach(el => revealObserver.observe(el));

});
