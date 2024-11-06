window.addEventListener("load", () => {
  setTimeout(() => {
    let val = window.scrollY;
    if (val > 0) {
      window.scrollTo(0, 0);
    }
  }, 20);
});

// scroll up
document.getElementById("scroll").addEventListener("click", () => {
  window.scrollTo(0, 0);
});

// Right Click disable
https: document.addEventListener("contextmenu", (event) =>
  event.preventDefault()
);

// Image
VanillaTilt.init(document.getElementById("img1"), {
  max: 10,
  speed: 100,
});

// dynamic date
document.getElementById("copyright-year").textContent =
  new Date().getFullYear();
