function toggleMenu() {
    const menu = document.querySelector('.menu-links');
    const icon = document.querySelector('.hamburger-icon');
    
    menu.classList.toggle('open');
    icon.classList.toggle('open');
}
// Set a timeout to hide the preloader after 5 seconds
setTimeout(function() {
    const preloader = document.getElementById('preloader');
    preloader.style.display = 'none';
}, 2000); // 5000 milliseconds = 5 seconds

// Close menu when clicking outside
document.addEventListener('click', (event) => {
    const hamburgerNav = document.getElementById('hamburger-nav');
    const hamburgerIcon = document.querySelector('.hamburger-icon');
    const menuLinks = document.querySelector('.menu-links');

    if (!hamburgerNav.contains(event.target) && menuLinks.classList.contains('active')) {
        hamburgerIcon.classList.remove('active');
        menuLinks.classList.remove('active');
    }
});
// Add hover effects to experience cards
const experienceCards = document.querySelectorAll('.experience-card');

experienceCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-10px)';
        card.style.boxShadow = '0 8px 12px rgba(0, 0, 0, 0.2)';
    });

    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0)';
        card.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
    });
});
// Add hover effects to project cards
const projectCards = document.querySelectorAll('.project-card');

projectCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-10px)';
        card.style.boxShadow = '0 8px 12px rgba(0, 0, 0, 0.2)';
    });

    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0)';
        card.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
    });
});