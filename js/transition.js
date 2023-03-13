import { gsap } from "gsap";

const svg = document.querySelector('.svg');
const svg2 = document.querySelector('.svg2');

const tl = gsap.timeline();
const curve = "M 0 250 S 200 10 500 10 S 1000 250 1000 250 V 0 H 0 Z";
const flat = "M 0 1400 S 200 1200 500 1200 S 1000 1400 1000 1400 V -500 H 0 Z";
const loader = document.querySelectorAll('.loader');

tl.to(loader, {
  y: -30,
}),0;

tl.fromTo(svg2, 
  {attr: { d: flat }},
  {attr: { d: curve },
  ease: "Expo.easeInOut",
  duration: 2},"-=0.5"
)

tl.fromTo(svg, 
  {attr: { d: flat }},
  {attr: { d: curve },
  ease: "Expo.easeInOut",
  duration: 2,}, "-=2.003"
)

tl.to(loader, {
  zIndex: -1,
  delay: 0,
  display: "none",
});
