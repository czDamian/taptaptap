const BEGINNER_THRESHOLD = 20;
const AMATEUR_THRESHOLD = 80;
const PROFESSIONAL_THRESHOLD = 200;
const MASTER_TAP_PER_SEC = 5;

const tapBalanceElem = document.getElementById("tapBalance");
const earnPerHourElem = document.getElementById("earnPerHour");
const tapPerSecElem = document.getElementById("tapPerSec");
const levelElem = document.getElementById("level");
const noTapElem = document.getElementById("noTap");
const dailyClaimElem = document.getElementById("dailyC");

// Initial values
let balance = parseFloat(tapBalanceElem.innerHTML);
let earnPerHour = parseFloat(earnPerHourElem.innerHTML);
let tapPerSec = 1;
let level = levelElem.innerHTML;
let dailyReward = dailyClaimElem.innerHTML;

// Set initial tap per second value
tapPerSecElem.innerHTML = tapPerSec;

// Helper function to update DOM elements
function updateDOM() {
  tapBalanceElem.innerHTML = balance;
  earnPerHourElem.innerHTML = earnPerHour;
  tapPerSecElem.innerHTML = tapPerSec;
  levelElem.innerHTML = level;
  dailyClaimElem.innerHTML = dailyReward;
}

// Helper function to update level and tap per second
function updateLevelAndTapPerSec() {
  if (balance < BEGINNER_THRESHOLD) {
    level = "Beginner";
    tapPerSec = 1;
  } else if (balance < AMATEUR_THRESHOLD) {
    level = "Amateur";
    tapPerSec = 2;
  } else if (balance < PROFESSIONAL_THRESHOLD) {
    level = "Professional";
    tapPerSec = 3;
  } else {
    level = "Master";
    tapPerSec = MASTER_TAP_PER_SEC;
  }
}

// Main tap function
function tap() {
  if (earnPerHour === 0) {
    noTapElem.className = "noTap";
    return;
  }

  if (earnPerHour > 0 || earnPerHour - tapPerSec >= 0) {
    updateLevelAndTapPerSec();
    earnPerHour -= tapPerSec;
    balance += tapPerSec;
    updateDOM();
  }
}

function dailyClaim() {
  balance += 200;
  updateLevelAndTapPerSec();
  dailyClaimElem.disabled = true;
  dailyClaimElem.style.cursor = "not-allowed";

  updateDOM();
}
