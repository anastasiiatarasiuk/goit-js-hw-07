function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const changeColorBtn = document.querySelector('.change-color');
changeColorBtn.addEventListener('click', clickButton);

function clickButton() {
  const widget = document.querySelector('.widget');
  const spanText = document.querySelector('.color');
  const randomColor = getRandomHexColor();
  widget.style.backgroundColor = randomColor;
  spanText.textContent = randomColor;
}
