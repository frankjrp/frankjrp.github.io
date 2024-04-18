const questions = document.querySelectorAll(".question")
const btns = document.querySelectorAll(".question h2")

function handleQuestions(parent) {
    const content = parent.querySelector(".height")

    if (parent.classList.contains("open")) {
        parent.classList.remove("open")
        content.style.maxHeight = null
    } else {
        questions.forEach(question => {
            if (question.classList.contains("open")) {
                question.classList.remove("open")
                question.querySelector(".height").style.maxHeight = null
            }
        })

        parent.classList.add("open")
        content.style.maxHeight = content.scrollHeight + "px"
    }
}

btns.forEach(btn => {
    btn.addEventListener("click", (e) => {
        const parent = e.target.parentNode

        handleQuestions(parent)
    })
})
