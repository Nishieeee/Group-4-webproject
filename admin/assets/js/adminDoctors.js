$("document").ready(() => {
    $(".add-patient").hide();
    $(".edit-patient-form").hide();
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
});