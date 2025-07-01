// Navigation functionality
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');
    const navbar = document.getElementById('navbar');
    
    // Mobile menu toggle
    hamburger.addEventListener('click', function() {
        navMenu.classList.toggle('active');
        hamburger.classList.toggle('active');
    });
    
    // Close mobile menu when clicking on a link
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            hamburger.classList.remove('active');
        });
    });
    
    // Navbar scroll effect
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
    
    // Initialize AOS-like animations
    initScrollAnimations();
    
    // Initialize testimonial slider
    initTestimonialSlider();
    
    // Form submissions
    initFormHandlers();
});

// Smooth scrolling function
function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
        const offsetTop = element.offsetTop - 70; // Account for fixed navbar
        window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
        });
    }
}

// Event details modal
function showEventDetails(eventType) {
    const modal = document.getElementById('eventModal');
    const content = document.getElementById('eventModalContent');
    
    const eventDetails = {
        matsuri: {
            title: 'Matsuri Festival Jakarta',
            date: '15 Desember 2024',
            time: '10:00 - 22:00 WIB',
            location: 'Senayan City, Jakarta',
            description: 'Festival tradisional Jepang terbesar di Jakarta dengan berbagai pertunjukan musik, tarian tradisional, workshop origami, kaligrafi, dan kuliner khas Jepang. Nikmati suasana festival yang meriah dengan dekorasi lampion dan stan makanan autentik.',
            highlights: [
                '🎭 Pertunjukan Taiko Drum',
                '🍜 Food Court Jepang',
                '🎨 Workshop Origami & Kaligrafi',
                '👘 Rental Kimono',
                '🎪 Games & Aktivitas Tradisional'
            ],
            price: 'Tiket: Rp 75.000 (Dewasa), Rp 50.000 (Anak-anak)'
        },
        anime: {
            title: 'Anime Convention Bogor',
            date: '22 Desember 2024',
            time: '09:00 - 21:00 WIB',
            location: 'Botani Square, Bogor',
            description: 'Konvensi anime terbesar di Bogor dengan cosplay competition, merchandise store, meet & greet dengan voice actor, dan screening anime terbaru. Event ini cocok untuk semua penggemar anime dan manga.',
            highlights: [
                '🏆 Cosplay Competition',
                '🛍️ Merchandise Store',
                '🎤 Meet & Greet Voice Actor',
                '📺 Anime Screening',
                '🎮 Gaming Zone'
            ],
            price: 'Tiket: Rp 100.000 (1 Hari), Rp 150.000 (2 Hari)'
        },
        jpop: {
            title: 'J-Pop Night Tangerang',
            date: '28 Desember 2024',
            time: '19:00 - 23:00 WIB',
            location: 'AEON Mall, Tangerang',
            description: 'Malam musik J-Pop dengan penampilan artis lokal dan internasional. Nikmati lagu-lagu J-Pop favorit Anda dalam suasana konser yang meriah dan penuh energi.',
            highlights: [
                '🎵 Live Performance J-Pop',
                '🌟 Guest Star Internasional',
                '🎤 Karaoke Session',
                '💃 Dance Performance',
                '📸 Photo Booth'
            ],
            price: 'Tiket: Rp 125.000 (Regular), Rp 200.000 (VIP)'
        }
    };
    
    const event = eventDetails[eventType];
    if (event) {
        content.innerHTML = `
            <div class="event-detail">
                <h2>${event.title}</h2>
                <div class="event-meta">
                    <p><strong>📅 Tanggal:</strong> ${event.date}</p>
                    <p><strong>⏰ Waktu:</strong> ${event.time}</p>
                    <p><strong>📍 Lokasi:</strong> ${event.location}</p>
                    <p><strong>💰 Harga:</strong> ${event.price}</p>
                </div>
                <div class="event-description">
                    <h3>Deskripsi Event</h3>
                    <p>${event.description}</p>
                </div>
                <div class="event-highlights">
                    <h3>Highlight Acara</h3>
                    <ul>
                        ${event.highlights.map(highlight => `<li>${highlight}</li>`).join('')}
                    </ul>
                </div>
                <div class="event-actions">
                    <button class="btn btn-primary" onclick="bookTicket('${eventType}')">Pesan Tiket</button>
                    <button class="btn btn-secondary" onclick="shareEvent('${eventType}')">Bagikan Event</button>
                </div>
            </div>
        `;
        modal.style.display = 'block';
    }
}

