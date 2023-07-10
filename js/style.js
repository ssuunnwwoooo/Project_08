$(function () {

    $(window).on('scroll', function () {
        let sct = $(window).scrollTop();
        sct > 0
            ? $('.header').addClass('on')
            : $('.header').removeClass('on');
    });

    $(window).on('scroll', function () {
        let sct = $(window).scrollTop();
        $('._se_').each(function () {
            if (sct + $(window).innerHeight() > $(this).offset().top) {
                $(this).addClass('on')
            } else {
                $(this).removeClass('on')
            }
        });

    });

    var mainslide = new Swiper(".main_slide", {
        loop: true,
    });

    // $('.main_menu .arrows .left').on('click', function () {
    //     menuSlide.slidePrev();
    // });
    // $('.main_menu .arrows .right').on('click', function () {
    //     menuSlide.slideNext();
    // });

    var contentslide = new Swiper(".content_slide", {
        slidesPerView: 4,
        spaceBetween: 30,
        loop: true,

    });

});