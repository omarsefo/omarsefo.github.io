document.addEventListener("DOMContentLoaded", function () {
  const cards = document.querySelectorAll(".projects .countainer .card");

  cards.forEach((card) => {
    const loadingOverlay = card.querySelector(".loading-overlay");
    const image = card.querySelector("img");
    loadingOverlay.style.display = "flex"
    image.src = addRandomQueryParam(image.src);
    image.onload = function () {
      loadingOverlay.style.display = "none";
    };
    image.onerror = function () {
      loadingOverlay.style.display = "flex";
    };
  });

  function addRandomQueryParam(url) {
    const randomParam = "cache=" + Math.random().toString(36).substring(7);
    if (url.includes("?")) {
      return url + "&" + randomParam;
    } else {
      return url + "?" + randomParam;
    }
  }
});
