let input = document.getElementById('input');

const isANumber = c => {
  if (c >= 0 && c <= 9) {
    return true;
  }
  return false;
};

const isAChar = c => {
    if(c == '+' || c == '-' || c == '*' || c == '/' || c == '.') {
        return true;
    }
    return false;
}

const canInsert = v => {
  if (isANumber(v)) {
    return true; 
  } else if(isAChar(v) && input.value.trim() != '' && isANumber(input.value[input.value.length - 1])) {
    return true;
  } 
  return false;
};

const addButton = (id, v = -1) => {
  v = v == -1 ? id : v;
  document.getElementById(id).addEventListener('click', () => {
    if (canInsert(v)) {
      input.value += v;
    }
  });
};

document.getElementById('E').addEventListener('click', () => {
  input.value = eval(input.value);
});

document.getElementById('C').addEventListener('click', () => {
  input.value = input.value.substr(0, input.value.length - 1);
});

document.getElementById('CA').addEventListener('click', () => {
  input.value = '';
});

addButton('1');
addButton('2');
addButton('3');
addButton('4');
addButton('5');
addButton('6');
addButton('7');
addButton('8');
addButton('9');
addButton('.');
addButton('I', '/');
addButton('O', '*');
addButton('M', '-');
addButton('P', '+');
addButton('Z', '0');