// Rental form modal
function openRentalForm() {
    const modal = document.getElementById('rentalModal');
    modal.style.display = 'block';
}

// Close modal
function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.style.display = 'none';
}

// Close modal when clicking outside
window.addEventListener('click', function(event) {
    const eventModal = document.getElementById('eventModal');
    const rentalModal = document.getElementById('rentalModal');
    
    if (event.target === eventModal) {
        eventModal.style.display = 'none';
    }
    if (event.target === rentalModal) {
        rentalModal.style.display = 'none';
    }
});

// Schedule tabs
function showSchedule(month) {
    // Remove active class from all tabs
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    
    // Add active class to clicked tab
    event.target.classList.add('active');
    
    const scheduleContent = document.getElementById('schedule-content');
    
    const schedules = {
        december: `
            <div class="schedule-item">
                <div class="schedule-date">
                    <span class="date-num">15</span>
                    <span class="date-month">Des</span>
                </div>
                <div class="schedule-info">
                    <h4>Matsuri Festival Jakarta</h4>
                    <p>📍 Senayan City | ⏰ 10:00 - 22:00</p>
                </div>
            </div>
            <div class="schedule-item">
                <div class="schedule-date">
                    <span class="date-num">22</span>
                    <span class="date-month">Des</span>
                </div>
                <div class="schedule-info">
                    <h4>Anime Convention Bogor</h4>
                    <p>📍 Botani Square | ⏰ 09:00 - 21:00</p>
                </div>
            </div>
            <div class="schedule-item">
                <div class="schedule-date">
                    <span class="date-num">28</span>
                    <span class="date-month">Des</span>
                </div>
                <div class="schedule-info">
                    <h4>J-Pop Night Tangerang</h4>
                    <p>📍 AEON Mall | ⏰ 19:00 - 23:00</p>
                </div>
            </div>
        `,
        january: `
            <div class="schedule-item">
                <div class="schedule-date">
                    <span class="date-num">12</span>
                    <span class="date-month">Jan</span>
                </div>
                <div class="schedule-info">
                    <h4>New Year Matsuri</h4>
                    <p>📍 Grand Indonesia | ⏰ 11:00 - 21:00</p>
                </div>
            </div>
            <div class="schedule-item">
                <div class="schedule-date">
                    <span class="date-num">19</span>
                    <span class="date-month">Jan</span>
                </div>
                <div class="schedule-info">
                    <h4>Manga Reading Festival</h4>
                    <p>📍 Depok Town Square | ⏰ 10:00 - 20:00</p>
                </div>
            </div>
            <div class="schedule-item">
                <div class="schedule-date">
                    <span class="date-num">26</span>
                    <span class="date-month">Jan</span>
                </div>
                <div class="schedule-info">
                    <h4>Cosplay Workshop</h4>
                    <p>📍 Living World Tangerang | ⏰ 13:00 - 17:00</p>
                </div>
            </div>
        `,
        february: `
            <div class="schedule-item">
                <div class="schedule-date">
                    <span class="date-num">09</span>
                    <span class="date-month">Feb</span>
                </div>
                <div class="schedule-info">
                    <h4>Valentine J-Pop Concert</h4>
                    <p>📍 Plaza Indonesia | ⏰ 18:00 - 22:00</p>
                </div>
            </div>
            <div class="schedule-item">
                <div class="schedule-date">
                    <span class="date-num">16</span>
                    <span class="date-month">Feb</span>
                </div>
                <div class="schedule-info">
                    <h4>Kimono Fashion Show</h4>
                    <p>📍 Summarecon Mall | ⏰ 15:00 - 19:00</p>
                </div>
            </div>
            <div class="schedule-item">
                <div class="schedule-date">
                    <span class="date-num">23</span>
                    <span class="date-month">Feb</span>
                </div>
                <div class="schedule-info">
                    <h4>Japanese Food Festival</h4>
                    <p>📍 Margo City Depok | ⏰ 12:00 - 21:00</p>
                </div>
            </div>
        `
    };
    
    scheduleContent.innerHTML = schedules[month] || schedules.december;
}

