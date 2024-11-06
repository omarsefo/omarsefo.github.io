document.getElementById("ef").addEventListener("click", () => {
  document.execCommand("copy");
  const message = document.querySelector("small");
  message.textContent = "(The Number was Copied)";
  setTimeout(() => (message.textContent = "(Click To Copy & Call)"), 3000);
});
