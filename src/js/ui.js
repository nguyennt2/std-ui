const menuMobile = function () {
    // on click menu header
    $("#btn-menu").click(function (e) {
        $("html, body").toggleClass('open-menu');
    });

    $(".backdrop").click(function (e) {
        $("html, body").removeClass('open-menu');
    });

    $(".menu-item.has-child i").click(function (e) {
        if($(this).parent().hasClass('open')) {
            $(this).parent().toggleClass('open');
        } else {
            $('.menu-item.has-child.open').removeClass('open');
            $(this).parent().addClass('open');
        }
    });
};

const owlSlider = function () {
    $('.slider-banner').owlCarousel({
        loop:true,
        margin:0,
        responsiveClass:true,
        nav:false,
        dots: false,
        items:1 
    });

    $('.course_container').owlCarousel({
        loop:true,
        margin:0,
        responsiveClass:true,
        nav:true,
        dots: false,
        responsive:{
            0:{
                items:1
            },
            480:{
                items:2
            },
            1024:{
                items:4,
                loop: false,
                mouseDrag: false,
                touchDrag: false,
                pullDrag: false
            }
        }
    })
    $('.news__list-1, .news__list-2').owlCarousel({
        loop:true,
        margin:0,
        responsiveClass:true,
        nav:true,
        dots: false,
        margin: 22,
        responsive:{
            0:{
                items:1
            },
            480:{
                items:2
            },
            1024:{
                items:3,
                loop: false,
                mouseDrag: false,
                touchDrag: false,
                pullDrag: false
            }
        }
    });
    $('.student__list').owlCarousel({
        loop:true,
        margin:0,
        responsiveClass:true,
        nav:true,
        dots: false,
        margin: 22,
        responsive:{
            0:{
                items:1
            },
            480:{
                items:2
            },
            1024:{
                items:4,
                loop: false,
                mouseDrag: false,
                touchDrag: false,
                pullDrag: false
            }
        }
    });
}

const setPercentCourse = function () {
    $('.course_list_container .course_item .progress_bar').each(function () {
        var progress = $(this).data('progress');
        if (progress)
            $(this).find('.percent').css('width', progress + '%');
    });
    $('.course_list_container .course_item .course_item_avt').each(function () {
        var marginTop = $(this).data('margin-top');
        if (marginTop)
            $(this).find('img').css('margin-top', marginTop);
    });
}

const initCourseDetail = function () {
    $('.course_detail_wrapper .lesson_list_container .lesson_item').click(function () {
        $('.course_detail_wrapper .lesson_list_container .lesson_item').removeClass('active');
        $(this).addClass('active');
    });
    $('.course_detail_wrapper .lesson_detail_container .slide').click(function () {
        $(this).toggleClass('active');
        var target = $(this).data('target');
        if (target)
            $('.course_detail_wrapper .lesson_detail_container').find('#' + target).slideToggle();
    });
    var width = $('.course_detail_wrapper .lesson_detail_container').width();
    var iframeHeight = width * (612/1089);
    $('.course_detail_wrapper .lesson_detail_container iframe').height(iframeHeight);
    $('.course_detail_wrapper .lesson_detail_container .slide_lesson_detail_item .percent_bar').each(function () {
        var percent = $(this).data('percent');
        if (percent) {
            var percentInt = parseInt(percent);
            if (percentInt > 50) {
                $(this).find('.percent').css('clip', 'rect(auto, auto, auto, auto)');
                var deg = (percentInt - 50) * 3.6;
                deg = 360 - deg;
                $(this).find('.left_side').css('transform', 'rotate(' + deg + 'deg)');
            }
            else {
                $(this).find('.right_side').hide();
                var deg = percentInt * 3.6;
                deg = 180 - deg;
                $(this).find('.left_side').css('transform', 'rotate(' + deg + 'deg)');
            }
        }
    });
}

$(window).on("load", function () {
    // common
    menuMobile();
    owlSlider();
    setPercentCourse();
    initCourseDetail();
    // $(".loading").removeClass("active");
    // $("a[href='#top']").click(function () {
    //     $("html, body").animate({ scrollTop: 0 }, 100);
    //     return false;
    // });
    $('.course_container, .thematic__content').owlCarousel({
        loop:true,
        margin:0,
        responsiveClass:true,
        nav:true,
        dots: false,
        responsive:{
            0:{
                items:1
            },
            480:{
                items:2
            },
            1024:{
                items:4,
                loop: false,
                mouseDrag: false,
                touchDrag: false,
                pullDrag: false
            }
        }
    });
    $('.about_container').owlCarousel({
        loop:false,
        margin:-5,
        nav:false,
        dots: true,
        items: 1
    })
});

$(window).on("scroll", function () {});

$(window).on("resize", function () {});
