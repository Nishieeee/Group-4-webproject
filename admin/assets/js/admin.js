function sortTable(columnIndex) {
  const table = document.getElementById("sortableTable");
  const rows = Array.from(table.rows).slice(1); // skip the header
  let ascending = table.getAttribute("data-sort-direction") !== "asc";
  
  rows.sort((a, b) => {
    const cellA = a.cells[columnIndex].innerText.toLowerCase();
    const cellB = b.cells[columnIndex].innerText.toLowerCase();
    
    const isNumber = !isNaN(cellA) && !isNaN(cellB);
    
    if (isNumber) {
      return ascending ? cellA - cellB : cellB - cellA;
    } else {
      return ascending ? cellA.localeCompare(cellB) : cellB.localeCompare(cellA);
    }
  });

  table.setAttribute("data-sort-direction", ascending ? "asc" : "desc");

  const tbody = table.querySelector("tbody");
  rows.forEach(row => tbody.appendChild(row));
}


