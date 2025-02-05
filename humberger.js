// Mobile Menu Toggle (Hamburger)
function toggleMenu() {
    const navMenu = document.getElementById('nav-menu');
    const hamburgerIcon = document.getElementById('hamburger');
    
    // Toggle the 'active' class on the menu and the hamburger icon
    if (navMenu) {
        navMenu.classList.toggle('active');
    }
    
    if (hamburgerIcon) {
        hamburgerIcon.classList.toggle('active');
    }
}

// Ensure hamburger icon toggles the menu
document.getElementById('hamburger').addEventListener('click', toggleMenu);
