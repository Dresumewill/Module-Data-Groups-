let timerId = null

function setAlarm() {
  const input = document.getElementById("alarmSet");
  const heading = document.getElementById("timeRemaining");

  let totalSeconds = Number(input.value);

  // Clear any existing timer
  if (timerId) {
    clearInterval(timerId);
  }
}

function updateDisplay(seconds) {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;

  const mm = String(minutes).padStart(2, "0");
  const ss = String(remainingSeconds).padStart(2, "0");

  heading.innerText = 'Time Remaining: ${mm:${ss}';
}

// Initial display
updateDisplay(totalSeconds);

timeId = setInterval(() => {
  totalSeconds--;

  updateDisplay(totalSeconds);
  if (totalSeconds <= 0) {
    clearInterval(timerId);
    playAlarm();
  }
}, 1000);

// DO NOT EDIT BELOW HERE

var audio = new Audio("alarmsound.mp3");

function setup() {
  document.getElementById("set").addEventListener("click", () => {
    setAlarm();
  });

  document.getElementById("stop").addEventListener("click", () => {
    pauseAlarm();
  });
}

function playAlarm() {
  audio.play();
}

function pauseAlarm() {
  audio.pause();
}

window.onload = setup;
