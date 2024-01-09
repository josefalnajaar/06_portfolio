document.addEventListener("DOMContentLoaded", function () {
  let burgerIcon = document.getElementById("burger-icon");
  let closeIcon = document.getElementById("close-icon");
  let navMenu = document.querySelector("nav");

  burgerIcon.addEventListener("click", toggleMenu);
  closeIcon.addEventListener("click", toggleMenu);
  window.addEventListener("resize", resetIconsOnResize);

  function toggleMenu() {
    navMenu.classList.toggle("active");

    if (burgerIcon.style.display === "none") {
      burgerIcon.style.display = "block";
      closeIcon.style.display = "none";
    } else {
      burgerIcon.style.display = "none";
      closeIcon.style.display = "block";
    }
  }

  function resetIconsOnResize() {
    if (window.innerWidth > 770) {
      burgerIcon.style.display = "none";
      closeIcon.style.display = "none";
    } else {
      burgerIcon.style.display = "block";
      closeIcon.style.display = "none";
    }
  }
});
