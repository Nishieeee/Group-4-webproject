(function() {
  "use strict";

  /** * Apply .scrolled class to the body as the page is scrolled down */
  function toggleScrolled() {
    const selectBody = document.querySelector('body');
    const selectHeader = document.querySelector('#header');
    if (!selectHeader.classList.contains('scroll-up-sticky') && !selectHeader.classList.contains('sticky-top') && !selectHeader.classList.contains('fixed-top')) return;
    window.scrollY > 100 ? selectBody.classList.add('scrolled') : selectBody.classList.remove('scrolled');
  }

  document.addEventListener('scroll', toggleScrolled);
  window.addEventListener('load', toggleScrolled);

  /** * Mobile nav toggle */
  const mobileNavToggleBtn = document.querySelector('.mobile-nav-toggle');

  function mobileNavToogle() {
    document.querySelector('body').classList.toggle('mobile-nav-active');
    mobileNavToggleBtn.classList.toggle('bi-list');
    mobileNavToggleBtn.classList.toggle('bi-x');
  }
  mobileNavToggleBtn.addEventListener('click', mobileNavToogle);

  /*** Hide mobile nav on same-page/hash links*/
  document.querySelectorAll('#navmenu a').forEach(navmenu => {
    navmenu.addEventListener('click', () => {
      if (document.querySelector('.mobile-nav-active')) {
        mobileNavToogle();
      }
    });

  });

  /** * Toggle mobile nav dropdowns */
  document.querySelectorAll('.navmenu .toggle-dropdown').forEach(navmenu => {
    navmenu.addEventListener('click', function(e) {
      e.preventDefault();
      this.parentNode.classList.toggle('active');
      this.parentNode.nextElementSibling.classList.toggle('dropdown-active');
      e.stopImmediatePropagation();
    });
  });

  /** * Preloader */
  const preloader = document.querySelector('#preloader');
  if (preloader) {
    window.addEventListener('load', () => {
      preloader.remove();
    });
  }

  /** * Scroll top button */
  let scrollTop = document.querySelector('.scroll-top');

  function toggleScrollTop() {
    if (scrollTop) {
      window.scrollY > 100 ? scrollTop.classList.add('active') : scrollTop.classList.remove('active');
    }
  }
  scrollTop.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });

  window.addEventListener('load', toggleScrollTop);
  document.addEventListener('scroll', toggleScrollTop);

  /*** Animation on scroll function and init */
  function aosInit() {
    AOS.init({
      duration: 600,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    });
  }
  window.addEventListener('load', aosInit);

  /*** Initiate glightbox */
  const glightbox = GLightbox({
    selector: '.glightbox'
  });

  /** * Initiate Pure Counter*/
  new PureCounter();

  /*** Frequently Asked Questions Toggle */
  document.querySelectorAll('.faq-item h3, .faq-item .faq-toggle').forEach((faqItem) => {
    faqItem.addEventListener('click', () => {
      faqItem.parentNode.classList.toggle('faq-active');
    });
  });

  /*** Init swiper sliders */
  function initSwiper() {
    document.querySelectorAll(".init-swiper").forEach(function(swiperElement) {
      let config = JSON.parse(
        swiperElement.querySelector(".swiper-config").innerHTML.trim()
      );

      if (swiperElement.classList.contains("swiper-tab")) {
        initSwiperWithCustomPagination(swiperElement, config);
      } else {
        new Swiper(swiperElement, config);
      }
    });
  }

  window.addEventListener("load", initSwiper);

  /** * Correct scrolling position upon page load for URLs containing hash links. */
  window.addEventListener('load', function(e) {
    if (window.location.hash) {
      if (document.querySelector(window.location.hash)) {
        setTimeout(() => {
          let section = document.querySelector(window.location.hash);
          let scrollMarginTop = getComputedStyle(section).scrollMarginTop;
          window.scrollTo({
            top: section.offsetTop - parseInt(scrollMarginTop),
            behavior: 'smooth'
          });
        }, 100);
      }
    }
  });

  /** * Navmenu Scrollspy */
  let navmenulinks = document.querySelectorAll('.navmenu a');

  function navmenuScrollspy() {
    navmenulinks.forEach(navmenulink => {
      if (!navmenulink.hash) return;
      let section = document.querySelector(navmenulink.hash);
      if (!section) return;
      let position = window.scrollY + 200;
      if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
        document.querySelectorAll('.navmenu a.active').forEach(link => link.classList.remove('active'));
        navmenulink.classList.add('active');
      } else {
        navmenulink.classList.remove('active');
      }
    })
  }
  window.addEventListener('load', navmenuScrollspy);
  document.addEventListener('scroll', navmenuScrollspy);

 
/** Appointment Form */
const form = document.getElementById("appointmentForm");
const appointmentButton = document.getElementById("makeAppointmentButton"); // Button ID from index.html

// Add a click event listener to the "Make an Appointment" button
appointmentButton.addEventListener("click", function (event) {
    event.preventDefault(); // Prevent default form submission behavior

    const formData = new FormData(form);
    const params = new URLSearchParams();
    let hasErrors = false;

    // Iterate through form data entries
    for (const [key, value] of formData.entries()) {
        if (value.trim() === "") {
            console.warn(`Field '${key}' is empty.`);
            hasErrors = true;
        } else {
            params.append(key, value.trim());
        }
    }

    // If there are errors, notify the user and stop the redirection
    if (hasErrors) {
        alert("Please fill in all required fields before proceeding.");
        return;
    }

    // Redirect to signup.html with form values as query parameters
    window.location.href = "/landing/signup.html?" + params.toString();
});



/** Login */
document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("loginForm").addEventListener("submit", function (event) {
    event.preventDefault();

    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();

    const accounts = {
      "doctor@admin.com": { password: "123", redirect: "/admin/Admin.html" },
      "doctor@doctor.com": { password: "123", redirect: "/Doctors/docdashboard.html" },
      "patient@gmail.com": { password: "123", redirect: "/patients/patients.html" },
    };

    if (accounts[email] && accounts[email].password === password) {
      window.location.href = accounts[email].redirect;
    } else {
      const errorMessage = document.getElementById("errorMessage");
      errorMessage.style.display = "block";
      errorMessage.textContent = "Invalid email or password. Please try again.";
    }
  });
});


})();