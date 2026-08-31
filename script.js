// ফর্ম জমা দেওয়ার ফাংশন
function handleSubmit(event) {
    event.preventDefault();
    
    const form = event.target;
    const name = form.querySelector('input[type="text"]').value;
    const email = form.querySelector('input[type="email"]').value;
    const message = form.querySelector('textarea').value;
    
    // সাধারণ ভ্যালিডেশন
    if (name && email && message) {
        alert(`ধন্যবাদ ${name}! আপনার বার্তা পাঠানো হয়েছে।`);
        form.reset();
    } else {
        alert('সমস্ত ক্ষেত্র পূরণ করুন!');
    }
}

// স্মুথ স্ক্রলিং
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

// পেজ লোড হওয়ার সময় অ্যানিমেশন
window.addEventListener('load', () => {
    const cards = document.querySelectorAll('.project-card');
    cards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.animation = `slideInUp 0.6s ease ${index * 0.2}s forwards`;
    });
});

// স্কোল ইভেন্ট - নেভবার স্টাইল পরিবর্তন
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.boxShadow = '0 5px 20px rgba(0, 0, 0, 0.2)';
    } else {
        navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    }
});

// কাউন্টার অ্যানিমেশন (ঐচ্ছিক)
function animateCounter(element, target, duration = 2000) {
    let current = 0;
    const increment = target / (duration / 16);
    
    const counter = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = target;
            clearInterval(counter);
        } else {
            element.textContent = Math.floor(current);
        }
    }, 16);
}

// স্লাইড আপ অ্যানিমেশন স্টাইল যোগ করুন
const style = document.createElement('style');
style.textContent = `
    @keyframes slideInUp {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;
document.head.appendChild(style);