(function ($) {
    'use strict';
      var serviceSlider = new Swiper('.service-slider', {
        spaceBetween: 28,
        loop: true,
        speed: 1000,
        breakpoints: {
            320: {
                slidesPerView: 1,
            },
            480: {
                slidesPerView: 1,
            },
            768: {
                slidesPerView: 2,
            },
            992: {
                slidesPerView: 2.7,
            },
            1200: {
                slidesPerView: 3.7,
            },
            1400: {
                slidesPerView: 3.9,
            },
        },
        navigation: {
            nextEl: '.service-button-next',
            prevEl: '.service-button-prev',
        },
    });


    /*=========================
        Counter 
    ========================== */
    $('.counter-item').each(function () {
        var $counterItem = $(this);
        $counterItem.isInViewport(function (status) {
            if (status === 'entered') {
                $counterItem.find('.odometer').each(function () {
                    var el = this;
                    el.innerHTML = el.getAttribute('data-odometer-final');
                });
            }
        });
    });
    window.odometerOptions = {
    format: '(ddd)' 
};
    /*=========================
          progress-bar
    ========================== */
// About Section Progress Bar
window.addEventListener('DOMContentLoaded', () => {
  const bars = document.querySelectorAll('.about-bar__progress .bar-inner');

  bars.forEach(bar => {
    // Remove counted class and reset width to 0 before animation
    bar.classList.remove('counted');
    bar.style.width = '0';

    const percent = bar.getAttribute('data-percent') || '0%';

    // Delay the animation slightly so CSS transition triggers
    setTimeout(() => {
      bar.style.width = percent;
    }, 100);

    bar.addEventListener('transitionend', () => {
      bar.classList.add('counted');
    });
  });
});

    /* Hero Slide */

    var heroSlider = new Swiper('.hero-slider', {
        loop: true,
        slidesPerView: 1,
        speed: 1000,
        fadeEffect: { crossFade: true },
        effect: 'fade',
        navigation: {
            nextEl: '.hero-button-next',
            prevEl: '.hero-button-prev',
        },
        breakpoints: {
            320: {
                autoplay: {
                    delay: 1000,
                },
            },
            992: {
                autoplay: false,
            },
        },
    });

    /* Hero End */



})(jQuery);
