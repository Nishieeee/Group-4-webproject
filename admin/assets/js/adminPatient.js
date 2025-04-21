// File: admin/assets/js/adminPatient.js
// Description: This file contains the JavaScript code for the admin patient management page.
$("#added-success").hide();
$("document").ready(() => {
  
  $(".add-patient").hide();
  $(".edit-patient-form").hide();
  $(".pts").addClass("page-item-active");

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
  //table sorter
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

  $(".btnAddPatient").click(() => {
    $(".patients-table").hide();
    $(".add-patient").fadeIn();
    $(".add-patient").fadeIn(slow);
    $(".add-patient").fadeIn(500);
  });

  $(".btn-add-patient").click(() => {
    $(".edit-patient-form").hide();
    $(".add-patient").hide();
    $("#added-success").show();
    setTimeout(() => {
      $("#added-success").fadeOut(400);
    }, 3000);
    $(".patients-table").fadeIn();
    $(".patients-table").fadeIn(slow);
    $(".patients-table").fadeIn(500);
  });

  $(".btn-cancel").click(() => {
    $(".add-patient").hide();
    $(".edit-patient-form").hide();

    $(".patients-table").fadeIn();
    $(".patients-table").fadeIn(slow);
    $(".patients-table").fadeIn(500);
  });

  $(".edit-ptnt").click(() => {
    $(".patients-table").hide();
    $(".edit-patient-form").fadeIn();
    $(".edit-patient-form").fadeIn(slow);
    $(".edit-patient-form").fadeIn(500);
  });
});
