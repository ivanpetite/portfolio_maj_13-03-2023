import { gsap } from "gsap";
const background = document.querySelectorAll(".bg_anim2")

var menu2 = gsap.timeline({
paused: "true" ,
reversed: "true",
});

menu2
.set('.menu_main4',{ width: '100%'})

.from( background, {
duration: .4,
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

document.querySelector("#trans6").onclick = () => {menu2.reversed() ? menu2.play() : menu2.reverse();};
document.querySelector("#trans7").onclick = () => {menu2.reversed() ? menu2.play() : menu2.reverse();};