document.getElementById("menu-icon").addEventListener("click", function () {
    const navbar = document.getElementById("navbar").querySelector("ul");
    navbar.classList.toggle("show");

    // Toggle between hamburger and close icon
    const icon = this.querySelector("i");
    icon.classList.toggle("bx-menu");
    icon.classList.toggle("bx-x");
});

const year = document.getElementById("year");
const thisYear = new Date().getFullYear();
year.setAttribute("datetime", thisYear);
year.textContent = thisYear;