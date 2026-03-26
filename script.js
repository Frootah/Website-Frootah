/* ONLINE/OFFLINE STATUS */
const statusDot = document.getElementById("statusDot");
const statusText = document.getElementById("statusText");

function updateStatus() {
  if (navigator.onLine) {
    statusDot.style.background = "#1db954";
    statusText.textContent = "Online";
  } else {
    statusDot.style.background = "red";
    statusText.textContent = "Offline";
  }
}

window.addEventListener("online", updateStatus);
window.addEventListener("offline", updateStatus);
updateStatus();

