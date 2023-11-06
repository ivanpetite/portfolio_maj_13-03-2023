import { gsap } from "gsap";

const background = document.querySelectorAll(".bg_anim2")

var menu = gsap.timeline({
paused: "true" ,
reversed: "true",
});

menu
.set('.menu_main4',{ width: '100%'})

.from( background, {
duration: .3,
ease: "PowerEase4",
transformOrigin:"left",
scaleX:0,
skewY:15,
stagger:0.001,
})

 .from( ".menu_main4", {
  autoAlpha: 0,
  duration:0,
  },0);

document.querySelector("#trans1").onclick = () => {menu.reversed() ? menu.play() : menu.reverse();};
document.querySelector("#trans2").onclick = () => {menu.reversed() ? menu.play() : menu.reverse();};
document.querySelector("#trans3").onclick = () => {menu.reversed() ? menu.play() : menu.reverse();};