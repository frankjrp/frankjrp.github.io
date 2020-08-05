const questions = document.querySelectorAll(".question")

for (let i = 0; i < questions.length; i++) {

    questions[i].querySelector("h2").addEventListener("click", () => {
        questions[i].classList.toggle("open");

    })

}