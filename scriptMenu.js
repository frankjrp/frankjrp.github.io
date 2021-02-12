const options = document.querySelectorAll("header nav ul li.options")

for (let i = 0; i < options.length; i++) {

    options[i].querySelector("span").addEventListener("click", () => {
        options[i].classList.toggle("open");

    })

}