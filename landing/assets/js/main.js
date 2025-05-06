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

/** Added More */
document.addEventListener('DOMContentLoaded', function() {
  const doctorSelect = document.getElementById('doctor');
  const checkAppointmentBtn = document.getElementById('checkAppointment');
  const appointmentsSection = document.querySelector('.appointments');
  const timeSlotModal = new bootstrap.Modal(document.getElementById('timeSlotModal'));
  
  // Enable/disable appointment button based on doctor selection
  doctorSelect.addEventListener('change', function() {
    checkAppointmentBtn.disabled = !this.value;
  });

  // Show appointments calendar when button is clicked
  checkAppointmentBtn.addEventListener('click', function() {
    appointmentsSection.style.display = 'block';
  });

  // Handle appointment button clicks
  document.querySelectorAll('.btn-cln-apptnmnt').forEach(button => {
    const appointmentCount = parseInt(button.textContent.split(' ')[0]);
    
    if (appointmentCount >= 25) {
      button.classList.add('disabled');
      button.disabled = true;
      button.title = 'No available slots';
    } else {
      button.addEventListener('click', function() {
        showTimeSlots(button.closest('td').textContent.trim().split('\n')[0]);
      });
    }
  });

  function showTimeSlots(date) {
    const timeSlots = [
      '09:00 AM', '09:30 AM', '10:00 AM', '10:30 AM',
      '11:00 AM', '11:30 AM', '02:00 PM', '02:30 PM',
      '03:00 PM', '03:30 PM', '04:00 PM', '04:30 PM'
    ];

    const timeSlotContainer = document.querySelector('.time-slots');
    timeSlotContainer.innerHTML = '';

    timeSlots.forEach(time => {
      const slot = document.createElement('div');
      slot.className = 'time-slot';
      slot.textContent = time;
      
      // Randomly disable some slots (you can modify this logic)
      if (Math.random() < 0.3) {
        slot.classList.add('disabled');
      } else {
        slot.addEventListener('click', () => selectTimeSlot(slot, date, time));
      }
      
      timeSlotContainer.appendChild(slot);
    });

    timeSlotModal.show();
  }

  function selectTimeSlot(slot, date, time) {
    if (slot.classList.contains('disabled')) return;

    // Remove selection from other slots
    document.querySelectorAll('.time-slot').forEach(s => {
      s.classList.remove('selected');
    });

    // Select this slot
    slot.classList.add('selected');

    // Here you can handle the appointment creation
    // For example, show a confirmation dialog
    if (confirm(`Confirm appointment for ${date} at ${time}?`)) {
      // Add appointment to the list
      addAppointmentToList(date, time);
      timeSlotModal.hide();
    }
  }

  function addAppointmentToList(date, time) {
    const table = document.getElementById('patientTable');
    const newRow = table.insertRow(-1);
    
    const appointmentId = String(table.rows.length - 1).padStart(3, '0');
    
    newRow.innerHTML = `
      <td>${appointmentId}</td>
      <td>${doctorSelect.options[doctorSelect.selectedIndex].text}</td>
      <td>--</td>
      <td>${date}</td>
      <td>${time}</td>
      <td>--</td>
      <td><span class="badge bg-warning">Pending</span></td>
      <td>
        <button class="btn btn-danger m-1 h-100">
          <i class="bi bi-trash"></i>
        </button>
        <button class="btn btn-success edit-ptnt m-1">
          <i class="bi bi-check2-circle"></i>
        </button>
        <button class="btn btn-primary edit-ptnt m-1">
          <i class="bi bi-pencil-square"></i>
        </button>
      </td>
    `;

    // Update appointment count for the selected date
    const dateCell = Array.from(document.querySelectorAll('td')).find(td => 
      td.textContent.includes(date)
    );
    if (dateCell) {
      const appointmentButton = dateCell.querySelector('.btn-cln-apptnmnt');
      const currentCount = parseInt(appointmentButton.textContent.split(' ')[0]);
      appointmentButton.textContent = `${currentCount + 1} Appointments`;

      // Disable if reached 25
      if (currentCount + 1 >= 25) {
        appointmentButton.classList.add('disabled');
        appointmentButton.disabled = true;
      }
    }
  }

  // Handle return button
  document.querySelector('.btn-cancel').addEventListener('click', function() {
    appointmentsSection.style.display = 'none';
  });
});




})();