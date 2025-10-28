// Component Loader
// Dynamically loads header and footer components

class ComponentLoader {
    constructor() {
        this.components = {
            header: 'components/header.html',
            footer: 'components/footer.html'
        };
    }

    async loadComponent(componentName, targetElement) {
        try {
            const response = await fetch(this.components[componentName]);
            if (!response.ok) {
                throw new Error(`Failed to load ${componentName}: ${response.status}`);
            }
            const html = await response.text();
            targetElement.innerHTML = html;
            
            // Initialize component-specific functionality
            this.initializeComponent(componentName);
        } catch (error) {
            console.error(`Error loading ${componentName}:`, error);
            this.showFallback(componentName, targetElement);
        }
    }

    initializeComponent(componentName) {
        switch (componentName) {
            case 'header':
                this.initializeHeader();
                break;
            case 'footer':
                this.initializeFooter();
                break;
        }
    }

    initializeHeader() {
        // Mobile menu toggle functionality
        const mobileToggle = document.querySelector('.mobile-toggle');
        const nav = document.querySelector('.nav');
        
        if (mobileToggle && nav) {
            mobileToggle.addEventListener('click', () => {
                const isExpanded = mobileToggle.getAttribute('aria-expanded') === 'true';
                mobileToggle.setAttribute('aria-expanded', !isExpanded);
                nav.classList.toggle('nav-open');
                mobileToggle.classList.toggle('active');
            });

            // Close mobile menu when clicking outside
            document.addEventListener('click', (e) => {
                if (!nav.contains(e.target) && !mobileToggle.contains(e.target)) {
                    nav.classList.remove('nav-open');
                    mobileToggle.classList.remove('active');
                    mobileToggle.setAttribute('aria-expanded', 'false');
                }
            });

            // Close mobile menu when clicking on nav links
            const navLinks = nav.querySelectorAll('.nav-link');
            navLinks.forEach(link => {
                link.addEventListener('click', () => {
                    nav.classList.remove('nav-open');
                    mobileToggle.classList.remove('active');
                    mobileToggle.setAttribute('aria-expanded', 'false');
                });
            });
        }

        // Active page highlighting
        this.highlightActivePage();
    }

    initializeFooter() {
        // Donation modal functionality
        const donationModal = document.getElementById('donation-modal');
        const modalClose = document.querySelector('.modal-close');
        const modalOverlay = document.querySelector('.modal-overlay');
        const quickDonateBtns = document.querySelectorAll('.quick-donate-btn');

        // Show modal after delay (if user hasn't interacted)
        setTimeout(() => {
            if (!this.hasUserInteracted() && donationModal) {
                this.showDonationModal();
            }
        }, 30000); // 30 seconds

        // Close modal functionality
        if (modalClose) {
            modalClose.addEventListener('click', () => {
                this.hideDonationModal();
            });
        }

        if (modalOverlay) {
            modalOverlay.addEventListener('click', () => {
                this.hideDonationModal();
            });
        }

        // Quick donate buttons
        quickDonateBtns.forEach(btn => {
            btn.addEventListener('click', (e) => {
                const amount = e.target.getAttribute('data-amount');
                this.hideDonationModal();
                // Redirect to donation page with amount
                window.location.href = `impact.html?amount=${amount}`;
            });
        });

        // Escape key to close modal
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && donationModal && donationModal.style.display !== 'none') {
                this.hideDonationModal();
            }
        });
    }

    highlightActivePage() {
        const currentPage = window.location.pathname.split('/').pop() || 'index.html';
        const navLinks = document.querySelectorAll('.nav-link');
        
        navLinks.forEach(link => {
            const linkPage = link.getAttribute('href');
            if (linkPage === currentPage || (currentPage === '' && linkPage === 'index.html')) {
                link.classList.add('active');
            }
        });
    }

    showDonationModal() {
        const donationModal = document.getElementById('donation-modal');
        if (donationModal) {
            donationModal.style.display = 'block';
            document.body.style.overflow = 'hidden';
        }
    }

    hideDonationModal() {
        const donationModal = document.getElementById('donation-modal');
        if (donationModal) {
            donationModal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    }

    hasUserInteracted() {
        // Check if user has interacted with the page
        return sessionStorage.getItem('userInteracted') === 'true';
    }

    showFallback(componentName, targetElement) {
        // Show fallback content if component fails to load
        const fallbacks = {
            header: '<header class="header"><div class="container"><div class="header-content"><div class="logo"><a href="index.html">MEAUXBILITY</a></div></div></div></header>',
            footer: '<footer class="footer"><div class="container"><div class="footer-content"><p>&copy; 2024 Meauxbility. All rights reserved.</p></div></div></footer>'
        };
        
        targetElement.innerHTML = fallbacks[componentName] || '';
    }

    async loadAllComponents() {
        // Load header
        const headerElement = document.getElementById('header-component');
        if (headerElement) {
            await this.loadComponent('header', headerElement);
        }

        // Load footer
        const footerElement = document.getElementById('footer-component');
        if (footerElement) {
            await this.loadComponent('footer', footerElement);
        }
    }
}

// Initialize component loader when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    const loader = new ComponentLoader();
    loader.loadAllComponents();
    
    // Mark user interaction
    ['click', 'scroll', 'keydown'].forEach(event => {
        document.addEventListener(event, () => {
            sessionStorage.setItem('userInteracted', 'true');
        }, { once: true });
    });
});

// Export for use in other scripts
window.ComponentLoader = ComponentLoader;
