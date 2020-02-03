//input mask

$('.phoneidcl').inputmask('+380(99) 999-99-99', {
    "oncomplete": function () {
        $(".disbutt").prop("disabled", false);
    }, "onincomplete": function () {
        $(".disbutt").prop("disabled", true);
    }
});

//modal window

$(document).ready(function () {
    $('.popup-link').magnificPopup();
});

//mobile menu (header)

$(function () {
    $('.toggle-menu').on('click', function () {
        $('.main-nav').toggleClass('open');
        $('.header').toggleClass('bg');
        $(".toggle-menu").toggleClass("menu-on");
    });
});

$(document).ready(function () {
    $(document).ready(function () {
        $('.nav-link-new').click(function () {
            $('.main-nav').removeClass('open');
            $('.toggle-menu').removeClass('menu-on');
        });

    });
});

//slider for "certificates"

$('.certificates-slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: true,
    arrows: true,
    dots: true,
    autoplay: false,
    centerMode: true,
    centerPadding: '0px',
    prevArrow: '<button class="slick-arrow slick-prev"> <i class="fas fa-long-arrow-alt-left"></i> </button>',
    nextArrow: '<button class="slick-arrow slick-next"> <i class="fas fa-long-arrow-alt-right"></i> </button>',
    responsive: [
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 2,
                arrows: true,
                centerMode: false,
            }
        },
        {
            breakpoint: 769,
            settings: {
                slidesToShow: 1,
                arrows: false,
                centerMode: false,
            }
        },
    ]
});

//slider for "reviews"

$('.reviews-slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: true,
    arrows: true,
    prevArrow: '<button class="slick-arrow slick-prev"> <i class="fas fa-long-arrow-alt-left"></i> </button>',
    nextArrow: '<button class="slick-arrow slick-next"> <i class="fas fa-long-arrow-alt-right"></i> </button>',
    dots: true,
    autoplay: false,
    responsive: [
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 2,
                arrows: true,
            }
        },
        {
            breakpoint: 769,
            settings: {
                slidesToShow: 1,
                arrows: false,
            }
        },
    ]
});

//slider for "why"

$('.why-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    arrows: true,
    dots: false,
    prevArrow: '<button class="slick-arrow slick-prev"> <span class="icon-arrow-left"></span> </button>',
    nextArrow: '<button class="slick-arrow slick-next"> <span class="icon-arrow-right"></span>  </button>',
    responsive: [
        {
            breakpoint: 501,
            settings: {
                arrows: false,
                dots: true,
            }
        },
    ]
});

//slider for "recommend"

$('.recommend-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    arrows: true,
    dots: false,
    prevArrow: '<button class="slick-arrow slick-prev"> <span class="icon-arrow-left"></span> </button>',
    nextArrow: '<button class="slick-arrow slick-next"> <span class="icon-arrow-right"></span>  </button>',
    responsive: [
        {
            breakpoint: 501,
            settings: {
                arrows: false,
                dots: true,
            }
        },
    ]
});

//scroll

$('.nav-link-new').mPageScroll2id();

//video popup

$(document).ready(function () {
    $('.popup-youtube').magnificPopup({
        disableOn: 700,
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,
        fixedContentPos: false
    });
});

//gallery
$(document).ready(function () {
    $('.popup-gallery').magnificPopup({
        delegate: 'a',
        type: 'image',
        tLoading: 'Loading image #%curr%...',
        mainClass: 'mfp-img-mobile',
        gallery: {
            enabled: true,
            navigateByImgClick: true,
            preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
        },
        image: {
            tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
            titleSrc: function (item) {
                return item.el.attr('title') + '<small>by Marsel Van Oosten</small>';
            }
        }
    });
});

