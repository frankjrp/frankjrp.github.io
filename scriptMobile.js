const menuMobile = document.getElementById("checkbox-menu")
const links = document.querySelectorAll("header nav ul li a")
const menu = document.querySelector("header nav .menu")
const container = document.querySelector(".container")
const body = document.querySelector("body")
const navbar = document.querySelector("header nav .navbar")
const footer = document.querySelector("footer .footer-container")

document.querySelector(".menu_mobile label").addEventListener("click", () => {

    if (menuMobile.checked) {
        const savedScrollPosition = localStorage.getItem('scrollPosition')

        body.classList.remove("hidden")
        container.classList.remove("fixed")
        footer.classList.remove("hide")
        menu ? menu.classList.remove("active") : null
        navbar.classList.remove("active")

        window.scrollTo({
            top: savedScrollPosition,
            behavior: "auto"
        })

    } else {
        const scrollPos = window.scrollY
        localStorage.setItem('scrollPosition', scrollPos)

        body.classList.add("hidden")
        container.classList.add("fixed")
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