const menuToggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('nav');
  menuToggle.addEventListener('click', () => {
      if (nav.className != 'active') {nav.className = 'active';}
      else {nav.className = '';}
  });

var swiper = new Swiper('.swiper-container', {
  pagination: {
  el: '.swiper-pagination',
  clickable: true,
},
});

$(document).ready(function(){
  $('.slider-card').slick({
    arrows:false,
    slidesToShow:4,
    infinite:true,
    autoplay:true,
    pauseOnFocus:true,
    adaptiveHeight:true,
    pauseOnHover:true,
    swipe:true,
    TouchMove:true,
    responsive:[
      {
        breakpoint: 768,
        settings:{
            arrows:false,
          slidesToShow:2,
        }
      }, {
        breakpoint: 922,
        settings:{
          arrows:false,
          slidesToShow:3,
        }
      }, {
        breakpoint: 480,
        settings:{
          arrows:false,
          slidesToShow:1
        }
      }
    ]
  });
    });


    var swiper = new Swiper('.swiper', {
      pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    });
