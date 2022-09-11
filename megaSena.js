const btn = document.querySelector(".btn-wrapper button")
const checkbox = document.querySelector(".checkbox input")

btn.addEventListener("click", () => {
    checkbox.checked ? getApostas() : clearAndGetApostas()
}, false)

function getApostas() {
    let volante = []

    const n = 5
    const p = 6

    for (let i = 0; i < n; i++) {

        volante.length = 0

        for (let j = 0; j < p; j++) {
            let num = getRandom(1, 60)

            while (volante.includes(num)) {
                num = getRandom(1, 60)
            }

            volante.push(num)
        }

        volante.sort(function (a, b) { return a - b })
        console.log(volante)

        addApostas(volante)
    }
}

function getRandom(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);

    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function addApostas(volante) {
    const div = document.createElement("div");
    div.className = "volante"

    volante.forEach((number) => {
        const span = document.createElement('span')
        const d = String(number).padStart(2, '0')
        span.textContent = d

        div.appendChild(span);
    })

    document.querySelector(".apostas").appendChild(div)
}

function clearAndGetApostas() {
    const volantes = document.querySelectorAll(".apostas .volante")

    volantes.forEach((volante) => {
        volante.remove()
    })

    getApostas()
}