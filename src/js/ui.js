const menuMobile = function () {
  // on click menu header
  $("#btn-menu").click(function (e) {
    $("html, body").toggleClass("open-menu");
  });

  $(".backdrop").click(function (e) {
    $("html, body").removeClass("open-menu");
  });

  $(".menu-item.has-child").click(function (e) {
    $(this).find("a").off("click");
    if ($(this).hasClass("open")) {
      $(this).toggleClass("open");
    } else {
      $(".menu-item.has-child.open").removeClass("open");
      $(this).addClass("open");
    }
  });
};

const owlSlider = function () {
  $(".slider-banner").owlCarousel({
    loop: true,
    margin: 0,
    responsiveClass: true,
    nav: false,
    dots: false,
    items: 1,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
  });
  $(".course_container").owlCarousel({
    loop: true,
    margin: 0,
    responsiveClass: true,
    nav: true,
    dots: false,
    responsive: {
      0: {
        items: 1,
      },
      480: {
        items: 2,
      },
      1024: {
        items: 4,
        loop: false,
        mouseDrag: false,
        touchDrag: false,
        pullDrag: false,
      },
    },
  });
  $(".news__list-1, .news__list-2").owlCarousel({
    loop: true,
    margin: 0,
    responsiveClass: true,
    nav: true,
    dots: false,
    margin: 22,
    responsive: {
      0: {
        items: 1,
      },
      480: {
        items: 2,
      },
      1024: {
        items: 3,
        loop: false,
        mouseDrag: false,
        touchDrag: false,
        pullDrag: false,
      },
    },
  });
  $(".student__list").owlCarousel({
    loop: true,
    margin: 0,
    responsiveClass: true,
    nav: true,
    dots: false,
    margin: 22,
    responsive: {
      0: {
        items: 1,
      },
      480: {
        items: 2,
      },
      1024: {
        items: 4,
        loop: false,
        mouseDrag: false,
        touchDrag: false,
        pullDrag: false,
      },
    },
  });
  $(".course_container, .thematic__content").owlCarousel({
    loop: true,
    margin: 0,
    responsiveClass: true,
    nav: true,
    dots: false,
    responsive: {
      0: {
        items: 1,
      },
      480: {
        items: 2,
      },
      1024: {
        items: 4,
        loop: false,
        mouseDrag: false,
        touchDrag: false,
        pullDrag: false,
      },
    },
  });
  $(".about_container").owlCarousel({
    loop: false,
    margin: -5,
    nav: false,
    dots: true,
    items: 1,
  });
};

const setTimeProcess = function () {
  const time = $(".time-process").data("time");
  const dataTime = 10;
  $(".time-process").css("--duration", dataTime);
};

const setPercentCourse = function () {
  $(".course_list_container .course_item .progress_bar").each(function () {
    var progress = $(this).data("progress");
    if (progress)
      $(this)
        .find(".percent")
        .css("width", progress + "%");
  });
  $(".course_list_container .course_item .course_item_avt").each(function () {
    var marginTop = $(this).data("margin-top");
    if (marginTop) $(this).find("img").css("margin-top", marginTop);
  });
};

const initCourseDetail = function () {
  $(".tab-list .lesson_list_container .lesson_item").click(function () {
    $(".tab-list .lesson_list_container .lesson_item").removeClass("active");
    $(this).addClass("active");
  });
  $(".course_detail_wrapper .lesson_detail_container .slide").click(
    function () {
      $(this).toggleClass("active");
      var target = $(this).data("target");
      if (target)
        $(".course_detail_wrapper .lesson_detail_container")
          .find("#" + target)
          .slideToggle();
    }
  );
  var width = $(".course_detail_wrapper .lesson_detail_container").width();
  var iframeHeight = width * (612 / 1089);
  $(".course_detail_wrapper .lesson_detail_container iframe").height(
    iframeHeight
  );
  $(
    ".course_detail_wrapper .lesson_detail_container .slide_lesson_detail_item .percent_bar"
  ).each(function () {
    var percent = $(this).data("percent");
    if (percent) {
      var percentInt = parseInt(percent);
      if (percentInt > 50) {
        $(this).find(".percent").css("clip", "rect(auto, auto, auto, auto)");
        var deg = (percentInt - 50) * 3.6;
        deg = 360 - deg;
        $(this)
          .find(".left_side")
          .css("transform", "rotate(" + deg + "deg)");
      } else {
        $(this).find(".right_side").hide();
        var deg = percentInt * 3.6;
        deg = 180 - deg;
        $(this)
          .find(".left_side")
          .css("transform", "rotate(" + deg + "deg)");
      }
    }
  });
};

