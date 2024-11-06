const icon = document.getElementById("icondark");
const sun = document.getElementById("sun");
const moon = document.getElementById("moon");

// Toggle dark mode and update localStorage
function toggleDarkMode(isEnabled) {
  document.body.classList.toggle("darkt", isEnabled);
  localStorage.setItem("darkMode", isEnabled ? "enabled" : "disabled");
  sun.style.transform = isEnabled
    ? "rotate(100deg) scale(0)"
    : "rotate(0deg) scale(1)";
  moon.style.transform = isEnabled
    ? "rotate(0deg) scale(1)"
    : "rotate(150deg) scale(0)";
}

// Check initial state on load
const darkModeEnabled = localStorage.getItem("darkMode") === "enabled";
toggleDarkMode(darkModeEnabled);

// Toggle dark mode on icon click
icon.addEventListener("click", () => {
  const isEnabled = document.body.classList.contains("darkt");
  toggleDarkMode(!isEnabled);
});
