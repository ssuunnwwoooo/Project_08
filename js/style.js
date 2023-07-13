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
        autoplay: {
            delay: 3000,
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
            renderBullet: function (index, className) {
                return '<span class="' + className + '">' + (index + 1) + "</span>";
            },
        },
    });


    $('.content_slide').slick({
        slidesToShow: 4,
        slidesToScroll: 2,
        prevArrow: $('.left'),
        nextArrow: $('.right'),
        responsive: [{
            breakpoint: 768,
            settings: {
                slidesToShow: 2
            }
        }
        ]
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

    $('.mobile_btn').on('click', function () {
        $(this).toggleClass('on');
        $('.gnb').toggleClass('on');
    });


    $('.gnb>ul>li>a').on('click', function (e) {
        if ($('.gnb').hasClass('on')) {
            e.preventDefault();
        }

        $(this).next().stop().slideDown();
        $(this).parent().siblings().find('.sub').stop().slideUp();
    });


    $(window).on('resize', function () {
        $('.gnb').removeClass('on')
    });

    $('.gnb').on('wheel', function (e) {
        if ($('.gnb').hasClass('on')) {
            e.preventDefault();
        }
    });

});