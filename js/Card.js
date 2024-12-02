// Configuration for card links
const cardLinks = {
  card6: "http://omarsefo.github.io/be-real/",
  card7: "http://omarsefo.github.io/icecream/",
  card8: "http://omarsefo.github.io/starbacks/",
};
// Function to handle card click event
function handleCardClick(event) {
  const cardId = event.currentTarget.id;
  const link = cardLinks[cardId];
  if (window.innerWidth >= 1300) {
    openLink(link);
  } else {
    displayModal(
      "Sorry, this page is not supported in mobile and small screens.",
      "alert-circle-outline"
    );
  }
}
// Attach click event to each card
Object.keys(cardLinks).forEach((cardId) => {
  document.getElementById(cardId).addEventListener("click", handleCardClick);
});
// Function to open link in a new window
function openLink(url) {
  window.open(url, "_blank");
}
