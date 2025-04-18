$("document").ready(() => {
  // Hide the patients page initially
  $(".patients-page").hide();
});



$("document").ready(() => {

  $(".menu").click(() => {
    $(".nav-text").toggle();
    $("aside").toggleClass("minimize");
    $(".side-profile").toggleClass("side-profile-minimized");
  });

  $(".main-page").addClass("page-item-active");

  $(".main-page").click(() => {
    $(".main-page").addClass("page-item-active");
    $(".pts").removeClass("page-item-active");

    //show main and hide patients page
    $(".patients-page").hide();

    $(".main-content").fadeIn();
    $(".main-content").fadeIn(slow);
    $(".main-content").fadeIn(500);
  });

});
