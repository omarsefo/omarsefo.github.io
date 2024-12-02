const modal = document.getElementById("myModal");
const alart = document.getElementById("alart");
function displayModal(message, icon) {
  modal.style.display = "block";
  updateModalMessage(message);
  alart.setAttribute("name", icon);
}
// modal message
const modalMessage = document.getElementById("modalMessage");
function updateModalMessage(message) {
  modalMessage.textContent = message;
}
const closeBtn = document.querySelector(".closea");
closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});
window.addEventListener("click", (event) => {
  if (event.target === modal) {
    modal.style.display = "none";
  }
});
