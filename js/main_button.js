const line = document.querySelector('.declenche_arrow')
const arrow = document.querySelector('.arrow')

line.addEventListener('mouseenter',()=>{
arrow.classList.add('anim_arrow')
});

const line2 = document.querySelector('.declenche_arrow')
const arrow2 = document.querySelector('.arrow')

line2.addEventListener('mouseleave',()=>{
arrow2.classList.remove('anim_arrow')});
