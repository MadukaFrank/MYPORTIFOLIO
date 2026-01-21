

        document.addEventListener('DOMContentLoaded', function() {
        
            
            
            // Mobile Menu Toggle
            const menuToggle = document.querySelector('.menu-toggle');
            const closeMenu = document.querySelector('.close-menu');
            const mobileMenu = document.querySelector('.mobile-menu');
            const overlay = document.querySelector('.overlay');
            
            if (menuToggle && closeMenu && mobileMenu && overlay) {
                menuToggle.addEventListener('click', function() {
                    mobileMenu.classList.add('active');
                    overlay.classList.add('active');
                    document.body.style.overflow = 'hidden';
                });
                
                closeMenu.addEventListener('click', function() {
                    mobileMenu.classList.remove('active');
                    overlay.classList.remove('active');
                    document.body.style.overflow = '';
                });
                
                overlay.addEventListener('click', function() {
                    mobileMenu.classList.remove('active');
                    overlay.classList.remove('active');
                    document.body.style.overflow = '';
                });
                
                // Close menu when clicking on a link
                document.querySelectorAll('.mobile-menu a').forEach(link => {
                    link.addEventListener('click', function() {
                        mobileMenu.classList.remove('active');
                        overlay.classList.remove('active');
                        document.body.style.overflow = '';
                    });
                });
            }
            
            // Smooth scrolling for navigation links
            document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                anchor.addEventListener('click', function(e) {
                   
                    if (this.classList.contains('menu-toggle')) return;
                    
                    e.preventDefault();
                    
                    const targetId = this.getAttribute('href');
                    if (targetId === '#') return;
                    
                    const targetElement = document.querySelector(targetId);
                    if (targetElement) {
                        targetElement.scrollIntoView({
                            behavior: 'smooth'
                        });
                    }
                });
            });
            
            // Form submission
            const contactForm = document.getElementById('contactForm');
            const formSuccess = document.getElementById('formSuccess');
            
            if (contactForm) {
                contactForm.addEventListener('submit', function(e) {
                    e.preventDefault();
                    
                  
                    const name = document.getElementById('name').value;
                    const email = document.getElementById('email').value;
                    const phone = document.getElementById('phone').value;
                    const subject = document.getElementById('subject').value;
                    const message = document.getElementById('message').value;
                    
                   
                    console.log('Form submitted:', {name, email, phone, subject, message});
                    
                
                    formSuccess.style.display = 'block';
                    
                    
                    setTimeout(() => {
                        formSuccess.style.display = 'none';
                    }, 5000);
                    
                 
                    contactForm.reset();
                });
            }
            
            
            const animateOnScroll = function() {
                const elements = document.querySelectorAll('.service-card, .resume-item, .contact-item');
                
                elements.forEach(element => {
                    const elementPosition = element.getBoundingClientRect().top;
                    const screenPosition = window.innerHeight / 1.2;
                    
                    if (elementPosition < screenPosition) {
                        element.style.opacity = '1';
                        element.style.transform = 'translateY(0)';
                    }
                });
            };
            
           
            const animatedElements = document.querySelectorAll('.service-card, .resume-item, .contact-item');
            animatedElements.forEach(element => {
                element.style.opacity = '0';
                element.style.transform = 'translateY(20px)';
                element.style.transition = 'all 0.5s ease';
            });
            
           
            animateOnScroll();
            
            window.addEventListener('scroll', animateOnScroll);
        });
    