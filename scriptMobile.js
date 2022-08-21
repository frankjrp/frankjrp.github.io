const menuMobile = document.getElementById("checkbox-menu")
const links = document.querySelectorAll("header nav ul li a")
const menu = document.querySelector("header nav .menu")

document.querySelector(".menu_mobile label").addEventListener("click", () => {

    if (menuMobile.checked) {
        document.querySelector("footer .footer-container").classList.remove("hide")
        menu ? menu.classList.remove("active") : null
        document.querySelector("header nav .navbar").classList.remove("active");
    } else {
        document.querySelector("footer .footer-container").classList.add("hide")
        menu ? menu.classList.add("active") : null
        document.querySelector("header nav .navbar").classList.add("active");
    }
})

for (let link of links) {
    link.addEventListener("click", () => {
        menuMobile.checked = false;
    })
}