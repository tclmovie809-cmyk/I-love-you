// ===============================
// LOVE WEBSITE - SCRIPT.JS
// ===============================

function hideAllScreens() {
  document.querySelectorAll(".screen").forEach(screen => {
    screen.classList.add("hidden");
  });
}

// OPENING — tap email
function openEmail() {
  const helloText = document.getElementById("helloText");
  const tapText = document.getElementById("tapText");

  helloText.classList.remove("hidden");
  tapText.textContent = "Tap Hello Bblabs 💕";

  // Email disappears
  document.querySelector(".email-icon").style.display = "none";

  // Make Hello Bblabs clickable
  helloText.style.cursor = "pointer";
  helloText.onclick = () => {
    hideAllScreens();
    document.getElementById("question").classList.remove("hidden");
  };
}

// NO
function answerNo() {
  const noMessage = document.getElementById("noMessage");

  noMessage.textContent = "Hindi ka Maaring Makapasok 😭💔";
}

// YES
function answerYes() {
  hideAllScreens();
  document.getElementById("nameScreen").classList.remove("hidden");
}

// NAME
function showLetter() {
  const nameInput = document.getElementById("specialName");
  const name = nameInput.value.trim();

  if (name === "") {
    alert("Please enter the name first ❤️");
    return;
  }

  hideAllScreens();
  document.getElementById("letter").classList.remove("hidden");
}

// LETTER → IMAGE 1
function startMemory() {
  hideAllScreens();

  const memory = document.getElementById("memory");
  memory.classList.remove("hidden");

  let count = 10;
  const countdown = document.getElementById("countdown");

  countdown.textContent = count;

  // Play music if available
  const music = document.getElementById("loveSong");

  if (music) {
    music.currentTime = 0;
    music.play().catch(() => {});
  }

  const timer = setInterval(() => {
    count--;
    countdown.textContent = count;

    if (count <= 0) {
      clearInterval(timer);

      // Stop music
      if (music) {
        music.pause();
        music.currentTime = 0;
      }

      // Fade out image
      memory.style.opacity = "0";

      setTimeout(() => {
        hideAllScreens();

        const finalScreen = document.getElementById("final");
        finalScreen.classList.remove("hidden");
      }, 700);
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
