import { gsap } from "gsap";
const Item = document.querySelectorAll(".cat4")
const Menutxt = document.querySelectorAll(".menu-txt-overflow")
const background = document.querySelectorAll(".bg_anim")

var menu = gsap.timeline({
paused: "true" ,
reversed: "true",
});

menu
.set('.menu_main3',{ width: '100%'})
.set('.menu-txt-flex',{width : '40vw'} )

.from( background, {
duration: .5,
ease: "PowerEase3",
transformOrigin:"left",
scaleX:0,
skewY:15,
stagger:0.001,
})

.from( Menutxt, {
duration: 1,
ease: "easeInOut",
stagger:0.02,
x:-300,
autoAlpha: 0,
}, "-=.6")

.from( ".volet1, .volet2", {
duration: .5,
transformOrigin:"left bottom",
clipPath: 'inset(0% 100% 0% 0%)',
stagger:0.01,
}, "-=.5")

.from( Item, {
  autoAlpha: 0,
  duration: .4,
  y:10,
  skewY:3,
  stagger:0.1,
},"-=.5")

.from( ".volet2", {
  borderLeftWidth:0,
  borderRightWidth:0,
  duration:.3
  },"-=.4")

 .from( ".menu_main3", {
  autoAlpha: 0,
  duration:0,
  },0);

document.querySelector("#Menu").onclick = () => {menu.reversed() ? menu.play() : menu.reverse();};
{$(".hide_menu2").on('click', function(){$("#Menu").trigger("click")})};