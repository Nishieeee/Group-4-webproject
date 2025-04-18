$("document").ready(() => {
  // Hide the patients page initially
  $(".patients-page").hide();
});
$(".menu").click(() => {
  $(".nav-text").toggle();
  $("aside").toggleClass(".minimize");
});
$("document").ready(() => {
  $(".main-page").addClass("page-item-active");
  $(".pts").click(() => {
    //show patients page and hide main page
    $(".main-content").hide();
    $(".pts").addClass("page-item-active");
    $(".main-page").removeClass("page-item-active");
    $(".add-patient").hide();
    $(".patients-table").fadeIn();
    $(".patients-page").fadeIn();
    $(".patients-page").fadeIn(slow);
    $(".patients-page").fadeIn(500);
  });

  $(".main-page").click(() => {
    $(".main-page").addClass("page-item-active");
    $(".pts").removeClass("page-item-active");

    //show main and hide patients page
    $(".patients-page").hide();

    $(".main-content").fadeIn();
    $(".main-content").fadeIn(slow);
    $(".main-content").fadeIn(500);
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

  $(".btn-cancel").click(() => {
    $(".add-patient").hide();
    $(".patients-table").fadeIn();
    $(".patients-table").fadeIn(slow);
    $(".patients-table").fadeIn(500);
  });
});
