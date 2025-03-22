new Splide( '#image-carousel' ).mount();

document.addEventListener("DOMContentLoaded", () => {
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Check if the element has the class for specific sliding
                if (entry.target.classList.contains('slide-from-left')) {
                    entry.target.classList.add('left-visible'); // Trigger left slide effect
                }
                else if (entry.target.classList.contains('slide-from-right')) {
                    entry.target.classList.add('right-visible'); // Trigger right slide effect
                } 
                // For opacity-only fade effect
                else if (entry.target.classList.contains('opacity-only')) {
                    entry.target.classList.add('opacity-visible'); // Trigger opacity fade effect
                } 
                // Default effect: slide up + fade in
                else {
                    entry.target.classList.add('visible');
                }

                observer.unobserve(entry.target); // Stop observing after first appearance
            }
        });
    }, { threshold: 0.1 });

    // Observe all elements with the respective classes for different effects
    document.querySelectorAll('.hidden-box').forEach(element => observer.observe(element));
    document.querySelectorAll('.slide-from-left').forEach(element => observer.observe(element));
    document.querySelectorAll('.slide-from-right').forEach(element => observer.observe(element));
    document.querySelectorAll('.opacity-only').forEach(element => observer.observe(element));
});