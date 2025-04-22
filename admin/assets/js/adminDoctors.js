$("#added-success").hide();

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
    $("html, body").scrollTop(0);
  });

  $(".btn-next-avail").click(() => {
    $(".availability").removeClass("path-active");
    $(".personal-account").addClass("path-active");
    $(".doctor-availability").hide();
    $(".doctor-account").fadeIn();
    $(".doctor-account").fadeIn(slow);
    $(".doctor-account").fadeIn(1000);
    $("html, body").scrollTop(0);
  });

  $(".btn-finish").click(() => {
    $(".personal-account").removeClass("path-active");
    $(".doctor-details").hide();
    $(".doctor-availability").hide();

    $(".doctor-account").hide();
    $("#added-success").show();

    setTimeout(() => {
      $("#added-success").fadeOut(400);
    }, 3000);

    $(".doctors-list").fadeIn();
    $(".doctors-list").fadeIn(slow);
    $(".doctors-list").fadeIn(1000);
    $(".doctors-list").show();
    $("html, body").scrollTop(0);
  });

  $(".btnAddDoctor").click(() => {
    $(".doctors-list").hide();
    $(".personal-details").addClass("path-active");
    showAddDoctorForm();
    $("html, body").scrollTop(0);
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
    $(".edit-doctor-form").hide();
    $(".doctors-list").fadeIn();
    $(".doctors-list").fadeIn(slow);
    $(".doctors-list").fadeIn(1000);
    $(".doctors-list").show();
    $("html, body").scrollTop(0);
  });

  $(".edit-ptnt").click(() => {
    $(".doctors-list").hide();
    $(".edit-doctor-form").fadeIn();
    $(".edit-doctor-form").fadeIn(slow);
    $(".edit-doctor-form").fadeIn(400);
    $("html, body").scrollTop(0);
  });
  $("#patientTable th").click(function () {
    var table = $(this).parents("table");
    var tbody = table.find("tbody");
    var rows = tbody.find("tr").toArray();
    var columnIndex = $(this).index();
    var type = $(this).data("type");
    var asc = !$(this).hasClass("asc");

    table.find("th").removeClass("asc desc");
    $(this).addClass(asc ? "asc" : "desc");

    rows.sort(function (a, b) {
      var A = $(a).children("td").eq(columnIndex).text().trim();
      var B = $(b).children("td").eq(columnIndex).text().trim();

      if (type === "number") {
        A = parseFloat(A);
        B = parseFloat(B);
        return asc ? A - B : B - A;
      } else {
        return asc ? A.localeCompare(B) : B.localeCompare(A);
      }
    });

    $.each(rows, function (i, row) {
      tbody.append(row);
    });
  });
});
