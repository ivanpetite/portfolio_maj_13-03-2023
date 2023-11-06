// selecting the element
let button = document.querySelector('#btn_close');
let container = document.querySelector('#main_share');

let contact1 = document.querySelector('.contact');
let contact2 = document.querySelector('.contact_2');

// Add class to the element
button.addEventListener('click', function() {
  container.classList.add('is_not_displayed');
});