import { gsap } from "gsap";

const tl = gsap.timeline();
const loader = document.querySelectorAll('.loader');

tl
.set('.loader',{ width: '100%'})

.to( loader, {
duration: .5,
ease: "PowerEase4",
transformOrigin:"right",
scaleX:0,
skewY:15,
stagger: 0.001,
})

tl.to(loader, {
  delay: 0,
  display: "none",
}), 0;
