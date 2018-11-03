$(".button-collapse").sideNav();
$(".tabs").tabs({});


$(document).on("scroll", onScroll);


//smooth scroll
function onScroll(event) {
    var scrollPos = $(document).scrollTop();
    $('.menu a').each(function () {
        var currLink = $(this);
        var refElement = $(currLink.attr("href"));
        if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
            $('.menu a').removeClass("bg-color white-text");
            currLink.addClass("bg-color white-text");
        }
    });
}

var mq = window.matchMedia("(max-width: 993px)");
if (mq.matches) {
    $('.menu a[href^="#"]').on('click', function (e) {
        e.preventDefault();
        $(document).off("scroll");

        $('.menu a').each(function () {
            $(this).removeClass('bg-color white-text');
        })
        $(this).addClass('bg-color white-text');

        var target = this.hash,
            menu = target;
        $target = $(target);
        $('html, body').stop().animate({
            'scrollTop': $target.offset().top + -24
        }, 500, function () {
            window.location.hash = target;
            $(document).on("scroll", onScroll);
        });
    });
} else {
    $('.menu a[href^="#"]').on('click', function (e) {
        e.preventDefault();
        $(document).off("scroll");

        $('.menu a').each(function () {
            $(this).removeClass('bg-color white-text');
        })
        $(this).addClass('bg-color white-text');

        var target = this.hash,
            menu = target;
        $target = $(target);
        $('html, body').stop().animate({
            'scrollTop': $target.offset().top + -30
        }, 500, function () {
            window.location.hash = target;
            $(document).on("scroll", onScroll);
        });
    });
}
$(window).resize(function () {
    if (mq.matches) {
        $('.menu a[href^="#"]').on('click', function (e) {
            e.preventDefault();
            $(document).off("scroll");

            $('.menu a').each(function () {
                $(this).removeClass('bg-color white-text');
            })
            $(this).addClass('bg-color white-text');

            var target = this.hash,
                menu = target;
            $target = $(target);
            $('html, body').stop().animate({
                'scrollTop': $target.offset().top + -24
            }, 500, function () {
                window.location.hash = target;
                $(document).on("scroll", onScroll);
            });
        });
    } else {
        $('.menu a[href^="#"]').on('click', function (e) {
            e.preventDefault();
            $(document).off("scroll");

            $('.menu a').each(function () {
                $(this).removeClass('bg-color white-text');
            })
            $(this).addClass('bg-color white-text');

            var target = this.hash,
                menu = target;
            $target = $(target);
            $('html, body').stop().animate({
                'scrollTop': $target.offset().top + -30
            }, 500, function () {
                window.location.hash = target;
                $(document).on("scroll", onScroll);
            });
        });
    }
});
