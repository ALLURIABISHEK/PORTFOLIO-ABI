// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function () {

  // Initialize AOS (Animate On Scroll)
  try {
    AOS.init({
      duration: 1000,
      easing: 'ease-out-cubic',
      once: false,
      mirror: true,
      offset: 100
    });
  } catch (e) {
    console.error('AOS initialization failed:', e);
  }


  // Initialize VanillaTilt on all elements with data-tilt
  try {
    const tiltElements = document.querySelectorAll('[data-tilt]');
    VanillaTilt.init(tiltElements, {
      max: 5,
      speed: 400,
      glare: true,
      'max-glare': 0.2
    });
  } catch (e) {
    console.error('VanillaTilt initialization failed:', e);
  }


  // Mobile Navigation Logic
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');

  if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
      navLinks.classList.toggle('active');
      hamburger.classList.toggle('active');
    });
  }

  // Smooth Scroll for all anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
        // Close mobile menu if open
        if (navLinks && navLinks.classList.contains('active')) {
          navLinks.classList.remove('active');
          if (hamburger) {
            hamburger.classList.remove('active');
          }
        }
      }
    });
  });

  // Contact Form Handling
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();

      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const subject = document.getElementById('subject').value || 'Portfolio Contact';
      const message = document.getElementById('message').value;

      // Create mailto link
      const mailtoLink = `mailto:alluriabishekkumar@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`Name: ${name}
Email: ${email}

Message:
${message}`)}`;

      window.location.href = mailtoLink;
    });
  }

  // Toggle sections
  const toggleElement = (btnId, elementId, showText, hideText) => {
    const toggleBtn = document.getElementById(btnId);
    const element = document.getElementById(elementId);

    if (toggleBtn && element) {
      toggleBtn.addEventListener('click', function () {
        const isActive = element.classList.toggle('active');
        element.style.display = isActive ? (elementId === 'extraCerts' ? 'grid' : 'block') : 'none';
        toggleBtn.innerHTML = isActive ? `<i class="fas fa-chevron-up"></i> ${hideText}` : `<i class="fas fa-chevron-down"></i> ${showText}`;
      });
    }
  }

  toggleElement('toggleCertsBtn', 'extraCerts', 'View All 6 Certifications', 'Show Less');
  toggleElement('skillsToggleBtn', 'additionalSkillsSection', 'View All', 'Show Less');


  // Snappy Scroll-Active Navigation Logic
  function updateNavOnScroll() {
    let current = '';
    const sections = document.querySelectorAll('section[id]');
    const scrollPos = window.scrollY + 100;

    sections.forEach(section => {
      const id = section.getAttribute('id');
      if (id && scrollPos >= section.offsetTop && scrollPos < section.offsetTop + section.offsetHeight) {
        current = id;
      }
    });

    // Update Desktop Nav
    document.querySelectorAll('.nav-links a').forEach(link => {
      link.classList.toggle('active', link.getAttribute('href') === `#${current}`);
    });

    // Update Mobile Bottom Nav Tabs
    document.querySelectorAll('.navg .tab').forEach(tab => {
      tab.classList.toggle('active', tab.getAttribute('href') === `#${current}`);
    });
  }

  window.addEventListener('scroll', updateNavOnScroll);
  // Initial check
  updateNavOnScroll();

  // --- Premium Animations (Intersection Observer) ---
  const revealOptions = {
    threshold: 0.15,
    rootMargin: "0px 0px -50px 0px"
  };

  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
      } else {
        entry.target.classList.remove('active');
      }
    });
  }, revealOptions);

  document.querySelectorAll('.project-card, .cert-card, .skill-category, .info-card, .contact-form').forEach(el => {
    el.classList.add('reveal');
    revealObserver.observe(el);
  });

  // Staggered Title Animation Logic
  document.querySelectorAll('.section-title h2, h2.section-title, .title-reveal').forEach(title => {
    const text = title.innerText;
    title.innerHTML = text.split('').map((char, i) =>
      `<span style="transition-delay: ${i * 0.03}s">${char === ' ' ? '&nbsp;' : char}</span>`
    ).join('');

    const titleObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, {
      threshold: 0.4
    });
    titleObserver.observe(title);
  });

  // Navbar scroll effect
  const nav = document.querySelector('nav');
  if (nav) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 100) {
        nav.style.height = '60px';
        nav.style.background = 'rgba(5, 5, 8, 0.95)';
        nav.style.backdropFilter = 'blur(25px)';
      } else {
        nav.style.height = '70px';
        nav.style.background = 'rgba(5, 5, 8, 0.85)';
        nav.style.backdropFilter = 'blur(20px)';
      }
    });
  }

  // --- Swiper Initializations ---
  try {
    // Projects Swiper
    new Swiper('.projectsSwiper', {
      slidesPerView: 1,
      spaceBetween: 30,
      loop: true,
      scrollBar: false,
      speed: 800,
      resistanceRatio: 0.85,
      grabCursor: true,
      effect: 'creative',
      creativeEffect: {
        prev: {
          shadow: true,
          translate: [0, 0, -400],
          opacity: 0
        },
        next: {
          translate: ['100%', 0, 0],
          opacity: 1
        },
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });

    // Certifications Swiper
    new Swiper('.certsSwiper', {
      slidesPerView: 1,
      spaceBetween: 30,
      loop: true,
      speed: 800,
      resistanceRatio: 0.85,
      grabCursor: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
  } catch (e) {
    console.error('Swiper initialization failed:', e);
  }

});
