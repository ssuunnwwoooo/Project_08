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
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
            renderBullet: function (index, className) {
                return '<span class="' + className + '">' + (index + 1) + "</span>";
            },
        },
    });

    /*   $('.main_visual .arrows .left').on('click', function () {
           mainslide.slidePrev();
        });
         $('.main_visual .arrows .right').on('click', function () {
           menuSlide.slideNext();
       }); */


    $('.content_slide').slick({
        slidesToShow: 4,
        slidesToScroll: 2,
        prevArrow: $('.left'),
        nextArrow: $('.right'),
    });

    var pointSize = $(".circle").width() / 2;
    $(".content_wrap").mousemove(function (e) {
        $('.circle').css("top", e.pageY - pointSize);
        $('.circle').css("left", e.pageX - pointSize);
        $('.circle').fadeIn();
    });
    $(".content_wrap").on("mouseleave", function () {
        $('.circle').fadeOut();
    });

    $(document).ready(function () {
        $('ul.tabs li').click(function () {
            var tab_id = $(this).attr('data-tab');

            $('ul.tabs li').removeClass('current');
            $('.tab-content').removeClass('current');

            $(this).addClass('current');
            $("#" + tab_id).addClass('current');
        });

    });
});