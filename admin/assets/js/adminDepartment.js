

$("document").ready(() => {
  
    $(".added-success").hide();
  
     
      $(".add-staff").hide();
      $(".edit-staff").hide();
  
      $(".menu").click(() => {
          $(".nav-text").toggle();
          $("aside").toggleClass("minimize");
          $(".side-profile").toggleClass("side-profile-minimized");
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
  
  
        $(".btnAddStaff").click(() => {
          
        });
  
        $(".btn-cancel").click(() => {
          
        });
  
        $(".btn-finish").click(() => {
          $(".add-staff").hide();
          $(".edit-staff").hide();
          $(".added-success").show();
  
          setTimeout(() => { 
            $(".added-success").fadeOut(400);
          }, 3000);
          $(".staff-list").fadeIn();
          $(".staff-list").fadeIn(slow);
          $(".staff-list").fadeIn(1000);
          $(".staff-list").show(); 
        });
  
        $(".edit-ptnt").click(() => {
          
        });
  });