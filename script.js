// ===============================
// LOVE WEBSITE - SCRIPT.JS
// ===============================

function hideAllScreens() {
  document.querySelectorAll(".screen").forEach(screen => {
    screen.classList.add("hidden");
  });
}

// OPENING
function openEmail() {
  const helloText = document.getElementById("helloText");
  const tapText = document.getElementById("tapText");

  if (helloText) {
    helloText.classList.remove("hidden");
    helloText.textContent = "Hello Bblabs 💌";
  }

  if (tapText) {
    tapText.textContent = "Tap again 💕";
  }

  setTimeout(() => {
    hideAllScreens();
    document.getElementById("question").classList.remove("hidden");
  }, 1200);
}

// QUESTION - NO
function answerNo() {
  const noMessage = document.getElementById("noMessage");

  if (noMessage) {
    noMessage.textContent =
      "Hala 😭 sure ka ba? Try mo ulit ❤️";
  }
}

// QUESTION - YES
function answerYes() {
  hideAllScreens();
  document.getElementById("nameScreen").classList.remove("hidden");
}

// NAME
function showLetter() {
  const nameInput = document.getElementById("specialName");
  const name = nameInput ? nameInput.value.trim() : "";

  if (name === "") {
    alert("Please enter the name first ❤️");
    return;
  }

  hideAllScreens();
  document.getElementById("letter").classList.remove("hidden");
}

// LETTER → MEMORY
function startMemory() {
  hideAllScreens();

  const memory = document.getElementById("memory");
  memory.classList.remove("hidden");

  let count = 10;
  const countdown = document.getElementById("countdown");

  countdown.textContent = count;

  const timer = setInterval(() => {
    count--;
    countdown.textContent = count;

    if (count <= 0) {
      clearInterval(timer);

      hideAllScreens();
      document.getElementById("final").classList.remove("hidden");
    }
  }, 1000);
}

// START
document.addEventListener("DOMContentLoaded", () => {
  hideAllScreens();

  const opening = document.getElementById("opening");

  if (opening) {
    opening.classList.remove("hidden");
  }
});
