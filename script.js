document.addEventListener('DOMContentLoaded', () => {

    // --- PRELOADER (HOME PAGE ONLY) ---
    const preloader = document.getElementById('preloader');
    if (preloader) {
        window.addEventListener('load', () => {
            setTimeout(() => {
                preloader.classList.add('preloader-hidden');
                setTimeout(() => {
                    preloader.style.display = 'none';
                }, 1200);
            }, 2200);
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

    // Navbar shadow and back-to-top button on scroll
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

    // Back to top button
    if (backToTopBtn) {
        backToTopBtn.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    // Smooth scrolling for hash links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                const navbarHeight = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--navbar-height'));
                const offsetTop = targetElement.offsetTop - navbarHeight;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
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
            
            heroHeading.style.transition = 'none';
            heroHeading.style.opacity = '0';
            
            slides.forEach((slide, index) => {
                slide.classList.toggle('opacity-100', index === currentSlide);
                slide.classList.toggle('opacity-0', index !== currentSlide);
            });
            dots.forEach((dot, index) => {
                dot.classList.toggle('bg-primary', index === currentSlide);
                dot.classList.toggle('border-white', index === currentSlide);
                dot.classList.toggle('bg-white/50', index !== currentSlide);
            });
            
            setTimeout(() => {
                heroHeading.textContent = HERO_CONTENT[currentSlide].heading;
                heroHeading.style.transition = 'opacity 0.5s ease-in';
                heroHeading.style.opacity = '1';
            }, 100);
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
        const GOOGLE_MAPS_API_KEY = "AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8";
        
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
                                    <svg class="w-5 h-5 mr-3 text-gray-400" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
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
                                src="https://www.google.com/maps/embed/v1/place?key=${GOOGLE_MAPS_API_KEY}&q=${encodeURIComponent(branch.mapQuery)}"
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
