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
    return inputs[0].value;
  }
  function getNumber2() {
    return inputs[1].value;
  }
  var inputs = document.querySelectorAll('input');
  var label = document.querySelector('p');
  var button = document.querySelector('button');
  button.addEventListener('click', onClick);