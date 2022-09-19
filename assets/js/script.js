$('.homesliderss').owlCarousel({
    smartSpeed:1000,
    loop:true,
    margin:0,
    nav:true,
    navText: ['<i class="fa-light fa-angle-left"></i>','<i class="fa-light fa-angle-right"></i>'],
    dots: false,
    responsive:{
        0:{
          nav:false,
          items:1
        },
        600:{
          nav:true,
          items:1
        },
        1000:{
          nav:true,
          items:1
        }
    }
})
$('.categoryslider').owlCarousel({
  smartSpeed:1000,
  loop:true,
  margin:0,
  nav:false,
  navText: ['<i class="fa-light fa-angle-left"></i>','<i class="fa-light fa-angle-right"></i>'],
  dots: false,
  responsive:{
      0:{
        nav:false,
        items:2
      },
      600:{
        nav:true,
        items:3
      },
      1000:{
        nav:true,
        items:5
      }
  }
})
$('.interior-body').owlCarousel({
  smartSpeed:500,
  loop:false,
  margin:30,
  nav:true,
  navText: ['<i class="fa-thin fa-left-long"></i>','<i class="fa-thin fa-right-long"></i>'],
  dots: false,
  responsive:{
      0:{
        // nav:true,
        items:2
      },
      600:{
        // nav:true,
        items:3
      },
      1000:{
        // nav:true,
        items:4
      }
  }
})
$('.brands').owlCarousel({
  smartSpeed:500,
  loop:false,
  margin:80,
  nav:false,
  navText: ['<i class="fa-thin fa-left-long"></i>','<i class="fa-thin fa-right-long"></i>'],
  dots: false,
  responsive:{
      0:{
        // nav:true,
        items:3
      },
      600:{
        // nav:true,
        items:4
      },
      1000:{
        // nav:true,
        items:6
      }
  }
})
// Counter Plus Minus start
// $(document).ready(function() {
//     $('.minus').click(function () {
//         var $input = $(this).parent().find('input');
//         var count = parseInt($input.val()) - 1;
//         count = count < 1 ? 1 : count;
//         $input.val(count);
//         $input.change();
//         return false;
//     });
//     $('.plus').click(function () {
//         var $input = $(this).parent().find('input');
//         $input.val(parseInt($input.val()) + 1);
//         $input.change();
//         return false;
//     });
// });
//Tooltip start
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))
//Tooltip End


//Hover Image start
// $('#latest .row .card .image').each(function(){
//   $(this).hoverdir({
//     speed:300,
//     easing:'ease',
//     hoverElem:'.image'
//   });
// })

// $('#featuredproducts .item .card .image').each(function(){
//   $(this).hoverdir({
//     speed:300,
//     easing:'ease',
//     hoverElem:'.image'
//   });
// })

// $('#catagory-img .row .card .image').each(function(){
//   $(this).hoverdir({
//     speed:300,
//     easing:'ease',
//     hoverElem:'.image'
//   });
// })

//Hover Image End

// function openSearch() {
//   $('body').addClass("active-search");
//   document.getElementById("search").style.height = "auto";
//   $('#search').addClass("sideb");
// }
// function closeSearch() {
//   $('body').removeClass("active-search");
//   document.getElementById("search").style.height = "0";
//   $('#search').addClass("siden");
// }

// Slick Slider

// $('.slider-single').slick({
//   slidesToShow: 1,
//   slidesToScroll: 1,
//   arrows: false,
//   fade: false,
//   adaptiveHeight: true,
//   infinite: true,
//   useTransform: true,
//   speed: 400,
//   cssEase: 'cubic-bezier(0.77, 0, 0.18, 1)',
// });

// $('.slider-nav')
//   .on('init', function(event, slick) {
//       $('.slider-nav .slick-slide.slick-current').addClass('is-active');
//   })
//   .slick({
//       slidesToShow: 5,
//       prevArrow: '<div id="next"><i class="fa-solid fa-chevron-left"></i></div>',
//       nextArrow: '<div id="prew"><i class="fa-solid fa-chevron-right"></i></div>',
//       slidesToScroll: 1,
//       arrows: true,
//       dots: false,
//       focusOnSelect: false,
//       infinite: true,
//       responsive: [{
//           breakpoint: 1024,
//           settings: {
//               slidesToShow: 4,
//               slidesToScroll: 4,
//           }
//       }, {
//           breakpoint: 640,
//           settings: {
//               slidesToShow: 3,
//               slidesToScroll: 3,
//          }
//       }, {
//           breakpoint: 420,
//           settings: {
//               slidesToShow: 2,
//               slidesToScroll: 2,
//      }
//     }, {
//           breakpoint: 991,
//           settings: {
//               slidesToShow: 3,
//               slidesToScroll: 3,
//     }
//   }]
// });

// $('.slider-single').on('afterChange', function(event, slick, currentSlide) {
//   $('.slider-nav').slick('slickGoTo', currentSlide);
//   var currrentNavSlideElem = '.slider-nav .slick-slide[data-slick-index="' + currentSlide + '"]';
//   $('.slider-nav .slick-slide.is-active').removeClass('is-active');
//   $(currrentNavSlideElem).addClass('is-active');
// });

// $('.slider-nav').on('click', '.slick-slide', function(event) {
//   event.preventDefault();
//   var goToSingleSlide = $(this).data('slick-index');

//   $('.slider-single').slick('slickGoTo', goToSingleSlide);
// });
// Zoom image
// $(document).ready(function() {
//   if ($(window).width() > 767) {
//       $("#tmzoom").elevateZoom({
//           gallery:'additional-carousel',
//           //inner zoom				 
//           zoomType : "inner", 
//           cursor: "crosshair" 
//         });
//       var z_index = 0;
//       $(document).on('click', '.thumbnail', function () {
//         $('.thumbnails').magnificPopup('open', z_index);
//         return false;
//       });

//       $('.additional-carousel a').click(function() {
//         var smallImage = $(this).attr('data-image');
//         var largeImage = $(this).attr('data-zoom-image');
//         var ez =   $('#tmzoom').data('elevateZoom');	
//         $('.thumbnail').attr('href', largeImage);  
//         ez.swaptheimage(smallImage, largeImage); 
//         z_index = $(this).index('#additional-carousel a');
//         return false;
//       });
//     }else{
//       $(document).on('click', '.thumbnail', function () {
//       $('.thumbnails').magnificPopup('open', 0);
//       return false;
//       });
//     }
//   });
