// ফর্ম জমা দেওয়ার ফাংশন
function handleSubmit(event) {
    event.preventDefault();
    
    const form = event.target;
    const inputs = form.querySelectorAll('input, textarea');
    const name = inputs[0].value;
    
    if (name && inputs[1].value && inputs[3].value) {
        alert(`ধন্যবাদ ${name}! আপনার বার্তা পাঠানো হয়েছে। শীঘ্রই আমরা যোগাযোগ করব।`);
        form.reset();
    } else {
        alert('সমস্ত প্রয়োজনীয় ক্ষেত্র পূরণ করুন!');
    }
}

// স্মুথ স্ক্রলি���
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

// পরিসংখ্যান কাউন্টার
function animateCounters() {
    const statNumbers = document.querySelectorAll('.stat-number');
    
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !entry.target.dataset.animated) {
                const target = parseInt(entry.target.dataset.target);
                let current = 0;
                const increment = target / 50;
                
                const counter = setInterval(() => {
                    current += increment;
                    if (current >= target) {
                        entry.target.textContent = target;
                        clearInterval(counter);
                    } else {
                        entry.target.textContent = Math.floor(current);
                    }
                }, 30);
                
                entry.target.dataset.animated = 'true';
            }
        });
    });
    
    statNumbers.forEach(number => observer.observe(number));
}

// নেভবার স্টাইল পরিবর্তন
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.boxShadow = '0 5px 25px rgba(102, 126, 234, 0.4)';
    } else {
        navbar.style.boxShadow = '0 2px 20px rgba(102, 126, 234, 0.3)';
    }
});

// পেজ লোড হওয়ার সময় অ্যানিমেশন
window.addEventListener('load', () => {
    animateCounters();
    
    const cards = document.querySelectorAll('.project-card, .service-card');
    cards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.animation = `slideInUp 0.6s ease ${index * 0.1}s forwards`;
    });
});

// ডার্ক মোড টগল (ঐচ্ছিক)
const darkModeToggle = () => {
    const isDarkMode = localStorage.getItem('darkMode') === 'true';
    if (isDarkMode) {
        document.body.style.backgroundColor = '#1a1a1a';
        document.body.style.color = '#f0f0f0';
    }
};

// পেজ লোড করার সময় চেক করুন
darkModeToggle();