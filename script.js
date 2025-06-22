document.addEventListener('DOMContentLoaded', function() {
    // Mobile Navigation
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    
    hamburger.addEventListener('click', function() {
        navLinks.classList.toggle('active');
        hamburger.innerHTML = navLinks.classList.contains('active') ? 
            '<i class="fas fa-times"></i>' : '<i class="fas fa-bars"></i>';
    });
    
    // Smooth scrolling for navigation links
  // Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    const targetId = anchor.getAttribute('href');

    // Skip if it's just "#" or the element doesn't exist
    if (targetId === "#" || !document.querySelector(targetId)) return;

    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        // Close mobile menu if open
        if (navLinks.classList.contains('active')) {
            navLinks.classList.remove('active');
            hamburger.innerHTML = '<i class="fas fa-bars"></i>';
        }

        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 70, // Adjust this offset if you have a fixed navbar
                behavior: 'smooth'
            });
        }
    });
});

    
    // Add shadow to navbar on scroll
    window.addEventListener('scroll', function() {
        const nav = document.querySelector('nav');
        if (window.scrollY > 50) {
            nav.style.boxShadow = '0 4px 15px rgba(0,0,0,0.1)';
        } else {
            nav.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
        }
    });
    
    // Form submission
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const formData = new FormData(contactForm);
            const data = {};
            formData.forEach((value, key) => {
                data[key] = value;
            });
            
            // Here you would typically send the data to a server
            console.log('Form submitted:', data);
            
            // Show success message
            alert('Thank you for your message! I will get back to you soon.');
            contactForm.reset();
        });
    }
    
    // Animation on scroll
    const animateOnScroll = function() {
        const elements = document.querySelectorAll('.project-card, .skills-category, .timeline-item');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.2;
            
            if (elementPosition < screenPosition) {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }
        });
    };
    
    // Set initial state for animated elements
    document.querySelectorAll('.project-card, .skills-category, .timeline-item').forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    });
    
    // Run on load and scroll
    window.addEventListener('load', animateOnScroll);
    window.addEventListener('scroll', animateOnScroll);
});


//=====================================Certifications section ===========================================



document.addEventListener('DOMContentLoaded', function() {
  const toggleBtn = document.getElementById("toggleCertsBtn");
  const extraCerts = document.getElementById("extraCerts");
  let isExpanded = false;

  toggleBtn.addEventListener("click", function() {
    isExpanded = !isExpanded;
    
    // Toggle the display
    if (isExpanded) {
      extraCerts.style.display = "flex";
      toggleBtn.textContent = "View Less";
    } else {
      extraCerts.style.display = "none";
      toggleBtn.textContent = "View All Certifications";
    }
    
    // Smooth scroll to button if expanding
    if (isExpanded) {
      setTimeout(() => {
        toggleBtn.scrollIntoView({ behavior: "smooth", block: "nearest" });
      }, 100);
    }
  });
});



////////////////////////////AI Models Section Toggle

 document.addEventListener('DOMContentLoaded', function() {
            const toggleBtn = document.getElementById('skillsToggleBtn');
            const additionalSection = document.getElementById('additionalSkillsSection');
            const btnText = toggleBtn.querySelector('.btn-text');
            const btnIcon = toggleBtn.querySelector('.btn-icon');
            let isExpanded = false;

            toggleBtn.addEventListener('click', function() {
                if (isExpanded) {
                    additionalSection.style.display = 'none';
                    btnText.textContent = 'View All';
                    btnIcon.style.transform = 'rotate(0deg)';
                    isExpanded = false;
                } else {
                    additionalSection.style.display = 'block';
                    btnText.textContent = 'View Less';
                    btnIcon.style.transform = 'rotate(180deg)';
                    isExpanded = true;
                }
            });
        });

/*========================++++++++++++++==============END OF THE NAV BAR DESIGN FOR THE MOBILE VIEW===================+++++++++++++++++*/



 const tabs = document.querySelectorAll('.navg .tab');
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
    });
  });




  //======================================================
// Wait for DOM to be fully loaded
// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize Swiper
    var swiper = new Swiper(".projectsSwiper", {
        slidesPerView: 1,
        spaceBetween: 20,
        loop: true,
        grabCursor: true,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        autoplay: {
            delay: 4000,
            disableOnInteraction: false,
        },
    });
});

//////////////////////=========================CERTIFICATION FOR THE MOBILE SWIPER

// Add this to your existing JavaScript (after the Projects swiper initialization)
document.addEventListener('DOMContentLoaded', function() {
  // Initialize Certifications Swiper
  var certSwiper = new Swiper(".certsSwiper", {
    slidesPerView: 1,
    spaceBetween: 20,
    loop: true,
    grabCursor: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
  });
  
  // Keep your existing toggleCertsBtn functionality
  const toggleCertsBtn = document.getElementById('toggleCertsBtn');
  const extraCerts = document.getElementById('extraCerts');
  
  if (toggleCertsBtn && extraCerts) {
    toggleCertsBtn.addEventListener('click', function() {
      const isHidden = extraCerts.style.display === 'none';
      extraCerts.style.display = isHidden ? 'flex' : 'none';
      this.textContent = isHidden ? 'Show Less' : 'View All 6 Certifications';
    });
  }
});