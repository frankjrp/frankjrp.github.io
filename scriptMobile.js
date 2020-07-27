const menuMobile = document.getElementById("checkbox-menu")
const links = document.querySelectorAll(".mobile_links a")

document.querySelector(".menu_mobile label").addEventListener("click", () => {

    if (menuMobile.checked) {
        document.querySelector(".mobile").classList.remove("active");
        document.querySelector(".description").classList.remove("active");
    } else {
        document.querySelector(".mobile").classList.add("active");
        document.querySelector(".description").classList.add("active");
    }
})

for (let link of links) {
    link.addEventListener("click", () => {
        menuMobile.checked = false;
    })
}