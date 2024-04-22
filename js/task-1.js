const categoriesList = document.querySelectorAll('li.item');
const listLength = categoriesList.length;

console.log(`Number of categories ${listLength}`);

categoriesList.forEach(element => {
  console.log(`Category: ${element.querySelector('h2').textContent}`);
  console.log(`Elements: ${element.getElementsByTagName('li').length}`);
});
