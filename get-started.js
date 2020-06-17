function onClick() {
  if (inputsAreEmpty()) {
    label.textContent = 'Erro: Um ou ambos os campos estão vazios!';
    return;
  }
  updateLabel();
}

function inputsAreEmpty() {
  if (getNumber1() === '' || getNumber2() === '') {
    return true;
  } else {
    return false;
  }
}

function updateLabel() {
  var addend1 = getNumber1();
  var addend2 = getNumber2();
  var sum = parseInt(addend1) + parseInt(addend2);
  label.textContent = addend1 + ' + ' + addend2 + ' = ' + sum;
}

function getNumber1() {
  return input1.value;
}

function getNumber2() {
  return input2.value;
}

var input1 = document.querySelector('input[id=num1]');
var input2 = document.querySelector('input[id=num2]');
var label = document.querySelector('p');
var button = document.querySelector('button');

button.addEventListener('click', onClick);

input1.addEventListener('keyup', function(event){
  if (event.keyCode === 13) {
    event.preventDefault();
    input2.focus();
    input2.value="";
    label.textContent = "";
   }
})

input2.addEventListener('keyup', function(event){
  if (event.keyCode === 13) {
    event.preventDefault();
    onClick();
   }
})