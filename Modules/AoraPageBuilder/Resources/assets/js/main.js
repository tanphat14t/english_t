document.addEventListener("DOMContentLoaded", () => {
  collapsedHotline();
  openMenu();
  openPopupLogin();
});
function collapsedHotline() {
  const expandableItems = document.querySelectorAll(".social-item.has-expand");

  expandableItems.forEach((item) => {
    const expands = item.querySelector(".expands");
    const link = item.querySelector("a");

    if (link) {
      link.addEventListener("click", function (event) {
        event.stopPropagation();
      });
    }

    item.addEventListener("click", function () {
      expands.classList.toggle("show");
    });
  });
}

function openMenu() {
  const hambugerMenu = document.querySelector(".ic-hamburger");
  const overlay = document.querySelector(".overlay");
  const sidebar = document.querySelector(".sidebar");
  hambugerMenu.addEventListener("click", function () {
    sidebar.classList.toggle("is-open");
    overlay.classList.toggle("is-open");
    document.querySelector("body").classList.add("overflow-hidden");
  });
  overlay.addEventListener("click", function () {
    sidebar.classList.remove("is-open");
    overlay.classList.remove("is-open");
    document.querySelector("body").classList.remove("overflow-hidden");
  });
  // open menu-user
  const userIcon = document.querySelector(".action-button");
  const menuUser = document.querySelector(".user-menu");
  userIcon.addEventListener("click", function () {
    menuUser.classList.toggle("is-open");
  });
  document.addEventListener("click", function (event) {
    const isClickInsideMenu = menuUser.contains(event.target);
    const isClickOnIcon = userIcon.contains(event.target);

    if (!isClickInsideMenu && !isClickOnIcon) {
      menuUser.classList.remove("is-open");
    }
  });
}

function openPopupLogin() {
  const icAction = document.querySelector(".ic-action");
  const modalLoginEl = document.querySelector(".modal-login");
  const modalRegisterEl = document.querySelector(".modal-register");
  const btnLogin = document.querySelector("header .btn-login");
  const btnRegister = document.querySelector("header .btn-register");
  const modal = new bootstrap.Modal(modalLoginEl);
  const modalRegister = new bootstrap.Modal(modalRegisterEl);
  icAction.addEventListener("click", function (e) {
    e.preventDefault();
    modal.show();
  });
  btnLogin.addEventListener("click", function (e) {
    e.preventDefault();
    modal.show();
  });
  btnRegister.addEventListener("click", function (e) {
    e.preventDefault();
    modalRegister.show();
  });
}
