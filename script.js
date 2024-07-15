const BEGINNER_THRESHOLD = 100;
const AMATEUR_THRESHOLD = 200;
const PROFESSIONAL_THRESHOLD = 500;
const MASTER_TRESHOLD = 1000;
const LEGEND_TRESHOLD = 2500;
const SUPREME_MASTER_TRESHOLD = 5000;
const MAX_BALANCE = 300;

const tapBalanceElem = document.getElementById("tapBalance");
const earnPerHourElem = document.getElementById("earnPerHour");
const tapPerSecElem = document.getElementById("tapPerSec");
const levelElem = document.getElementById("level");
const dailyClaimElem = document.getElementById("dailyC");
const newUserRewardElem = document.getElementById("newUser");

// Initial values
let balance = parseFloat(tapBalanceElem.innerHTML);
let earnPerHour = parseFloat(earnPerHourElem.innerHTML);
let tapPerSec = 1;
let level = levelElem.innerHTML;
let dailyReward = dailyClaimElem.innerHTML;
let newUserR = newUserRewardElem.innerHTML;

// Set initial tap per second value
tapPerSecElem.innerHTML = tapPerSec;

// Helper function to update DOM elements
function updateDOM() {
  tapBalanceElem.innerHTML = balance;
  earnPerHourElem.innerHTML = earnPerHour;
  tapPerSecElem.innerHTML = tapPerSec;
  levelElem.innerHTML = level;
  dailyClaimElem.innerHTML = dailyReward;
  newUserRewardElem.innerHTML = newUserR;
}

// Helper function to update level and tap per second
function updateLevelAndTapPerSec() {
  if (balance < BEGINNER_THRESHOLD) {
    level = "2/10 Beginner";
    tapPerSec = 1;
  } else if (balance < AMATEUR_THRESHOLD) {
    level = "3/10 Amateur";
    tapPerSec = 2;
  } else if (balance < PROFESSIONAL_THRESHOLD) {
    level = "4/10 Professional";
    tapPerSec = 3;
  } else if (balance < MASTER_TRESHOLD) {
    level = "5/10 Master";
    tapPerSec = 4;
  } else if (balance < LEGEND_TRESHOLD) {
    level = "6/10 Legend";
    tapPerSec = 5;
  } else if (balance < SUPREME_MASTER_TRESHOLD) {
    level = "7/10 Supreme";
    tapPerSec = 6;
  } else {
    level = "8/10 King";
    tapPerSec = 10;
  }
}

// Main tap function
function tap() {
  if (earnPerHour > 0 && earnPerHour - tapPerSec >= 0) {
    updateLevelAndTapPerSec();
    earnPerHour -= tapPerSec;
    balance += tapPerSec;
    updateDOM();
  }
}

function dailyClaim() {
  balance += 200;
  updateLevelAndTapPerSec();
  dailyClaimElem.textContent = "Claimed";
  dailyClaimElem.disabled = true;
  dailyClaimElem.style.cursor = "not-allowed";
  updateDOM();
}
function newUserReward() {
  balance += 1000;
  updateLevelAndTapPerSec();
  newUserRewardElem.disabled = true;
  newUserRewardElem.style.cursor = "not-allowed";
  updateDOM();
}

const earnInterval = setInterval(increaseEarnPerHour, 2000);
//increases the maximum you can earn by x amount every second and stop if max-balance limit is reached
function increaseEarnPerHour() {
  const addTime = 5;
  if (earnPerHour <= MAX_BALANCE && earnPerHour + addTime <= MAX_BALANCE) {
    setInterval(earnInterval, 1000);
    earnPerHour += addTime;
    earnPerHourElem.innerHTML = earnPerHour;
  }
}
