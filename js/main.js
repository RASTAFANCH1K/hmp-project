$(function() {
  searchFormBtnClick()
  burgerClick();
  accordionClick();
});

function searchFormBtnClick() {
  $('.search-form__btn').click(function(e) {
    e.preventDefault();
    $('.logo--hidden').hide();
    $('.search-form').toggleClass('active');
    $('.search-form__input').focus();

    if (!$('.search-form').hasClass('active')) {
      $('.logo--hidden').show();
    }
  });
}

function burgerClick() {
  $('.burger').click(function(e) {
    e.preventDefault();
    $('.burger').toggleClass('active');
    $('.header__popup').toggleClass('active');
  });
}


$(".wrapper").on("click", function(e) {
  if (!$(e.target).closest(".header").length) {
    if ($(".search-form").hasClass("active")) {
      $(".search-form").removeClass("active");
      $('.logo--hidden').show();
    }
    if ($(".burger").hasClass("active")) {
      $(".burger").removeClass("active");
      $(".header__popup").removeClass("active");
    }
  }
});

function accordionClick() {
  $('.accordion').on('click', function (e) {
    e.preventDefault();
    $('.categories').toggle('slow');
    $('.categories').toggleClass('show');
    $('.accordion__icon').toggleClass('rotate');
  });
}

var socialMix = document.querySelector('.social-mix');
var mixer1;

if (socialMix) {
    mixer1 = mixitup(socialMix, {
         selectors: {
             control: '[data-mixitup-control]'
         },
         load: {
             filter: '.video-details'
         }
    });
}

var thumbs = document.querySelector('.thumbs');
var mixer2;

if (thumbs) {
  mixer2 = mixitup(thumbs, {
       selectors: {
           control: '[data-mixitup-control-2]'
       },
       load: {
           filter: '.views-filter'
       }
  });
}

// function searchFormBtnClickResize() {
//   $(window).on('resize', function () {
//     if ($(window).width() <= 480) {
//       searchFormBtnClick();
//     } else {
//       console.log('...')
//     }
//   })  
// }