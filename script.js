// Mobile navigation toggle
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');

navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    
    // Animate hamburger menu
    const bars = navToggle.querySelectorAll('.bar');
    bars.forEach(bar => bar.classList.toggle('active'));
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        const bars = navToggle.querySelectorAll('.bar');
        bars.forEach(bar => bar.classList.remove('active'));
    });
});

// Smooth scrolling for navigation links
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

// Header background on scroll
window.addEventListener('scroll', () => {
    const header = document.querySelector('.header');
    if (window.scrollY > 100) {
        header.style.background = 'rgba(255, 255, 255, 0.98)';
    } else {
        header.style.background = 'rgba(255, 255, 255, 0.95)';
    }
});

// Scripture and Quote Rotation
const scriptures = [
    {
        verse: "I can do all things through Christ who strengthens me.",
        reference: "Philippians 4:13"
    },
    {
        verse: "Trust in the Lord with all your heart and lean not on your own understanding.",
        reference: "Proverbs 3:5"
    },
    {
        verse: "For I know the plans I have for you, declares the Lord, plans to prosper you and not to harm you, plans to give you hope and a future.",
        reference: "Jeremiah 29:11"
    },
    {
        verse: "Be strong and courageous. Do not be afraid; do not be discouraged, for the Lord your God will be with you wherever you go.",
        reference: "Joshua 1:9"
    },
    {
        verse: "The Lord is my strength and my shield; my heart trusts in him, and he helps me.",
        reference: "Psalm 28:7"
    }
];

const quotes = [
    {
        quote: "Success is not final, failure is not fatal: It is the courage to continue that counts.",
        author: "Winston Churchill"
    },
    {
        quote: "The only way to do great work is to love what you do.",
        author: "Steve Jobs"
    },
    {
        quote: "Innovation distinguishes between a leader and a follower.",
        author: "Steve Jobs"
    },
    {
        quote: "The future belongs to those who believe in the beauty of their dreams.",
        author: "Eleanor Roosevelt"
    },
    {
        quote: "Technology is best when it brings people together.",
        author: "Matt Mullenweg"
    }
];

// Function to update scripture
function updateScripture() {
    const scriptureCard = document.querySelector('.scripture-card');
    if (scriptureCard) {
        const randomScripture = scriptures[Math.floor(Math.random() * scriptures.length)];
        const blockquote = scriptureCard.querySelector('blockquote');
        const cite = scriptureCard.querySelector('cite');
        
        blockquote.textContent = `"${randomScripture.verse}"`;
        cite.textContent = `— ${randomScripture.reference}`;
    }
}

// Function to update quote
function updateQuote() {
    const quoteCard = document.querySelector('.quote-card');
    if (quoteCard) {
        const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
        const blockquote = quoteCard.querySelector('blockquote');
        const cite = quoteCard.querySelector('cite');
        
        blockquote.textContent = `"${randomQuote.quote}"`;
        cite.textContent = `— ${randomQuote.author}`;
    }
}

// Update scripture and quote on page load
document.addEventListener('DOMContentLoaded', () => {
    updateScripture();
    updateQuote();
    
    // Update every 24 hours (86400000 milliseconds)
    setInterval(updateScripture, 86400000);
    setInterval(updateQuote, 86400000);
});

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll('.project-card, .contact-option, .timeline-item');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        observer.observe(el);
    });
});

// Add loading animation for page
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
});

// Parallax effect for hero section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    if (hero) {
        const rate = scrolled * -0.5;
        hero.style.transform = `translateY(${rate}px)`;
    }
});

// Typing effect for hero title
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.innerHTML = '';
    
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// Initialize typing effect when page loads
document.addEventListener('DOMContentLoaded', () => {
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) {
        const originalText = heroTitle.textContent;
        typeWriter(heroTitle, originalText, 50);
    }
});

// Add hover effects for project cards
document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px) scale(1.02)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

// Add scroll progress indicator
const createScrollProgress = () => {
    const progressBar = document.createElement('div');
    progressBar.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 0%;
        height: 3px;
        background: linear-gradient(90deg, #ea580c, #3b82f6);
        z-index: 1001;
        transition: width 0.1s ease;
    `;
    document.body.appendChild(progressBar);
    
    window.addEventListener('scroll', () => {
        const scrolled = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
        progressBar.style.width = scrolled + '%';
    });
};

// Initialize scroll progress
createScrollProgress();

// Add keyboard navigation support
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        navMenu.classList.remove('active');
        const bars = navToggle.querySelectorAll('.bar');
        bars.forEach(bar => bar.classList.remove('active'));
    }
});

// Add focus management for accessibility
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('focus', () => {
        link.style.outline = '2px solid #ea580c';
        link.style.outlineOffset = '2px';
    });
    
    link.addEventListener('blur', () => {
        link.style.outline = 'none';
    });
});

// Add click-to-copy functionality for contact information
document.querySelectorAll('.contact-option a').forEach(link => {
    link.addEventListener('click', function(e) {
        // Add a subtle click effect
        this.style.transform = 'scale(0.95)';
        setTimeout(() => {
            this.style.transform = 'scale(1)';
        }, 150);
    });
});

// Add smooth reveal animation for timeline items
const timelineObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateX(0)';
        }
    });
}, { threshold: 0.3 });

document.querySelectorAll('.timeline-item').forEach(item => {
    item.style.opacity = '0';
    item.style.transform = 'translateX(-50px)';
    item.style.transition = 'all 0.6s ease';
    timelineObserver.observe(item);
});

// Add counter animation for statistics (if needed in the future)
function animateCounter(element, target, duration = 2000) {
    let start = 0;
    const increment = target / (duration / 16);
    
    function updateCounter() {
        start += increment;
        if (start < target) {
            element.textContent = Math.floor(start);
            requestAnimationFrame(updateCounter);
        } else {
            element.textContent = target;
        }
    }
    
    updateCounter();
}

// Add smooth scroll behavior for all internal links
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            const headerHeight = document.querySelector('.header').offsetHeight;
            const targetPosition = targetElement.offsetTop - headerHeight - 20;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Add loading state for buttons
document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', function() {
        if (this.classList.contains('btn-primary') || this.classList.contains('btn-secondary')) {
            const originalText = this.textContent;
            this.textContent = 'Loading...';
            this.style.pointerEvents = 'none';
            
            setTimeout(() => {
                this.textContent = originalText;
                this.style.pointerEvents = 'auto';
            }, 2000);
        }
    });
});

// Add responsive image loading (for future use)
function preloadImages() {
    const images = [
        // Add image URLs here when available
    ];
    
    images.forEach(src => {
        const img = new Image();
        img.src = src;
    });
}

// Initialize image preloading
document.addEventListener('DOMContentLoaded', preloadImages); 