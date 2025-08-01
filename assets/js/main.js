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



})(jQuery);
