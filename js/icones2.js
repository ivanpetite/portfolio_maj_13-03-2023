// selecting the element
let button = document.querySelector('#btn_close');
let container = document.querySelector('#main_share');

let contact1 = document.querySelector('.contact');
let contact2 = document.querySelector('.contact_2');

// Add class to the element
button.addEventListener('click', function() {
  container.classList.add('is_not_displayed');
});

// Remove class to the element
contact1.addEventListener('click', function() {
  container.classList.remove('is_not_displayed')
    container.classList.remove('main_bg_share')
  container.classList.toggle('is_really_displayed')
  ;
});

// Remove class to the element
contact2.addEventListener('click', function() {
  container.classList.remove('is_not_displayed')
      container.classList.remove('main_bg_share')
  container.classList.toggle('is_really_displayed');
});