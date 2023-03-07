const burgerBtn = document.querySelector(".header__bars i");
const headerNav = document.querySelector(".header__nav");

const onClickBurgerBtn = (e) => {
  headerNav.classList.toggle("active");
};

burgerBtn.addEventListener("click", onClickBurgerBtn);

let slider = tns({
  container: ".socials__wrapper",
  mouseDrag: true,
  items: 1,
  gutter: 20,
  controlsText: [
    '<i class="fa-solid fa-chevron-left"></i>',
    '<i class="fa-solid fa-chevron-right"></i>',
  ],
  slideBy: "page",
  autoPlay: false,
  axis: "horizontal",
  responsive: {
    1020: {
      items: 3,
    },
  },
});
