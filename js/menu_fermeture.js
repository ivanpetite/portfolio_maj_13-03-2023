{$('.scrollTo').on('click', function() {
        var page = $(this).attr('href');
        var speed = 750;
        $('html, body').animate( { scrollTop: $(page).offset().top }, speed ); // Go
        return false;});
        };
      {
      const toggle = document.querySelector('#menu')
      const visible = document.querySelector('#collapse')

      toggle.addEventListener('click',()=>{
        visible.classList.toggle('collapse')
      })
      const lm = document.querySelector('#lm')
      const le1 = document.querySelector('#le1')
      const tlc = document.querySelector('#tlc')
      const le2 = document.querySelector('#le2')
      const wrap1 = document.querySelector('#wrap1')
      const wrap2 = document.querySelector('#wrap2')
      const wrap3 = document.querySelector('#wrap3')
      const wrap4 = document.querySelector('#wrap4')
      const mnu = document.querySelector('#menu')

      mnu.addEventListener('click',()=>{
      lm.classList.toggle('load_main');
      le1.classList.toggle('loader_element1');
      tlc.classList.toggle('texte_loader_center');
      le2.classList.toggle('loader_element2');
      wrap1.classList.toggle('wrap1');
      wrap2.classList.toggle('wrap2');
      wrap3.classList.toggle('wrap3');
      wrap4.classList.toggle('wrap4');
      })
    };

{$(".hide_menu").on('click', function(){$("#menu").trigger("click")})}
 
const lm2 = document.querySelector('.lm2')
const le3 = document.querySelector('.le3')
const tlc2 = document.querySelector('.tlc2')
const le4 = document.querySelector('.le4')
const wrapr1 = document.querySelector('.wrapr1')
const wrapr2 = document.querySelector('.wrapr2')
const wrapr3 = document.querySelector('.wrapr3')
const wrapr4 = document.querySelector('.wrapr4')
const mnu2 = document.querySelector('#menu')
mnu2.addEventListener('click',()=>{
lm2.classList.toggle('rload_main');
le3.classList.toggle('rloader_element1');
tlc2.classList.toggle('rtexte_loader_center');
le4.classList.toggle('rloader_element2');
wrapr1.classList.toggle('rwrap1');
wrapr2.classList.toggle('rwrap2');
wrapr3.classList.toggle('rwrap3');
wrapr4.classList.toggle('rwrap4');
})

