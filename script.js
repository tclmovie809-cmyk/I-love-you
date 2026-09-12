function hideAll() {
  document.querySelectorAll(".screen").forEach(screen => {
    screen.classList.add("hidden");
  });
}

function showScreen(id) {
  hideAll();
  document.getElementById(id).classList.remove("hidden");
}


// EMAIL
function openEmail() {
  const hello = document.getElementById("helloText");
  const tap = document.getElementById("tapText");

  tap.classList.add("hidden");
  hello.classList.remove("hidden");

  setTimeout(() => {
    hello.style.cursor = "pointer";

    hello.onclick = () => {
      showScreen("question");
    };
  }, 800);
}


// NO
function answerNo() {
  const message = document.getElementById("noMessage");

  message.textContent = "Hindi ka maaaring makapasok. 💔";

  setTimeout(() => {
    message.textContent =
      "Pero baka gusto mong subukan ang YES... 😉❤️";
  }, 1800);
}


// YES
function answerYes() {
  showScreen("nameScreen");

  setTimeout(() => {
    document.getElementById("specialName").focus();
  }, 300);
}


// NAME
function showLetter() {
  const name = document.getElementById("specialName").value.trim();

  if (name === "") {
    alert("Please enter the name of your special someone. ❤️");
    return;
  }

  document.getElementById("
