//const circle = document.querySelector('.anim_cercle')
//
//$(circle).on('mouseenter', function(){circle2.reversed() ? circle2.play() : circle2.reverse();});
//$(circle).on('mouseleave', function(){circle3.reversed() ? circle3.play() : circle3.reverse();});
//
//var circle2 = gsap.timeline({
//      paused: "true" ,
//      reversed: "true",
//      });
//
//      circle2
//      .set(circle,{strokeDashoffset: "50"});
//
//      circle2    
//      .to( circle, {
//      duration: .5,
//      strokeDashoffset: "0",
//      ease: "PowerEase4",
//      });
//
//      var circle3 = gsap.timeline({
//            paused: "true" ,
//            reversed: "true",
//            });
//
//            circle3 
//            .set(circle,{strokeDashoffset: "0"});
//            
//            circle3   
//            .to( circle, {
//            duration: .5,
//            strokeDashoffset: "50",
//            ease: "PowerEase4",
//            });
//
//t(".circle");
//var i=t(".anim_circle");
////t(".circ-arrow"),TweenMax.set(i,{drawSVG:"0% 0%",transformOrigin:"50% 50%"}),
//gsap.fromto(".anim-circle",.75,{drawSVG:"0% 0%"},{drawSVG:"0% 100%",ease:Power3.easeInOut}),
//
////TweenMax.fromTo(t(this).find(".circ-arrow"),.375,{opacity:1,yPercent:0},{opacity:0,yPercent:-120,ease:Power3.easeIn}),
//gsap.fromto(".circ-arrow",.375,{opacity:0,yPercent:120},{delay:.375,opacity:1,yPercent:-0,ease:Power3.easeOut})
//      
//(function(){gsap.tl(".anim_circle",.375,{drawSVG:"100% 100%",ease:Power3.easeInOut})});