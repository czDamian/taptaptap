let eBalance = document.getElementById("tapBalance").innerHTML;
let balance = parseFloat(eBalance);
let earnPerHour = document.getElementById("earnPerHour").innerHTML;
let tapPerSec = 1;
document.getElementById("tapPerSec").innerHTML = tapPerSec;

let level = document.getElementById("level").innerHTML;

function tap() {
  if (earnPerHour == 0) {
    document.getElementById("noTap").className = "noTap";
  }
  if (earnPerHour > 0 || earnPerHour - tapPerSec >= 0) {
    if (balance >= 0 && balance < 20) {
      level = "2. Beginner";
      document.getElementById("level").innerHTML = level;
    } else if (balance >= 20 && balance < 80) {
      tapPerSec = 2;
      document.getElementById("tapPerSec").innerHTML = tapPerSec;
      level = "3. Amateur";
      document.getElementById("level").innerHTML = level;
    } else if (balance >= 80 && balance < 200) {
      tapPerSec = 3;
      document.getElementById("tapPerSec").innerHTML = tapPerSec;
      document.getElementById("tapPerSec").innerHTML = tapPerSec;
      level = "4. Professional";
      document.getElementById("level").innerHTML = level;
    } else {
      tapPerSec = 5;
      document.getElementById("tapPerSec").innerHTML = tapPerSec;
      level = "5. Grand Master";
      document.getElementById("level").innerHTML = level;
    }
    earnPerHour = earnPerHour - tapPerSec;
    balance = balance + tapPerSec;
    document.getElementById("tapBalance").innerHTML = balance;
    document.getElementById("earnPerHour").innerHTML = earnPerHour;
  } else {
    return;
  }
}
