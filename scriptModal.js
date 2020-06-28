const modalOverlay = document.querySelector(".modal_overlay");
const modal = document.querySelector(".modal");
const cards = document.querySelectorAll(".card");

for (let card of cards) {
    const courseId = card.id;

    card.addEventListener("click", () => {
        modalOverlay.classList.add("active");
        modalOverlay.querySelector("iframe").src = (`https://rocketseat.com.br/${courseId}`);
    })
}

document.querySelector(".close_modal").addEventListener("click", () => {
    modalOverlay.classList.remove("active");
    modalOverlay.querySelector("iframe").src = "";
    modal.classList.remove("maximized");
})

document.querySelector(".maximize_modal").addEventListener("click", () => {
    if (modal.classList.contains("maximized")) {
        modal.classList.remove("maximized");
    } else {
        modal.classList.add("maximized");
    }
})