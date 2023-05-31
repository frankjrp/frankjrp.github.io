const btnGenerate = document.querySelector(".btn-wrapper button.generate")
const btnPrint = document.querySelector(".btn-wrapper button.print")
const checkbox = document.querySelector(".checkbox input")

btnGenerate.addEventListener("click", () => {
    checkbox.checked ? getApostas() : clearAndGetApostas()
}, false)

btnPrint.addEventListener("click", () => {
    printApostas()
}, false)

function getApostas() {
    let volante = []
    let array = []

    const n = 5
    const p = 6

    for (let i = 0; i < n; i++) {

        volante.length = 0
        array = [...Array(60).keys()].map(i => i + 1).sort(() => Math.random() - 0.5)

        for (let j = 0; j < p; j++) {
            let num = getRandom(array)

            volante.push(num)
        }

        volante.sort(compareNumbers)

        addApostas(volante)
    }
}

function getRandom(array) {
    const randomIndex = Math.floor(Math.random() * array.length);

    const item = array[randomIndex];

    array.splice(randomIndex, 1)

    array.sort(() => Math.random() - 0.5)

    return item    
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

function compareNumbers(a, b) {
    return a - b;
}

function printApostas() {
    // var divContents = document.querySelectorAll(".apostas .volante span");
    // let d = 0
    // var a = window.open();

    // a.document.write('<html>');
    // a.document.write('<body>');
    // a.document.write('<head>');

    // a.document.write('<h1>Combinações da Mega Sena</h1>');

    // a.document.write('<div>')

    // divContents.forEach((div) => {
    //     a.document.write(`<span style="border:1px solid;padding:8px;border-radius:50%">${div.textContent}</span>`)
    //     d++

    //     if (d === 6) {
    //         d = 0
    //         a.document.write("<br><br>")
    //     }
    // })

    // a.document.write('</div>')

    // a.document.write('</head></body></html>');
    // a.document.close();
    // a.print();

    window.print()
}