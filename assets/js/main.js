const btnMobileMenu = document.getElementById("btn-menu");
const mobileMenu = document.getElementById("nav-menu-list");
/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll(".nav-menu-list a");

function linkAction() {
  const navMenu = document.getElementById("nav-menu-list");
  // When we click on each nav__link, we remove the show-menu class
  navMenu.classList.remove("show-menu");
  btnMobileMenu.classList.remove("rotate-90");
}

navLink.forEach((n) => n.addEventListener("click", linkAction));

/*=============== MOBILE MENU TOGGLE ===============*/

btnMobileMenu.addEventListener("click", () => {
  btnMobileMenu.classList.toggle("rotate-90");
  mobileMenu.classList.toggle("show-menu");
});

/* ACTIVE CLASS ADD */
const nav_links = mobileMenu.querySelectorAll(".nav-link");
let i = 0;
for (i; i < nav_links.length; i++) {
  nav_links[i].addEventListener("click", function () {
    let current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}
