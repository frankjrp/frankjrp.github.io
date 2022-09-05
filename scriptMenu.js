const options = document.querySelectorAll("header nav ul li.options")

options.forEach((option) => {
    option.querySelector("span").addEventListener("click", () => {
        option.classList.toggle("open");

        const itens = document.querySelectorAll("header nav ul li:not(.open):not(.options ul li)")

        option.classList.contains("open") ?
            (
                itens.forEach((item) => {
                    item.classList.add("hide")

                })
            )
            :
            (
                itens.forEach((item) => {
                    item.classList.remove("hide")

                })
            )

    })
})