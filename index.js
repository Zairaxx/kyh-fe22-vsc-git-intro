let myName = "Kim";

function greet(namn) {
  alert("Hello, " + namn + "! Welcome to my site!");
}
let isDarkMode = false;

function darkMode() {
  if (isDarkMode === false) {
    document.querySelector("body").style.background = "#000";
    document.querySelector("h2").style.color = "#fff";
    document.querySelector("h3").style.color = "#fff";

    document.querySelector("#btn").innerText = "Light mode";
    isDarkMode = true;
  } else {
    document.querySelector("body").style.background = "#aaa";
    document.querySelector("h2").style.color = "#000";
    document.querySelector("h3").style.color = "#000";
    document.querySelector("#btn").innerText = "Dark mode";
    isDarkMode = false;
  }
}
