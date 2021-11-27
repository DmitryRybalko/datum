const toggleMenu = () => {
  const openMenu = document.querySelector(".btn-open");
  const closeMenu = document.querySelector(".btn-close");
  const mobileMenu = document.querySelector(".mobile");
  const modal = document.querySelector(".modal");
  const openModal = document.querySelector(".header__button");
  const closeModal = document.querySelector(".modal__btn");
  window.addEventListener("resize", () => {
    if (window.innerWidth >= "960") {
      mobileMenu.classList.remove("menu-opened");
      openMenu.classList.remove("btn-back");
      closeMenu.classList.remove("btn-front");
    }
  });
  openMenu.addEventListener("click", () => {
    openMenu.classList.toggle("btn-back");
    closeMenu.classList.toggle("btn-front");
    mobileMenu.classList.toggle("menu-opened");
  });
  closeMenu.addEventListener("click", () => {
    closeMenu.classList.toggle("btn-front");
    openMenu.classList.toggle("btn-back");
    mobileMenu.classList.toggle("menu-opened");
  });
  openModal.addEventListener("click", () => {
    modal.classList.toggle("modal-open");
  });
  closeModal.addEventListener("click", () => {
    modal.classList.remove("modal-open");
  });
  modal.addEventListener("click", (e) => {
    e.target === modal ? modal.classList.remove("modal-open") : "";
  });
};

toggleMenu();
