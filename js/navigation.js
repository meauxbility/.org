// Navigation JavaScript
// Handles navigation functionality, smooth scrolling, and active states

class Navigation {
    constructor() {
        this.init();
    }

    init() {
        this.setupSmoothScrolling();
        this.setupActiveStates();
        this.setupKeyboardNavigation();
        this.setupMobileNavigation();
    }

    setupSmoothScrolling() {
        // Smooth scrolling for anchor links
        const anchorLinks = document.querySelectorAll('a[href^="#"]');
        
        anchorLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                const href = link.getAttribute('href');
                
                // Skip if it's just "#"
                if (href === '#') return;
                
                const targetElement = document.querySelector(href);
                
                if (targetElement) {
                    e.preventDefault();
                    
                    // Calculate offset for fixed header
                    const headerHeight = document.querySelector('.header')?.offsetHeight || 0;
                    const targetPosition = targetElement.offsetTop - headerHeight - 20;
                    
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                    
                    // Update URL without jumping
                    history.pushState(null, null, href);
                    
                    // Focus target element for accessibility
                    targetElement.focus();
                }
            });
        });
    }

    setupActiveStates() {
        // Highlight active navigation item based on current page
        const currentPage = this.getCurrentPage();
        const navLinks = document.querySelectorAll('.nav-link');
        
        navLinks.forEach(link => {
            const linkPage = this.getPageFromHref(link.getAttribute('href'));
            
            if (linkPage === currentPage) {
                link.classList.add('active');
                link.setAttribute('aria-current', 'page');
            } else {
                link.classList.remove('active');
                link.removeAttribute('aria-current');
            }
        });
    }

    setupKeyboardNavigation() {
        // Enhanced keyboard navigation for mobile menu
        const mobileToggle = document.querySelector('.mobile-toggle');
        const nav = document.querySelector('.nav');
        
        if (mobileToggle && nav) {
            mobileToggle.addEventListener('keydown', (e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    mobileToggle.click();
                }
            });

            // Trap focus within mobile menu when open
            nav.addEventListener('keydown', (e) => {
                if (!nav.classList.contains('nav-open')) return;
                
                const focusableElements = nav.querySelectorAll(
                    'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])'
                );
                
                const firstElement = focusableElements[0];
                const lastElement = focusableElements[focusableElements.length - 1];
                
                if (e.key === 'Tab') {
                    if (e.shiftKey) {
                        if (document.activeElement === firstElement) {
                            e.preventDefault();
                            lastElement.focus();
                        }
                    } else {
                        if (document.activeElement === lastElement) {
                            e.preventDefault();
                            firstElement.focus();
                        }
                    }
                }
                
                if (e.key === 'Escape') {
                    this.closeMobileMenu();
                }
            });
        }
    }

    setupMobileNavigation() {
        const mobileToggle = document.querySelector('.mobile-toggle');
        const nav = document.querySelector('.nav');
        
        if (mobileToggle && nav) {
            // Handle window resize
            window.addEventListener('resize', () => {
                if (window.innerWidth > 768) {
                    this.closeMobileMenu();
                }
            });
        }
    }

    closeMobileMenu() {
        const mobileToggle = document.querySelector('.mobile-toggle');
        const nav = document.querySelector('.nav');
        
        if (mobileToggle && nav) {
            nav.classList.remove('nav-open');
            mobileToggle.classList.remove('active');
            mobileToggle.setAttribute('aria-expanded', 'false');
        }
    }

    getCurrentPage() {
        const path = window.location.pathname;
        const page = path.split('/').pop();
        
        // Handle index pages
        if (!page || page === '' || page === 'index.html') {
            return 'index';
        }
        
        // Remove .html extension
        return page.replace('.html', '');
    }

    getPageFromHref(href) {
        if (!href) return '';
        
        // Handle external links
        if (href.startsWith('http') || href.startsWith('mailto:') || href.startsWith('tel:')) {
            return '';
        }
        
        // Handle anchor links
        if (href.startsWith('#')) {
            return '';
        }
        
        // Extract page name
        const page = href.split('/').pop();
        
        if (!page || page === '' || page === 'index.html') {
            return 'index';
        }
        
        return page.replace('.html', '');
    }

    // Public method to update active state (useful for SPA-like behavior)
    updateActiveState() {
        this.setupActiveStates();
    }
}

// Initialize navigation when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    new Navigation();
});

// Export for use in other scripts
window.Navigation = Navigation;
