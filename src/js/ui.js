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

$(window).on("load", function () {
    // common
    menuMobile();
    owlSlider();
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
