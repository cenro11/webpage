$(document).ready(function(){
    $('.cards').slick({
      arrows: true,
      prevArrow: '<button class="slick-prev"><i class="fas fa-angle-left"></i></button>',
      nextArrow: '<button class="slick-next"><i class="fas fa-angle-right"></i></button>',
      dots: true,
      dotsClass: 'slick-dots custom-dots',
      customPaging: function(slider, i) {
        return '<button class="dot">' + '<span class="number">' + (i + 1) + '</span>' + '</button>';
      },
      responsive: [
        {
          breakpoint: 768,
          settings: {
            arrows: false,
            dots: true
          }
        }
      ]
    });
  });