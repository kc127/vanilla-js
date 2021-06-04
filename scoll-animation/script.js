const boxes = document.querySelector('.box');

window.addEventListener('scroll', checkBoxes);

const checkBoxes = () => {
  console.log(window.innerHeight);
}