function on() {
  document.getElementById("overlay").style.display = "block";
}

function off() {
  document.getElementById("overlay").style.display = "none";
}

document.addEventListener("DOMContentLoaded", function () {
  const userInput = this.document.getElementById("userInput");
  const overlay = document.getElementById("overlay");

  userInput.addEventListener("input", function () {
    overlay.style.display = "none";
  });
});
