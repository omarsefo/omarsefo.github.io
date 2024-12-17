const icon = document.getElementById("icondark");
const sun = document.getElementById("sun");
const moon = document.getElementById("moon");
function applyDarkMode(isEnabled) {
  document.body.classList.toggle("darkt", isEnabled);
  localStorage.setItem("darkMode", isEnabled ? "enabled" : "disabled");
  sun.style.transform = isEnabled ? "rotate(100deg) scale(0)" : "rotate(0deg) scale(1)";
  moon.style.transform = isEnabled ? "rotate(0deg) scale(1)" : "rotate(150deg) scale(0)";
}
function setInitialTheme() {
  const storedPreference = localStorage.getItem("darkMode");

  if (storedPreference) {
    applyDarkMode(storedPreference === "enabled");
  } else {
    const prefersDarkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;
    applyDarkMode(prefersDarkMode);
  }
}
icon.addEventListener("click", () => {
  const isDarkMode = document.body.classList.contains("darkt");
  applyDarkMode(!isDarkMode);
});

setInitialTheme();
