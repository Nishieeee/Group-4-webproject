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

    $(".btnAddDoctor").click(() => {
     $(".doctors-list").hide();
      $(".add-doctor").fadeIn();
      $(".add-doctor").fadeIn(slow);
      $(".add-doctor").fadeIn(1000);
      $(".add-doctor").show();

      $(".edit-patient-form").hide();
    });

    $(".btn-cancel").click(() => {
        $(".add-doctor").hide();
        $(".doctors-list").fadeIn();
        $(".doctors-list").fadeIn(slow);
        $(".doctors-list").fadeIn(1000);
        $(".doctors-list").show();
    });
});