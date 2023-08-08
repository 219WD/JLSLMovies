

gsap.from(".logo", {duration: 1.5, opacity: 0, scale: 0.3, ease: "back"});
gsap.from(".nav-menu-item", {duration: 1, opacity: 0, scale: 0.3, y: -150});
gsap.from(".txt-header", {duration: 1.5, opacity: 0, scale: 0.3, ease: "back"});
gsap.from(".buttons", {duration: 1, opacity: 0, y: 150});




const toggle = document.querySelector(".toggle");
const navMenu = document.querySelector(".nav-menu");

toggle.addEventListener("click", () =>{
    navMenu.classList.toggle("nav-menu_visible");
})


const swiper = new Swiper(".swiper-hero", {
  // Optional parameters
  slidesPerView: "auto",
  spaceBetween: 5,
  slidesPerGroupAuto: true,

  direction: "horizontal",
  loop: true,

  autoplay: {
    delay: 5000,
    pauseOnMouseEnter: true,
    disableOnInteraction: false,
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
