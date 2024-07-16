const specialFunc = document.getElementById("special");
const openFm = document.getElementById("openForm");

// function for home page

window.onload = function () {
  let totalMined = parseFloat(specialFunc.innerHTML);
  totalMined += 2048900;
  specialFunc.innerHTML = totalMined;
};
function startMining() {
  // dont redirect if not logged in
  //this is for test purpose only
  window.location.href = "start.html";
}

function cancelSignUp(e) {
  e.preventDefault();
  console.log("signup cancelled");
  openFm.style.display = "none";
}
function submitForm(e) {
  e.preventDefault();
  console.log("form submitted");
  alert("Form is closed at the moment");
}

function openForm() {
  openFm.style.display = "flex";
}
