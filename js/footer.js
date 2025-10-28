// Footer JavaScript
// Handles footer functionality, donation modal, and social interactions

class Footer {
    constructor() {
        this.init();
    }

    init() {
        this.setupDonationModal();
        this.setupSocialLinks();
        this.setupNewsletterSignup();
        this.setupScrollToTop();
    }

    setupDonationModal() {
        const donationModal = document.getElementById('donation-modal');
        const modalClose = document.querySelector('.modal-close');
        const modalOverlay = document.querySelector('.modal-overlay');
        const quickDonateBtns = document.querySelectorAll('.quick-donate-btn');

        // Show modal after delay (if user hasn't interacted)
        this.scheduleModalDisplay();

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
                this.redirectToDonation(amount);
            });
        });

        // Escape key to close modal
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && donationModal && donationModal.style.display !== 'none') {
                this.hideDonationModal();
            }
        });
    }

    scheduleModalDisplay() {
        // Show modal after 30 seconds if user hasn't interacted
        setTimeout(() => {
            if (!this.hasUserInteracted() && !this.hasSeenModal()) {
                this.showDonationModal();
            }
        }, 30000);

        // Show modal when user is about to leave
        document.addEventListener('mouseleave', (e) => {
            if (e.clientY <= 0 && !this.hasSeenModal()) {
                this.showDonationModal();
            }
        });
    }

    showDonationModal() {
        const donationModal = document.getElementById('donation-modal');
        if (donationModal) {
            donationModal.style.display = 'block';
            document.body.style.overflow = 'hidden';
            
            // Mark as seen
            sessionStorage.setItem('donationModalSeen', 'true');
            
            // Focus first interactive element
            const firstButton = donationModal.querySelector('button');
            if (firstButton) {
                firstButton.focus();
            }
        }
    }

    hideDonationModal() {
        const donationModal = document.getElementById('donation-modal');
        if (donationModal) {
            donationModal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    }

    redirectToDonation(amount) {
        const url = new URL('impact.html', window.location.origin);
        if (amount) {
            url.searchParams.set('amount', amount);
        }
        window.location.href = url.toString();
    }

    setupSocialLinks() {
        const socialLinks = document.querySelectorAll('.social-link');
        
        socialLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                
                // Track social link clicks (if analytics is available)
                this.trackSocialClick(link.getAttribute('aria-label'));
                
                // For now, just show a message (replace with actual social URLs)
                this.showMessage('Social links coming soon!', 'info');
            });
        });
    }

    setupNewsletterSignup() {
        const newsletterForm = document.querySelector('.newsletter-form');
        
        if (newsletterForm) {
            newsletterForm.addEventListener('submit', (e) => {
                e.preventDefault();
                
                const email = newsletterForm.querySelector('input[type="email"]').value;
                
                if (this.validateEmail(email)) {
                    this.subscribeToNewsletter(email);
                } else {
                    this.showMessage('Please enter a valid email address.', 'error');
                }
            });
        }
    }

    subscribeToNewsletter(email) {
        // Simulate newsletter subscription
        this.showMessage('Thank you for subscribing to our newsletter!', 'success');
        
        // Reset form
        const newsletterForm = document.querySelector('.newsletter-form');
        if (newsletterForm) {
            newsletterForm.reset();
        }
        
        // Track subscription (if analytics is available)
        this.trackNewsletterSubscription(email);
    }

    setupScrollToTop() {
        // Create scroll to top button
        const scrollToTopBtn = document.createElement('button');
        scrollToTopBtn.className = 'scroll-to-top';
        scrollToTopBtn.innerHTML = '↑';
        scrollToTopBtn.setAttribute('aria-label', 'Scroll to top');
        scrollToTopBtn.style.display = 'none';
        
        document.body.appendChild(scrollToTopBtn);
        
        // Show/hide button based on scroll position
        window.addEventListener('scroll', () => {
            if (window.pageYOffset > 300) {
                scrollToTopBtn.style.display = 'block';
            } else {
                scrollToTopBtn.style.display = 'none';
            }
        });
        
        // Scroll to top functionality
        scrollToTopBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    hasUserInteracted() {
        return sessionStorage.getItem('userInteracted') === 'true';
    }

    hasSeenModal() {
        return sessionStorage.getItem('donationModalSeen') === 'true';
    }

    validateEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    trackSocialClick(platform) {
        // Placeholder for analytics tracking
        console.log(`Social link clicked: ${platform}`);
        
        // Example: Google Analytics
        // if (typeof gtag !== 'undefined') {
        //     gtag('event', 'social_click', {
        //         platform: platform
        //     });
        // }
    }

    trackNewsletterSubscription(email) {
        // Placeholder for analytics tracking
        console.log(`Newsletter subscription: ${email}`);
        
        // Example: Google Analytics
        // if (typeof gtag !== 'undefined') {
        //     gtag('event', 'newsletter_signup', {
        //         email_domain: email.split('@')[1]
        //     });
        // }
    }

    showMessage(text, type = 'info') {
        const message = document.createElement('div');
        message.className = `toast toast-${type}`;
        message.textContent = text;
        
        // Add styles
        message.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: ${type === 'success' ? '#4CAF50' : type === 'error' ? '#f44336' : '#2196F3'};
            color: white;
            padding: 12px 20px;
            border-radius: 4px;
            z-index: 10000;
            font-size: 14px;
            box-shadow: 0 2px 10px rgba(0,0,0,0.2);
            transform: translateX(100%);
            transition: transform 0.3s ease;
        `;
        
        document.body.appendChild(message);
        
        // Animate in
        setTimeout(() => {
            message.style.transform = 'translateX(0)';
        }, 100);
        
        // Remove after delay
        setTimeout(() => {
            message.style.transform = 'translateX(100%)';
            setTimeout(() => {
                if (message.parentNode) {
                    message.parentNode.removeChild(message);
                }
            }, 300);
        }, 3000);
    }
}

// Initialize footer when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    new Footer();
});

// Export for use in other scripts
window.Footer = Footer;
