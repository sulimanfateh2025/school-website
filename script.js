// Mobile Menu Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    hamburger.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        hamburger.classList.remove('active');
    });
});

// Smooth Scrolling
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

// Login Tab Switching
const tabBtns = document.querySelectorAll('.tab-btn');
const loginForms = document.querySelectorAll('.login-form');

tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const tab = btn.getAttribute('data-tab');
        
        // Remove active class from all buttons and forms
        tabBtns.forEach(b => b.classList.remove('active'));
        loginForms.forEach(f => f.classList.remove('active'));
        
        // Add active class to clicked button and corresponding form
        btn.classList.add('active');
        document.getElementById(`${tab}-login`).classList.add('active');
    });
});

// Result Form Submission
const resultForm = document.querySelector('.result-form');
if (resultForm) {
    resultForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const resultDisplay = document.getElementById('result-display');
        resultDisplay.style.display = 'block';
        resultDisplay.scrollIntoView({ behavior: 'smooth' });
    });
}

// Attendance Form Submission
const attendanceForm = document.querySelector('.attendance-form');
if (attendanceForm) {
    attendanceForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const attendanceDisplay = document.getElementById('attendance-display');
        attendanceDisplay.style.display = 'block';
        attendanceDisplay.scrollIntoView({ behavior: 'smooth' });
    });
}

// Admission Form Submission
const admissionForm = document.querySelector('.admission-form');
if (admissionForm) {
    admissionForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Application submitted successfully! We will contact you soon.');
        admissionForm.reset();
    });
}

// Login Form Submission
document.querySelectorAll('.login-form form').forEach(form => {
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Login functionality would connect to backend. This is a demo.');
    });
});

// Active Navigation on Scroll
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-menu a');

window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
});

// Show Section Helper Function
function showSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}

// Add animation on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all cards and sections
document.querySelectorAll('.card, .department, .gallery-item, .about-content').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// Navbar background on scroll
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(244, 166, 166, 0.98)';
    } else {
        navbar.style.background = 'rgba(244, 166, 166, 0.98)';
    }
});
