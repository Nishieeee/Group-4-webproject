$("document").ready(() => {
    $(".add-doctor").hide();
    $(".edit-doctor-form").hide();
    $(".drs").addClass("page-item-active");
  
    $(".menu").click(() => {
      $(".nav-text").toggle();
      $("aside").toggleClass("minimize");
      $(".side-profile").toggleClass("side-profile-minimized");
      $(".patients-page").toggleClass("width-100");
    });
  
    $("aside").on("mouseenter", () => {
      if ($("aside").hasClass("minimize")) {
        $(".nav-text").show();
        $(".side-profile").removeClass("side-profile-minimized");
      }
    });
    $("aside").on("mouseleave", () => {
      if ($("aside").hasClass("minimize")) {
        $(".nav-text").hide();
        $(".side-profile").addClass("side-profile-minimized");
      }
    });

    $(".doctor-availability").hide();
    $(".doctor-account").hide();

    $(".btn-next-details").click(() => {
        $(".doctor-details").hide();
        $(".personal-details").removeClass("path-active");
        $(".availability").addClass("path-active");
        $(".doctor-availability").fadeIn();
        $(".doctor-availability").fadeIn(slow);
        $(".doctor-availability").fadeIn(1000);
    });
    
    $(".btn-next-avail").click(() => {
      $(".availability").removeClass("path-active");
      $(".personal-account").addClass("path-active");
        $(".doctor-availability").hide();
        $(".doctor-account").fadeIn();
        $(".doctor-account").fadeIn(slow);
        $(".doctor-account").fadeIn(1000);      
    });
    $(".btn-finish").click(() => {
      $(".personal-account").removeClass("path-active");
        $(".doctor-details").hide();
        $(".doctor-availability").hide();
        $(".doctor-account").hide();
        $(".doctors-list").fadeIn();
        $(".doctors-list").fadeIn(slow);
        $(".doctors-list").fadeIn(1000);
        $(".doctors-list").show();
    });

    $(".btnAddDoctor").click(() => {
      $(".doctors-list").hide();
      $(".personal-details").addClass("path-active");
      showAddDoctorForm();
      
    });

  function showAddDoctorForm() {
    $(".add-doctor").show();
    $(".add-doctor").fadeIn();
    $(".add-doctor").fadeIn(slow);
    $(".add-doctor").fadeIn(1000);
    $(".doctor-details").show();
    $(".doctor-details").fadeIn();
    $(".doctor-details").fadeIn(slow);
    $(".doctor-details").fadeIn(1000);
  }

    $(".btn-cancel").click(() => {
        $(".add-doctor").hide();
        $(".doctors-list").fadeIn();
        $(".doctors-list").fadeIn(slow);
        $(".doctors-list").fadeIn(1000);
        $(".doctors-list").show();
    });
});