const initCourseLessonDetail = function () {
  $(".course_lesson_detail_wrapper .course_lesson_detail .slide").click(
    function () {
      $(this).toggleClass("active");
      var target = $(this).data("target");
      if (target)
        $(".course_lesson_detail_wrapper .course_lesson_detail")
          .find("#" + target)
          .slideToggle();
    }
  );
  var width = $(".course_lesson_detail_wrapper .course_lesson_detail").width();
  var iframeHeight = width * (612 / 1089);
  $(".course_lesson_detail_wrapper .course_lesson_detail iframe").height(
    iframeHeight
  );
  $(
    ".course_lesson_detail_wrapper .course_lesson_detail .slide_lesson_detail_item .percent_bar"
  ).each(function () {
    var percent = $(this).data("percent");
    if (percent) {
      var percentInt = parseInt(percent);
      if (percentInt > 50) {
        $(this).find(".percent").css("clip", "rect(auto, auto, auto, auto)");
        var deg = (percentInt - 50) * 3.6;
        deg = 360 - deg;
        $(this)
          .find(".left_side")
          .css("transform", "rotate(" + deg + "deg)");
      } else {
        $(this).find(".right_side").hide();
        var deg = percentInt * 3.6;
        deg = 180 - deg;
        $(this)
          .find(".left_side")
          .css("transform", "rotate(" + deg + "deg)");
      }
    }
  });
};

const initLessen2 = function () {
  $(".lessen_wrapper .question_container .answer_block .answer span").click(
    function () {
      $(this).closest(".answer_block").find("span").removeClass("active");
      $(this).addClass("active");
    }
  );
};

const initClick = function () {
  $(".newsletter__bottom p label input").click(function () {
    $(this).closest("label").toggleClass("checked");
  });
  $(".open-register").click(function () {
    $(".authen_form_container.login").hide();
    $(".authen_form_container.register").css("display", "flex");
  });
  $(".open-login").click(function () {
    $(".authen_form_container.register").hide();
    $(".authen_form_container.login").css("display", "flex");
  });
  $(".btn-collapse").click(function () {
    $(this).children("i").eq(0).toggleClass("open");
    $(this).parent().next().toggleClass("open");
  });
};

const initLessen4 = function () {
  $(".lessen_4_wrapper .question_container .question_area .answer span").click(
    function () {
      $(this).parent().find("span").removeClass("active");
      $(this).addClass("active");
    }
  );
};

const initModal = function () {
  const btn = $(".btn-modal");
  btn.click(function () {
    const modal = $(`.${$(this).data("modal")}`);
    const close = $(`.${$(this).data("modal")} .close-modal`);
    modal.show();
    close.click(function (e) {
      modal.hide();
    });
  });
};

const initMedia = function () {
  const length = $("#waveform").length;

  if (length > 0) {
    const url = $("#waveform").data("source");
    let waveSurfer = WaveSurfer.create({
      container: "#waveform",
      waveColor: "#e2e2e2",
      progressColor: "#EA2847",
      cursorColor: "#fff",
      // fillParent: false,
      barWidth: 5,
      barRadius: 2.5,
      barGap: 3,
      height: 50,
      responsive: true,
      hideScrollbar: true,
    });
    waveSurfer.load(url);
    waveSurfer.on("audioprocess", updateTimer);
    waveSurfer.on("seek", updateTimer);
    waveSurfer.on("ready", function () {
      // Make the container temporarily visible
      $(".modal-reading").css("display", "block");

      // Draw the waves
      waveSurfer.drawBuffer();

      // Hide the container once again ! Now WaveSurfer should have been rendered normally
      $(".modal-reading").css("display", "none");
    });
    function secondsToTimestamp(seconds) {
      seconds = Math.floor(seconds);
      let h = Math.floor(seconds / 3600);
      let m = Math.floor((seconds - h * 3600) / 60);
      let s = seconds - h * 3600 - m * 60;
      m = m < 10 ? "0" + m : m;
      s = s < 10 ? "0" + s : s;
      return m + ":" + s;
    }
    function updateTimer() {
      let formattedTime = secondsToTimestamp(waveSurfer.getCurrentTime());
      $(".horen_audio .time").text(formattedTime);
    }
    $("#playBtn").click(function () {
      waveSurfer.play();
    });
    $("#pauseBtn").click(function () {
      waveSurfer.pause();
    });
  }
};

$(window).on("load", function () {
  // common
  menuMobile();
  owlSlider();
  initModal();
  setPercentCourse();
  setTimeProcess();
  initClick();
  initCourseDetail();
  initCourseLessonDetail();
  initMedia();
  initLessen2();
  initLessen4();
  // $(".loading").removeClass("active");
  // $("a[href='#top']").click(function () {
  //     $("html, body").animate({ scrollTop: 0 }, 100);
  //     return false;
  // });
});

$(window).on("click", function (e) {
  if ($(e.target).is(".modal")) {
    modal.hide();
  }
});

$(window).on("scroll", function () {});

$(window).on("resize", function () {});
