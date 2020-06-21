function onClick() {
  if (input1.value == "") {
    label.textContent = 'Preencha o campo "Número 1"';
    input1.focus();
    return;
  } else if (input2.value == "") {
    label.textContent = 'Preencha o campo "Número 2"';
    input2.focus();
    return;
  } else {
    showMessage();
    updateLabel();
  }
}

function showMessage() {
  console.log("Testando uma mensagem. Soma: " + sumNumbers());

}

function updateLabel() {
  label.textContent = getNumber1() + ' + ' + getNumber2() + ' = ' + sumNumbers();

  input1.value = "";
  input2.value = "";
  input1.focus();
}

function getNumber1() {
  return parseInt(input1.value);
}

function getNumber2() {
  return parseInt(input2.value);
}

function sumNumbers() {
  return getNumber1() + getNumber2();
}

const input1 = document.querySelector('input[id=num1]');
const input2 = document.querySelector('input[id=num2]');
const label = document.querySelector('p');
const button = document.querySelector('button');

button.addEventListener('click', onClick);

input1.addEventListener('keyup', function (event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    input2.focus();
    label.textContent = "";
  }
})

input2.addEventListener('keyup', function (event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    onClick();
  }
})