const menuMobile = document.getElementById("checkbox-menu")
const links = document.querySelectorAll("header nav ul li a")
const menu = document.querySelector("header nav .menu")
const navbar = document.querySelector("header nav .navbar")
const footer = document.querySelector("footer .footer-container")

document.querySelector(".menu_mobile label").addEventListener("click", () => {

    if (menuMobile.checked) {
        footer.classList.remove("hide")
        menu ? menu.classList.remove("active") : null
        navbar.classList.remove("active")
    } else {
        footer.classList.add("hide")
        menu ? menu.classList.add("active") : null
        navbar.classList.add("active")
    }
})

links.forEach((link) => {
    link.addEventListener("click", () => {
        menuMobile.checked = false;
        navbar.classList.remove("active")
    })
})