// Route information
function showRoute(city) {
    alert(`Menampilkan rute ke ${city}. Fitur ini akan segera tersedia dengan integrasi Google Maps.`);
}

function showRouteInfo(transport) {
    // Remove active class from all tabs
    document.querySelectorAll('.route-tab').forEach(tab => {
        tab.classList.remove('active');
    });
    
    // Add active class to clicked tab
    event.target.classList.add('active');
    
    const routeContent = document.getElementById('route-content');
    
    const routes = {
        car: `
            <div class="route-info">
                <h4>Rute dengan Mobil</h4>
                <ul>
                    <li>🚗 Dari Jakarta: Tol Dalam Kota → Exit Senayan (15-30 menit)</li>
                    <li>🚗 Dari Bogor: Tol Jagorawi → Tol Dalam Kota → Exit Senayan (45-60 menit)</li>
                    <li>🚗 Dari Tangerang: Tol Jakarta-Tangerang → Tol Dalam Kota (30-45 menit)</li>
                    <li>🚗 Dari Depok: Tol Antasari → Tol Dalam Kota → Exit Senayan (30-45 menit)</li>
                    <li>🅿️ Parkir tersedia di basement mall (Rp 5.000/jam)</li>
                </ul>
            </div>
        `,
        train: `
            <div class="route-info">
                <h4>Rute dengan KRL</h4>
                <ul>
                    <li>🚊 Dari Bogor: KRL Bogor-Jakarta Kota → Sudirman (1 jam)</li>
                    <li>🚊 Dari Depok: KRL Depok-Jakarta Kota → Sudirman (45 menit)</li>
                    <li>🚊 Dari Tangerang: KRL Tangerang-Duri → Transfer Duri → Sudirman (1.5 jam)</li>
                    <li>🚶‍♂️ Dari Stasiun Sudirman: Jalan kaki 10 menit ke venue</li>
                    <li>💰 Tarif KRL: Rp 3.000 - Rp 7.000</li>
                </ul>
            </div>
        `,
        bus: `
            <div class="route-info">
                <h4>Rute dengan Bus</h4>
                <ul>
                    <li>🚌 TransJakarta: Koridor 1, 6, 7 → Halte Senayan JCC</li>
                    <li>🚌 Bus DAMRI: Rute Bandara → Blok M → Senayan</li>
                    <li>🚌 Bus Kopaja: Berbagai rute menuju Senayan</li>
                    <li>🚶‍♂️ Dari halte: Jalan kaki 5-10 menit ke venue</li>
                    <li>💰 Tarif TransJakarta: Rp 3.500</li>
                </ul>
            </div>
        `
    };
    
    routeContent.innerHTML = routes[transport] || routes.car;
}

// Testimonial slider
function initTestimonialSlider() {
    const testimonials = document.querySelectorAll('.testimonial-card');
    let currentTestimonial = 0;
    
    function showTestimonial(index) {
        testimonials.forEach((testimonial, i) => {
            testimonial.classList.toggle('active', i === index);
        });
    }
    
    // Auto-rotate testimonials
    setInterval(() => {
        currentTestimonial = (currentTestimonial + 1) % testimonials.length;
        showTestimonial(currentTestimonial);
    }, 5000);
}

