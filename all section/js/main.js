
// index js
// var swiper = new Swiper('.pf-collection-swiper', {
//     slidesPerView: 3,
//     spaceBetween: 20,
//     loop: true, 
//     direction: getDirection(),
//     navigation: {
//       nextEl: '.pf-next-icon-arrow',
//       prevEl: '.pf-prev-icon-arrow',
//     },
//     on: {
//       resize: function () {
//         swiper.changeDirection(getDirection());
//       },
//     },
//     breakpoints: {
//       // when window width is <= 320px
//         0: {
//         slidesPerView: 1,
//         spaceBetween: 10
//       },
//       // when window width is <= 480px
//       480: {
//         slidesPerView: 1,
//         spaceBetween: 20
//       },
//       // when window width is <= 640px
//       640: {
//         slidesPerView: 2,
//         spaceBetween: 30
//       },
//       // when window width is <= 1024px
//       1024: {
//         slidesPerView: 3,
//         spaceBetween: 40
//       }
//     }
//   });

//   function getDirection() {
//     var windowWidth = window.innerWidth;
//     return windowWidth <= 760 ? 'vertical' : 'horizontal';
//   }

  // new cllection slider

  var swiper = new Swiper(".pf-collection-slider", {
    slidesPerView: 4,
    spaceBetween:20,
    loop: false,
    pagination: {
        el: ".swiper-pagination",
        type: "progressbar",
    },
    navigation: {
        nextEl: ".pf-icon-arrow-next",
        prevEl: ".pf-icon-arrow-prev",
    },
    breakpoints: {
        0: {  
            slidesPerView: 1,
        },
        320: {  
            slidesPerView: 1,
        },
        768: {  
            slidesPerView: 2,
        },
        1024: {  
            slidesPerView: 4,
        },
    }
});


// // video collection slider

// var swiper = new Swiper(".pf-video-collection-swiper", {
//   slidesPerView: 4,
//   centeredSlides: true,
//   spaceBetween: 30,
//   initialSlide: 2,
//   pagination: {
//       el: ".swiper-pagination",
//       clickable: true,
//   },
//   navigation: {
//     nextEl: ".swiper-button-next",
//     prevEl: ".swiper-button-prev",
// },
//   breakpoints: {
//       0: {
//           slidesPerView: 1,
//           spaceBetween: 10,
//       },
//       480: {
//           slidesPerView: 1,
//           spaceBetween: 10,
//       },
//       768: {
//           slidesPerView: 2,
//           spaceBetween: 20,
//       },
//       1024: {
//           slidesPerView: 4,
//           spaceBetween: 30,
//       },
//   },
//   on: {
//       slideChangeTransitionEnd: function () {
//           document.querySelectorAll('.slide-video').forEach(video => {
//               video.pause();
//           });
//           const activeSlide = this.slides[this.activeIndex];
//           const video = activeSlide.querySelector('.slide-video');
//           if (video) {
//               video.play();
//           }
//       },
//       init: function () {
//           const initialSlide = this.slides[this.activeIndex];
//           const video = initialSlide.querySelector('.slide-video');
//           if (video) {
//               video.play();
//           }
//       }
//   }
// });


// new-collection nested slider img

// var swiper = new Swiper(".pf-collectoin-img", {
//     spaceBetween: 30,
//     loop:true,
//     pagination: {
//       el: ".swiper-pagination",
//       clickable: true,
//     },
//     navigation: {
//         nextEl: ".pf-icon-product-img-arrow-next",
//         prevEl: ".pf-icon-product-img-arrow-prev",
//     },
//   });

// var swiper = new Swiper(".pf-collectoin-img-02", {
//     spaceBetween: 30,
//     loop:true,
//     pagination: {
//       el: ".swiper-pagination",
//       clickable: true,
//     },
//     navigation: {
//         nextEl: ".pf-icon-product-img-arrow-next-02",
//         prevEl: ".pf-icon-product-img-arrow-prev-02",
//     },
//   });
// var swiper = new Swiper(".pf-collectoin-img-03", {
//     spaceBetween: 30,
//     loop:true,
//     pagination: {
//       el: ".swiper-pagination",
//       clickable: true,
//     },
//     navigation: {
//         nextEl: ".pf-icon-product-img-arrow-next-03",
//         prevEl: ".pf-icon-product-img-arrow-prev-03",
//     },
//   });


var images = ["./images/new-collection-04.jpg", "./images/new-collection-02.jpg", "./images/new-collection-04.jpg", "./images/new-collection-02.jpg", "./images/new-collection-04.jpg", "./images/new-collection-02.jpg"];

var swiper = new Swiper(".pf-collectoin-img-04", {
    spaceBetween: 30,
    loop: true,
    pagination: {
      clickable: true,
    },
    navigation: {
      nextEl: ".pf-icon-product-img-arrow-next-04",
      prevEl: ".pf-icon-product-img-arrow-prev-04",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      renderBullet: function (index, className) {
        return `<div class="image_thumb ${className}"><img src="${images[index]}" alt=""></div>`;
      },
    },
});


// var swiper = new Swiper(".pf-collectoin-img-05", {
//     spaceBetween: 30,
//     loop:true,
//     pagination: {
//       el: ".swiper-pagination",
//       clickable: true,
//     },
//     navigation: {
//         nextEl: ".pf-icon-product-img-arrow-next-05",
//         prevEl: ".pf-icon-product-img-arrow-prev-05",
//     },
//   });


  // new arrival section 
//   $(document).ready(function() {
//     // Add .active class on hover
//     $(".pf-new-arrival-card").hover(
//         function() {
//             $(this).addClass("active");
//         },
//         function() {
//             $(this).removeClass("active");
//         }
//     );
// });




// stylish collection js

  // var swiper = new Swiper(".pf-stylish-colloection-slider", {
  //   slidesPerView: 2.5,
  //   loop: true,
  //   spaceBetween: 20,
  //   breakpoints: {
  //     0: {
  //         slidesPerView: 2,
  //         spaceBetween: 10,
  //     },
  //     480: {
  //         slidesPerView: 2,
  //         spaceBetween: 10,
  //     },
  //     768: {
  //         slidesPerView: 2,
  //         spaceBetween: 20,
  //     },
  //     1024: {
  //         slidesPerView: 2.5,
  //         spaceBetween: 20,
  //     },
  // },

  // });

  
// stylish size and color active


// weekend size active js
// var sizeButtons = document.querySelectorAll(".pf-size-btn .s"); 
// sizeButtons[0].classList.add("active") 
// sizeButtons.forEach(function(button) {
//     button.addEventListener("click", function() {
//         sizeButtons.forEach(function(btn) {
//             btn.classList.remove("active");
//         });
//         this.classList.add("active");
//     });
// });


// // weekedn color active js
// const colorBtn = document.querySelectorAll('.pf-color-btn .c');
// colorBtn[0].classList.add("color-active")
// colorBtn?.forEach(function(button) {
//     button.addEventListener("click", function(){
//        colorBtn?.forEach(function(btn){
//         btn.classList.remove("color-active");
//        })
//        button.classList.add("color-active")
//     });
// })


