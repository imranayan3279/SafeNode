// --- 1. Scroll Reveal Logic ---
// We only need to define these once
const observerOptions = { 
    threshold: 0.1 
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Adds a class and inline styles for a smooth entrance
            entry.target.classList.add('appeared');
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
            // Stop observing once it has appeared to save performance
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Initialize all elements with .reveal or .card
document.querySelectorAll('.reveal, .card').forEach(el => {
    el.style.opacity = "0";
    el.style.transform = "translateY(40px)";
    el.style.transition = "all 0.8s cubic-bezier(0.2, 1, 0.3, 1)";
    observer.observe(el);
});


// --- 2. Interactive Background (Mouse Move) ---
document.addEventListener('mousemove', (e) => {
    const x = e.clientX;
    const y = e.clientY;
    
    const orb1 = document.querySelector('.orb-1');
    const orb2 = document.querySelector('.orb-2');
    
    // Check if orbs exist to avoid errors
    if (orb1 && orb2) {
        // Calculate movement offset based on center of screen
        const moveX = (x - window.innerWidth / 2) / 25;
        const moveY = (y - window.innerHeight / 2) / 25;

        // Orb 1 follows the mouse position directly
        orb1.style.left = `${x - 300}px`;
        orb1.style.top = `${y - 300}px`;
        
        // Orb 2 moves subtly in the opposite direction for a parallax effect
        orb2.style.transform = `translate(${-moveX}px, ${-moveY}px)`;
        
        // Smooth out the follow-effect
        orb1.style.transition = "all 0.6s ease-out";
    }
});