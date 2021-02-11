const options = document.querySelectorAll("header nav ul li.options")

for (let i = 0; i < options.length; i++) {

    options[i].querySelector("span").addEventListener("click", () => {
        options[i].classList.toggle("open");

    })

    options[i].querySelector("span").addEventListener("mouseenter", () => {
        options[i].classList.add("open");

    })

    options[i].querySelector("ul.options").addEventListener("mouseleave", () => {
        options[i].classList.remove("open");

    })

}