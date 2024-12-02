const nav = document.querySelector("nav");
const sections = document.querySelectorAll("section");
const indicator = document.querySelector("[data-indicator]");
const navLinks = document.querySelectorAll("[nav-a]");
var sc = document.querySelector(".scroll-up");

window.addEventListener("scroll", handleScroll);
function handleScroll() {
  nav.classList.toggle("sticky", window.scrollY > 24);
  //dark icon
  icon.classList.toggle("sticky", window.scrollY > 24);
  //button top
  sc.classList.toggle("act", window.scrollY > 500);
  onscroll();
}
function onscroll() {
  let scrollPosition = document.documentElement.scrollTop;
  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;
    const isCurrent =
      scrollPosition >= sectionTop - sectionHeight * 0.1 &&
      scrollPosition <= sectionTop + sectionHeight - sectionHeight * 0.1;
    if (isCurrent) {
      const currentId = section.dataset.page;
      removeAllActiveClasses();
      setActiveClass(currentId);
    }
  });
}
function setActiveClass(id) {
  document
    .querySelectorAll("[nav-a]")
    .forEach((el) => el.classList.remove("activ"));
  const selector = `ul li a[id="${id}"]`;
  document.querySelector(selector)?.classList.add("activ");

  const positions = { Home: 0, skills: 1, project: 2, contact: 3 };
  indicator.style.setProperty("--position", positions[id] || 0);
}
function removeAllActiveClasses() {
  document.querySelectorAll("[nav-a]").forEach((el) => {
    el.classList.remove("activ");
    indicator.style.setProperty("--position", null);
  });
}
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    for (let i = 0; i < sections.length; i++) {
      if (link.attributes.id.value === sections[i].dataset.page) {
        indicator.style.setProperty("--position", i);
        var sectionPos = sections[i].offsetTop;
        window.scroll({
          top: sectionPos,
        });
        onscroll();
      }
    }
  });
});
