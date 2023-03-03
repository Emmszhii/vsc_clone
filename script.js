const burgerBtn = document.querySelector(".header__bars i");
const headerNav = document.querySelector(".header__nav");

const onClickBurgerBtn = (e) => {
  headerNav.classList.toggle("active");
};

burgerBtn.addEventListener("click", onClickBurgerBtn);