// Form handlers
function initFormHandlers() {
    // Feedback form
    const feedbackForm = document.getElementById('feedbackForm');
    if (feedbackForm) {
        feedbackForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const formData = {
                name: document.getElementById('name').value,
                email: document.getElementById('email').value,
                rating: document.getElementById('rating').value,
                message: document.getElementById('message').value
            };
            
            // Simulate form submission
            const submitBtn = feedbackForm.querySelector('button[type="submit"]');
            const originalText = submitBtn.textContent;
            submitBtn.innerHTML = '<span class="loading"></span> Mengirim...';
            submitBtn.disabled = true;
            
            setTimeout(() => {
                alert('Terima kasih atas feedback Anda! Kami akan segera merespons.');
                feedbackForm.reset();
                submitBtn.textContent = originalText;
                submitBtn.disabled = false;
            }, 2000);
        });
    }
    
    // Rental form
    const rentalForm = document.getElementById('rentalForm');
    if (rentalForm) {
        rentalForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const submitBtn = rentalForm.querySelector('button[type="submit"]');
            const originalText = submitBtn.textContent;
            submitBtn.innerHTML = '<span class="loading"></span> Mengirim...';
            submitBtn.disabled = true;
            
            setTimeout(() => {
                alert('Permintaan rental Anda telah dikirim! Tim kami akan menghubungi Anda dalam 24 jam.');
                rentalForm.reset();
                closeModal('rentalModal');
                submitBtn.textContent = originalText;
                submitBtn.disabled = false;
            }, 2000);
        });
    }
    
    // Newsletter form
    const newsletterForm = document.querySelector('.newsletter');
    if (newsletterForm) {
        const newsletterBtn = newsletterForm.querySelector('.btn');
        newsletterBtn.addEventListener('click', function(e) {
            e.preventDefault();
            const email = newsletterForm.querySelector('input[type="email"]').value;
            
            if (email) {
                const originalText = newsletterBtn.textContent;
                newsletterBtn.innerHTML = '<span class="loading"></span>';
                newsletterBtn.disabled = true;
                
                setTimeout(() => {
                    alert('Terima kasih! Anda telah berlangganan newsletter kami.');
                    newsletterForm.querySelector('input[type="email"]').value = '';
                    newsletterBtn.textContent = originalText;
                    newsletterBtn.disabled = false;
                }, 1500);
            } else {
                alert('Mohon masukkan email yang valid.');
            }
        });
    }
}

// Scroll animations (AOS-like)
function initScrollAnimations() {
    const animatedElements = document.querySelectorAll('[data-aos]');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('aos-animate');
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });
    
    animatedElements.forEach(el => {
        observer.observe(el);
    });
}

// Utility functions
function bookTicket(eventType) {
    alert(`Fitur pemesanan tiket untuk ${eventType} akan segera tersedia. Silakan hubungi kami melalui WhatsApp untuk pemesanan.`);
}

function shareEvent(eventType) {
    if (navigator.share) {
        navigator.share({
            title: 'Event Jepang - Ventbar',
            text: 'Jangan lewatkan event Jepang menarik ini!',
            url: window.location.href
        });
    } else {
        // Fallback for browsers that don't support Web Share API
        const url = window.location.href;
        navigator.clipboard.writeText(url).then(() => {
            alert('Link event telah disalin ke clipboard!');
        });
    }
}

// Real-time updates simulation
function initRealTimeUpdates() {
    // Simulate real-time event updates
    setInterval(() => {
        // This would typically connect to a WebSocket or polling mechanism
        // For demo purposes, we'll just update some counters or status
        updateEventCounters();
    }, 30000); // Update every 30 seconds
}

function updateEventCounters() {
    // Simulate updating event participant counters
    const eventCards = document.querySelectorAll('.event-card');
    eventCards.forEach(card => {
        // Add real-time participant count or other dynamic data
        // This is where you'd integrate with your backend API
    });
}

// Initialize real-time features
document.addEventListener('DOMContentLoaded', function() {
    initRealTimeUpdates();
});

// Performance optimization
function lazyLoadImages() {
    const images = document.querySelectorAll('img[data-src]');
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
}

// Initialize lazy loading
document.addEventListener('DOMContentLoaded', lazyLoadImages);