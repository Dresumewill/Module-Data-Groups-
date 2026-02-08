const images = [
    "./assets/cute-cat-a.png",
    "./assets/cute-cat-b.jpg",
    "./assets/cute-cat-c.jpg",
];


// Write your code here
const img = document.getElementById("carousel-img");
const forwardBtn = document.getElementById("forward-btn");
const backwardBtn = document.getElementById("backward-btn");
const autoForwardBtn = document.getElementById("auto-forward");
const autoBackBtn = document.getElementById("auto-backward");
const stopBtn = document.getElementById("stop");
const delayInput = document.getElementById("delay-time");

let currentIndex = 0;
let timer = null;

function getDelay() {
    let seconds = parseInt(delayInput?.value);
    if (isNaN(seconds) || seconds < 1) seconds = 2;
    return seconds * 1000;
}

// --- Level 1: manual controls ---
function nextImage() {
    currentIndex++;
    if (currentIndex >= images.length) currentIndex = 0;
    img.src = images[currentIndex];
    return currentIndex; // useful for tests
}

function prevImage() {
    currentIndex--;
    if (currentIndex < 0) currentIndex = images.length - 1;
    img.src = images[currentIndex];
    return currentIndex;
}

forwardBtn.addEventListener("click", nextImage);
backwardBtn.addEventListener("click", prevImage);

function startAutoForward() {
    autoForwardBtn.disabled = true;
    autoBackBtn.disabled = true;

    timer = setInterval(nextImage, getDelay());
}

function startAutoBackward() {
    autoForwardBtn.disabled = true;
    autoBackBtn.disabled = true;

    timer = setInterval(prevImage, getDelay());
}

function stopAuto() {
    clearInterval(timer);
    timer = null;
    autoForwardBtn.disabled = false;
autoBackBtn.disabled = false;
}

if (autoForwardBtn) autoForwardBtn.addEventListener("click", startAutoForward);
if (autoBackBtn) autoBackBtn.addEventListener("click", startAutoBackward);
if (stopBtn) stopBtn.addEventListener("click", stopAuto);
if (delayInput) {
    delayInput.addEventListener("change", () => {
        if (timer) {
            stopAuto();
        }
    });
}