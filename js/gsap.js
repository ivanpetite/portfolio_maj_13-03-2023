import Cursor from "./cursor";
import { gsap } from "gsap";
import LocomotiveScroll from 'locomotive-scroll';
import { ScrollTrigger } from "gsap/ScrollTrigger.js";
gsap.registerPlugin(ScrollTrigger);

window.onload = () => {const cursor = new Cursor(document.querySelector(".cursor"))};

var tl = gsap.timeline({defaults:{duration:1, opacity:3}});

tl.from(".banniere", {
                      opacity: 0.5,
                      duration:0.5,
                      ease: "Power4.easeIn",
                      delay:0.2,
})

tl.from(".audio-container", {
  opacity: 0,
  duration: 1,
  ease: "Power4.easeIn",
}), "<.3"

tl.from(".menu_main2",{ y : - 10,
                        opacity:0,
                        duration: .5,
                        ease: "Power3.easeOut"}, "+=0.2"
                        )

tl.from(".sticky_main",{opacity:0,
                        duration: .4,
                        ease: "Power3.easeOut"}, "-=0.3"
                        )

                        tl.from("#Menu",{ y : - 10,
                          opacity:0,
                          duration: .5,
                          ease: "Power3.easeOut"}, "-=0.5"
                          )

tl.from(".mainbutton",{ 
y : 20,
opacity:0,
duration: .5,
ease: "Power3.easeOut"}, "2" )

const scroller = document.querySelector('[data-scroll-container]')

const locoScroll = new LocomotiveScroll({
  el: scroller,
  smooth: true,
  direction: "vertical",
  multiplier: 1,
  firefoxMultiplier: 50,
  touchMultiplier: 2,

  smartphone: {
    smooth: true,
    direction: "vertical",
    gestureDirection: "vertical",
    touchMultiplier: 10,

  },
  tablet: {
    smooth: true,
    direction: "vertical",
    gestureDirection: "vertical",
  }
});

locoScroll.on("scroll", ScrollTrigger.update);

ScrollTrigger.scrollerProxy(scroller, {

      scrollLeft(value) {
        return arguments.length
          ? locoScroll.scrollTo(value, 0, 0)
          : locoScroll.scroll.instance.scroll.x;
      },
      getBoundingClientRect() {
        return {
          left: 0,
          top: 0,
          width: window.innerWidth,
          height: window.innerHeight
        };
      },
      pinType: scroller.style.transform ? "transform" : "fixed"
    });
    
    ScrollTrigger.defaults({
      scroller: scroller
    })

    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
    ScrollTrigger.refresh();

// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the ".data-scroll-container" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("[data-scroll-container]", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  }
});

// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();

const anchorw = document.querySelector('.anchor-w');
const work = document.querySelector('.worksto');

const anchorr = document.querySelector('.anchor-r');
const reel = document.querySelector('.reelto');

const anchors = document.querySelector('.anchor-s');
const social = document.querySelector('.socialto');

const anchora = document.querySelector('.anchor-a');
const about = document.querySelector('.aboutto');

const anchorb = document.querySelector('.anchor-b');

const anchorw2 = document.querySelector('.anchor-w2');
const anchorr2 = document.querySelector('.anchor-r2');
const anchors2 = document.querySelector('.anchor-s2');
const anchora2 = document.querySelector('.anchor-a2');

$(anchorw).on('click', function (){
  locoScroll.scrollTo(work)});    

  $(anchorr).on('click', function (){
    locoScroll.scrollTo(reel)});        
    
    $(anchors).on('click', function (){
      locoScroll.scrollTo(social)});        
  
      $(anchora).on('click', function (){
        locoScroll.scrollTo(about)});       
        
        $(anchorb).on('click', function (){
          locoScroll.scrollTo(about)});      

$(anchorw2).on('click', function (){
  locoScroll.scrollTo(work)});     
  
  $(anchorr2).on('click', function (){
    locoScroll.scrollTo(reel)});      

    $(anchors2).on('click', function (){
      locoScroll.scrollTo(social)});      

      $(anchora2).on('click', function (){
        locoScroll.scrollTo(about)});
