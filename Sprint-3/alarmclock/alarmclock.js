let timerId = null;
let totalSeconds = 0;
let isPaused = false;

function setAlarm() {
  // Clear any existing timer before starting a new one
  clearInterval(timerId);
  document.body.classList.remove("alarm-flashing");

  let inputVal = document.getElementById("alarmSet").value;
  remainingTime = parseInt(inputVal);

  if (isNaN(remainingTime)) return;

  renderTime(remainingTime);
  startTimer();
}

function startTimer() {
  timerId = setInterval(() => {
    if (!isPaused) {
      remainingTime -= 1;
      renderTime(remainingTime);

      if (remainingTime <= 0) {
        clearInterval(timerId);
        playAlarm();
        // Trigger the flashing effect
        document.body.classList.add("alarm-flashing");
      }
    }
  }, 1000);
}

// New Pause Functionality
function togglePause() {
  isPaused = !isPaused;
  const pauseBtn = document.getElementById("pause"); // Assuming you add a pause button
  if (pauseBtn) {
    pauseBtn.innerText = isPaused ? "Resume" : "Pause";
  }
}

function renderTime(timeInSeconds) {
  const title = document.getElementById("timeRemaining");
  const minutes = Math.floor(timeInSeconds / 60);
  const seconds = timeInSeconds % 60;

  const mm = minutes.toString().padStart(2, "0");
  const ss = seconds.toString().padStart(2, "0");

  title.innerText = `Time Remaining: ${mm}:${ss}`;
}

// DO NOT EDIT BELOW HERE

var audio = new Audio("alarmsound.mp3");

function setup() {
  document.getElementById("set").addEventListener("click", () => {
    setAlarm();
  });

  document.getElementById("stop").addEventListener("click", () => {
    stopAlarm();
  });

  // Adding the event listener for pause
  const pauseBtn = document.getElementById("pause");
  if (pauseBtn) {
    pauseBtn.addEventListener("click", togglePause);
  }
}

function stopAlarm() {
  clearInterval(timerId);
  pauseAlarm();
  document.body.classList.remove("alarm-flashing")
}

function playAlarm() {
  audio.play();
}

function pauseAlarm() {
  audio.pause();
}

window.onload = setup;
