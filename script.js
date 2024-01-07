document.addEventListener("DOMContentLoaded", function () {
  let menuIkon = document.querySelector("#menu_ikon");
  let lukIkon = document.querySelector("#luk_ikon");
  let navMenu = document.querySelector(".nav_menu");

  menuIkon.addEventListener("mousedown", function () {
    navMenu.classList.toggle("active");
    menuIkon.style.display = "none";
    lukIkon.style.display = "block";
  });

  lukIkon.addEventListener("mousedown", function () {
    navMenu.classList.toggle("active");
    lukIkon.style.display = "none";
    menuIkon.style.display = "block";
  });
});
