

$("document").ready(() => {
  
    $(".added-success").hide();
  
     
      $(".add-department").hide();
      $(".edit-department").hide();
  
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
  
  
        $(".btnAddDepartment").click(() => {
          $(".main-department-section").hide();
          $(".add-department").fadeIn();
          $(".add-department").fadeIn(slow);
          $(".add-department").fadeIn(4000);
        });
  
        $(".btn-cancel").click(() => {
            $(".add-department").hide();
            $(".edit-department").hide();

            $(".main-department-section").fadeIn();
            $(".main-department-section").fadeIn(slow);
            $(".main-department-section").fadeIn(1000);
            $(".main-department-section").show(); 
        });
  
        $(".btn-finish").click(() => {
          $(".add-department").hide();
          $(".edit-department").hide();
          $(".added-success").show();
  
          setTimeout(() => { 
            $(".added-success").fadeOut(400);
          }, 3000);
          $(".main-department-section").fadeIn();
          $(".main-department-section").fadeIn(slow);
          $(".main-department-section").fadeIn(1000);
          $(".main-department-section").show(); 
        });
  
        $(".edit-ptnt").click(() => {
            $(".main-department-section").hide();


          $(".edit-department").fadeIn();
          $(".edit-department").fadeIn(slow);
          $(".edit-department").fadeIn(4000);

          
        });
  });