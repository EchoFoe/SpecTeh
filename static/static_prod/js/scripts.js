// /Скрипт для кнопки "наверх"/
// $(function () {
//
//     var scroll_timer;
//     var displayed = false;
//     var $message = $('#message a');
//     var $window = $(window);
//     var top = $(document.body).children(0).position().top;
//
// $window.scroll(function () {
//     window.clearTimeout(scroll_timer);
// scroll_timer = window.setTimeout(function () {
//     if($window.scrollTop() <= top) {
//         displayed = false;
//         $message.fadeOut(500);
//     }
//     else if(displayed == false) {
//         displayed = true;
//         $message.stop(true, true).show().click(function () { $message.fadeOut(500); });
//     }
// }, 100);
// });
// });
//
// var current = null;
// document.querySelector('#email').addEventListener('focus', function(e) {
//     if (current) current.pause();
//         current = anime({
//         targets: 'path',
//         strokeDashoffset: {
//           value: 0,
//           duration: 700,
//           easing: 'easeOutQuart'
//         },
//         strokeDasharray: {
//           value: '240 1386',
//           duration: 700,
//           easing: 'easeOutQuart'
//         }
//         });
//     });
// document.querySelector('#password').addEventListener('focus', function(e) {
//     if (current) current.pause();
//         current = anime({
//         targets: 'path',
//         strokeDashoffset: {
//           value: -336,
//           duration: 700,
//           easing: 'easeOutQuart'
//         },
//         strokeDasharray: {
//           value: '240 1386',
//           duration: 700,
//           easing: 'easeOutQuart'
//         }
//         });
// });
// document.querySelector('#submit').addEventListener('focus', function(e) {
//     if (current) current.pause();
//         current = anime({
//         targets: 'path',
//         strokeDashoffset: {
//           value: -730,
//           duration: 700,
//           easing: 'easeOutQuart'
//         },
//         strokeDasharray: {
//           value: '530 1386',
//           duration: 700,
//           easing: 'easeOutQuart'
//         }
//         });
// });
//
//
(function($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function (keyframes, options) {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
            scrollTop: (target.offset().top - 54)
        }, 1000, "easeInOutExpo",);
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#mainNav',
    offset: 56
  });

  // Collapse Navbar
  var navbarCollapse = function() {
    if ($("#mainNav").offset().top > 100) {
      $("#mainNav").addClass("navbar-shrink");
    } else {
      $("#mainNav").removeClass("navbar-shrink");
    }
  };
  // Collapse now if page is not at top
  navbarCollapse();
  // Collapse the navbar when page is scrolled
  $(window).scroll(navbarCollapse);

  // Hide navbar when modals trigger
  $('.portfolio-modal').on('show.bs.modal', function(e) {
    $(".navbar").addClass("d-none");
  })
  $('.portfolio-modal').on('hidden.bs.modal', function(e) {
    $(".navbar").removeClass("d-none");
  })

})(jQuery); // End of use strict