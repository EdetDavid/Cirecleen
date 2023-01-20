// hide hero section
const toggle = document.getElementById("toggler");
const hero = document.getElementById("hide__hero");

toggle.addEventListener("click", function () {
  if (hero.style.display !== "none") {
    hero.style.display = "none";
  } else {
    hero.style.display = "block";
  }
});

// coloured nav
var myNav = document.getElementById("mynav");
window.onscroll = function () {
  if (
    document.body.scrollTop >= 200 ||
    document.documentElement.scrollTop >= 100
  ) {
    myNav.classList.add("nav-colored");
    myNav.classList.remove("nav-transparent");
  } else {
    myNav.classList.add("nav-transparent");
    myNav.classList.remove("nav-colored");
  }
};
