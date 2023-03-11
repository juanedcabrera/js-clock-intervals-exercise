// Get the items from HTML
const secondHand = document.querySelector("#second");
const minuteHand = document.querySelector("#minute");
const hourHand = document.querySelector("#hour");

// second rotation
function secondRotation(seconds) {
  return (seconds / 60) * 360;
}

// minute rotation
function minuteRotation(minutes) {
  return (minutes / 60) * 360;
}

// hour rotation
function hourRotation(hours) {
  return (hours / 12) * 360;
}

// // set time
function updateClock() {
  const now = new Date();
  const seconds = now.getSeconds();
  const minutes = now.getMinutes();
  const hours = now.getHours() % 12;

  // update clock

  // Set CSS transform property for each hand
  secondHand.style.transform = "rotate(" + secondRotation(seconds) + "deg)";
  minuteHand.style.transform = "rotate(" + minuteRotation(minutes) + "deg)";
  hourHand.style.transform = "rotate(" + hourRotation(hours) + "deg)";
}

// Call updateClock function every second
setInterval(updateClock, 1000);