/////
function swap(e) {
    if (e === 0) //обрабатываем случай, когда клик на левом дом елементе
    {
        var item = document.getElementById('left');

        if (item.className === "item left") { // левый слева

            var centerItem = document.getElementById('center');

            if (centerItem.className === "item center") { // центральный в центре

                item.classList.remove('left');
                item.classList.add('center');

                centerItem.classList.remove('center');
                centerItem.classList.add('left');

                item.style.background = 'url("images/service1.png")';
                centerItem.style.background = 'linear-gradient(0deg, rgba(145, 121, 158, 0.67), rgba(145, 121, 158, 0.67)), url("images/service2.png")';
            }
            else { // в ином случае центральный справа
                var rightItem = document.getElementById('right');

                rightItem.classList.remove('center');
                rightItem.classList.add('right');

                centerItem.classList.remove('right');
                centerItem.classList.add('left');

                item.classList.remove('left');
                item.classList.add('center');

                rightItem.style.background = 'linear-gradient(0deg, rgba(145, 121, 158, 0.67), rgba(145, 121, 158, 0.67)), url("images/service3.png")';
                item.style.background = 'url("images/service1.png")';
                centerItem.style.background = 'linear-gradient(0deg, rgba(145, 121, 158, 0.67), rgba(145, 121, 158, 0.67)), url("images/service2.png")';
            }
        }
    }
    else if (e === 1) { //обрабатываем случай, когда клик на центральном дом елементе
        var item = document.getElementById('center');

        if (item.className === "item left") { //левый станет в центр
            var centerItem = document.getElementById('left');

            if (centerItem.className === "item center") {
                item.classList.remove('left');
                item.classList.add('center');

                centerItem.classList.remove('center');
                centerItem.classList.add('left');
            }
            else if (centerItem.className === "item right") {
                item.classList.remove('left');
                item.classList.add('center');

                centerItem.classList.remove('right');
                centerItem.classList.add('left');
            }

            item.style.background = 'url("images/service2.png")';
            centerItem.style.background = 'linear-gradient(0deg, rgba(145, 121, 158, 0.67), rgba(145, 121, 158, 0.67)), url("images/service1.png")';
        }
        else if (item.className === "item right") {
            var centerItem = document.getElementById('left');

            if (centerItem.className === "item center") {
                item.classList.remove('right');
                item.classList.add('center');

                centerItem.classList.remove('center');
                centerItem.classList.add('right');
            }
            else {
                centerItem = document.getElementById('right');

                item.classList.remove('right');
                item.classList.add('center');

                centerItem.classList.remove('center');
                centerItem.classList.add('right');
            }

            item.style.background = 'url("images/service2.png")';
            centerItem.style.background = 'linear-gradient(0deg, rgba(145, 121, 158, 0.67), rgba(145, 121, 158, 0.67)), url("images/service3.png")';
        }
    }
    else //обрабатываем случай, когда клик на правом дом елементе
    {
        var item = document.getElementById('right');

        if (item.className === "item right") { // правый справа

            var centerItem = document.getElementById('center');

            if (centerItem.className === "item center") { // центральный в центре
                item.classList.remove('right');
                item.classList.add('center');

                centerItem.classList.remove('center');
                centerItem.classList.add('right');

                item.style.background = 'url("images/service3.png")';
                centerItem.style.background = 'linear-gradient(0deg, rgba(145, 121, 158, 0.67), rgba(145, 121, 158, 0.67)), url("images/service2.png")';
            }
            else { // в ином случае центральный слева

                var leftItem = document.getElementById('left');

                leftItem.classList.remove('center');
                leftItem.classList.add('left');

                centerItem.classList.remove('left');
                centerItem.classList.add('right');

                item.classList.remove('right');
                item.classList.add('center');

                leftItem.style.background = 'linear-gradient(0deg, rgba(145, 121, 158, 0.67), rgba(145, 121, 158, 0.67)), url("images/service1.png")';
                item.style.background = 'url("images/service3.png")';
                centerItem.style.background = 'linear-gradient(0deg, rgba(145, 121, 158, 0.67), rgba(145, 121, 158, 0.67)), url("images/service2.png")';
            }
        }
    }
}


///accordion

function toggleIcon(e) {
    $(e.target)
        .prev('.panel-heading')
        .find(".triangle")
        .toggleClass('triangle-bottom triangle-top');
}
$('.panel-group').on('hidden.bs.collapse', toggleIcon);
$('.panel-group').on('shown.bs.collapse', toggleIcon);

