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

  toggleVisibility();
};
