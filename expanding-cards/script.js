/**
 * user story: when a user clicks on a card,
 * the card should expand (other cards should collapse)
 */

const panels = document.querySelectorAll('.panel');

panels.forEach(panel => {
  panel.addEventListener('click', () => {
    removeActiveClasses();
    panel.classList.add('active');
  })
})

const removeActiveClasses = () => {
  panels.forEach(panel => {
    panel.classList.remove('active');
  })
}