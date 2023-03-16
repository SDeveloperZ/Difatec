/*submenu */
const subSubMenu = document.querySelector(".sub-menu2");
const subMenuLink = document.querySelector(".open-sub-submenu a");

subMenuLink.addEventListener("click", function(event) {
  event.preventDefault();
  subSubMenu.style.display = "block";
});

subSubMenu.addEventListener("mouseout", function(event) {
  if (!subSubMenu.contains(event.relatedTarget)) {
    subSubMenu.style.display = "none";
  }
});

/*carrusel*/
const slides = document.querySelectorAll(".slide");
let index = 0;

function showSlides() {
  slides.forEach(slide => {
    slide.style.display = "none";
  });
  slides[index].style.display = "flex";
  index++;
  if (index >= slides.length) {
    index = 0;
  }
  setTimeout(showSlides, 4000);
}

showSlides();

const fila = document.querySelector(".fila");
const scrollLeftBtn = document.querySelector(".scroll-left");
const scrollRightBtn = document.querySelector(".scroll-right");

scrollLeftBtn.addEventListener("click", () => {
  fila.scrollBy({
    left: -400,
    behavior: "smooth",
  });
});

scrollRightBtn.addEventListener("click", () => {
  fila.scrollBy({
    left: 400,
    behavior: "smooth",
  });
});
