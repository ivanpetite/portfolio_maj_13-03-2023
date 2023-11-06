const line = document.querySelector('.declenche_arrow')
const arrow = document.querySelector('.arrow')

line.addEventListener('mouseenter',()=>{
arrow.classList.add('anim_arrow')
});

const line2 = document.querySelector('.declenche_arrow')
const arrow2 = document.querySelector('.arrow')

line2.addEventListener('mouseleave',()=>{
arrow2.classList.remove('anim_arrow')
});

// pour la disparition de la fleche et apparition du go
const line3 = document.querySelector('.declenche_arrow')
const arrow3 = document.querySelector('#arrow2')

line3.addEventListener('mouseenter',()=>{
arrow3.classList.add('anim_arrow2')
});

const line4 = document.querySelector('.declenche_arrow')
const arrow4 = document.querySelector('#arrow3')

line4.addEventListener('mouseleave',()=>{
arrow4.classList.remove('anim_arrow2')
});

const line5 = document.querySelector('.declenche_arrow')
const arrow5 = document.querySelector('#arrow3')

line5.addEventListener('mouseenter',()=>{
arrow5.classList.add('anim_arrow3')
});

const line6 = document.querySelector('.declenche_arrow')
const arrow6 = document.querySelector('#arrow3')

line6.addEventListener('mouseleave',()=>{
arrow6.classList.remove('anim_arrow3')
});

// pour le trigger de l'audio au go

{$(".declenche_arrow").on('click', function(){$("#audio-visualiser").trigger("click")})};