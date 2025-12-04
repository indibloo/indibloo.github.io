window.onload = function () {
  let myTable = document.getElementById("gifts");

  let babyName = prompt("Are you a sweet baby?", "Enter Name of Baby");

  function toggleVisibility() {
    if (babyName === "Margot") {
      myTable.hidden = false;
    } else {
      alert("Go away; sweet babies only!");
    }
  }

  function loadGifts() {
    const tableRows = document.querySelectorAll("#gifts tr");
    const now = new Date();

    tableRows.forEach((row) => {
      const release = row.dataset.date;
      if (!release) return;

      const releaseDate = parseLocalDate(release); // safer
      releaseDate.setHours(12, 0, 0, 0); // end of day unlock

      row.hidden = now < releaseDate;
    });
  }

  function parseLocalDate(dateString) {
    const [y, m, d] = dateString.split("-").map(Number);
    return new Date(y, m - 1, d);
  }

  toggleVisibility();
  loadGifts();
};
