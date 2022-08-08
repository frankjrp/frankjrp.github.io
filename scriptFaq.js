const questions = document.querySelectorAll(".question")

questions.forEach((question) => {
    question.querySelector("h2").addEventListener("click", () => {
        question.classList.toggle("open")

        let content = question.querySelector(".height")

        question.classList.contains("open") ?
            content.style.maxHeight = content.scrollHeight + "px"
            :
            content.style.maxHeight = null
    })
})