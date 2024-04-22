function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const createBtn = document.querySelector('[data-create]');
const destroyBtn = document.querySelector('[data-destroy]');
const inputElem = document.querySelector('#controls input');
const boxesElem = document.querySelector('#boxes');

createBtn.addEventListener('click', createBtnClick);
destroyBtn.addEventListener('click', destroyBtnClick);

function createBtnClick() {
  const value = inputElem.value;
  if (value <= 0 || value > 100) {
    return alert('Please enter a number between 1-100');
  }
  createBoxes(value);
  inputElem.value = '';
}

function createBoxes(amount) {
  const boxesContainer = document.querySelector('#boxes');
  const fragment = document.createDocumentFragment();

  let boxSize = 30;
  for (let i = 0; i < amount; i++) {
    const randomColor = getRandomHexColor();
    const box = document.createElement('div');
    box.style.backgroundColor = randomColor;
    box.style.width = `${boxSize}px`;
    box.style.height = `${boxSize}px`;
    fragment.appendChild(box);
    boxSize += 10;
  }

  boxesContainer.innerHTML = '';
  boxesContainer.appendChild(fragment);
}

function destroyBtnClick() {
  const boxesContainer = document.querySelector('#boxes');
  boxesContainer.innerHTML = '';
}
