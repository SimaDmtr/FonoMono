$(document).ready(function () {
    //Слайдер дсотавка
    $('.delivery_slides').slick({
        useCSS: true
    });
    //


    //Триггер кнопки каталог
    $(".label").click(function () {
        if ($('.label_wrapper').hasClass("show")) {
            $('.label_wrapper').removeClass("show")
        } else {
            $('.label_wrapper').addClass("show")
        }
    });
    //

    //слайдеры "Оплата"
    $('.main_slider_payment_wrapper').slick({
        slidesToShow: 1,
        infinite: false,
        arrows: true
    });
    $('.nav_slider_payment_list').slick({
        centerMode: true,
        focusOnSelect: true,
        slidesToShow: 4,
        infinite: false,
        draggable: false,
        swipe: false,
        touchMove: false,
        asNavFor: '.main_slider_payment_wrapper'
    });
    //

    // синхронизация слайдеров
    $('.main_slider_payment_wrapper').on('swipe', function (event, slick, direction) {
        if ($(this).slick('slickCurrentSlide') === 0) {
            $('.pay_card').addClass('black_payment').siblings().removeClass('black_payment');
        } else if ($(this).slick('slickCurrentSlide') === 1) {
            $('.courier_pay').addClass('black_payment').siblings().removeClass('black_payment');
        } else if ($(this).slick('slickCurrentSlide') === 2) {
            $('.bank_pay').addClass('black_payment').siblings().removeClass('black_payment');
        }
    });
    $('.nav_slider_payment_item').click(function () {
        $(this).addClass('black_payment').siblings().removeClass('black_payment');
    })

    $('.main_slider_payment_wrapper .slick-arrow').click(function () {
        if ($('.main_slider_payment_wrapper').slick('slickCurrentSlide') === 0) {
            $('.pay_card').addClass('black_payment').siblings().removeClass('black_payment');
        } else if ($('.main_slider_payment_wrapper').slick('slickCurrentSlide') === 1) {
            $('.courier_pay').addClass('black_payment').siblings().removeClass('black_payment');
        } else if ($('.main_slider_payment_wrapper').slick('slickCurrentSlide') === 2) {
            $('.bank_pay').addClass('black_payment').siblings().removeClass('black_payment');
        }
    })
    //

    //якорь наверх страницы
    $('body').append('<img id="go-top" src="assets/img/icons/up.png" alt="">');
    $(function () {
        $.fn.scrollToTop = function () {
            $(this).hide().removeAttr("href");
            if ($(window).scrollTop() >= "250") $(this).fadeIn("slow")
            var scrollDiv = $(this);
            $(window).scroll(function () {
                if ($(window).scrollTop() <= "250") $(scrollDiv).fadeOut("slow")
                else $(scrollDiv).fadeIn("slow")
            });
            $(this).click(function () {
                $("html, body").animate({scrollTop: 0}, "slow")
            })
        }
    });

    $(function () {
        $("#go-top").scrollToTop();
    });
    //


    //Слайдеры на главной
    $('.slider').slick({
        slidesToShow: 1,
        responsive: [
            {
                breakpoint: 480,
                settings: {
                    arrows: false,
                    slidesToShow: 1
                }
            }
        ]
    });
    //Слайдеры "о нас"
    $('.cert_about').slick({
        slidesToShow: 3,
    });
    $('.partners_logo_wrapper').slick({
        slidesToShow: 3,
    });
    //


    //Удаление блоков на табах
    $('#sets_tab').click(function () {
        $('.more_services').css({display: 'block'})
    });
    $('#about_tab').click(function () {
        $('.more_services').css({display: 'block'})
    });
    $('#stabs_tab').click(function () {
        $('.more_services').css({display: 'none'})
    });
    $('#feedbacks_tab').click(function () {
        $('.more_services').css({display: 'block'})
    });
    $('#video_tabs').click(function () {
        $('.more_services').css({display: 'none'})
    });
    $('#analogs_tab').click(function () {
        $('.more_services').css({display: 'block'})
    });
    $('#present_tab').click(function () {
        $('.more_services').css({display: 'none'})
    });
    //

    //Слайдеры на карточе товара
    $('.focus_photo_wrapper').slick({
        slidesToShow: 1,
        arrows: false,
        slidesToScroll: 1,
        fade: true,
    })
    $('.card_photo_mini_wrapper').slick({
        slidesToShow: 5,
        asNavFor: '.focus_photo_wrapper',
        focusOnSelect: true,
        responsive: [
            {
                breakpoint: 1279,
                settings: {
                    slidesToShow: 4,
                    infinite: true,
                    dots: true,
                    arrows: false
                }
            }
        ]
    })

    //

    //Табы товаров
    $('.tab-content').hide();
    $('.tab-content:first').show();
    $('.tabItem:first').addClass('active_main_tab');
    $('.tabs a').click(function () {
        let tabs = $('.active_main_tab');
        $(tabs).removeClass('active_main_tab');
        $(this).parent().addClass('active_main_tab');
        $('.tab-content').hide();
        var selectTab = $(this).attr("href");
        $(selectTab).fadeIn();
        return false;
    });
    //

    //табы товаров кнопки вперед назад
    $('.change').click(function () {
        let tabs = $('.active_main_tab');
        let visibleTab = $('.tabs-container :visible').first();
        let canChangeUp = $(visibleTab).next('.tab-content').length;
        let canChangeDown = $(visibleTab).prev('.tab-content').length;
        console.log(canChangeUp);
        if ($(this).hasClass('next') && canChangeUp) {

            tabs.removeClass('active_main_tab');
            tabs.next('.tabItem').addClass('active_main_tab');
            visibleTab.hide();
            $(visibleTab).next('.tab-content').fadeIn()
        }
        if ($(this).hasClass('prev') && canChangeDown) {
            tabs.removeClass('active');
            tabs.prev('.tabItem').addClass('active_main_tab');
            visibleTab.hide();
            $(visibleTab).prev('.tab-content').fadeIn()
        }
    });
    $(".goods_main_nav li a,.goods_main_nav img").click(function () {
        $("html, body").animate({scrollTop: 300}, 850);

    });
    //адаптив ховера
    $(".btn").click(function () {
        if ($('.second_header_adaptive').hasClass("show")) {
            $('.second_header_adaptive').removeClass("show")
        } else {
            $('.second_header_adaptive').addClass("show")
        }
    });

    //табы карточки
    $(".tab_item").not(":first").hide(300);
    $(".card_tabs_wrapper_nav .card_tabs_wrapper_nav_item").click(function () {
        $(".card_tabs_wrapper_nav_item a").eq($(this).index()).addClass("active");
        $(this).addClass('underline')
        $(this).siblings().removeClass('underline')
        $(".tab_item").hide().eq($(this).index()).fadeIn()

    }).eq(0).addClass("active");


    //Фильтр
    if ($(window).width() < 991) {
        $('.filter_title').addClass('filter_active').siblings().slideUp()
    }
    $('.sort_and_filter .filter').click(function () {

        if ($('.filters_list').hasClass("active")) {
            $('.filters_list').removeClass("active");
        } else {
            $('.filters_list').addClass("active");
        }
    });
    var mainAccord = $('.filters_list .filter_title');
    mainAccord.click(function () {
        if ($(this).hasClass("filter_active")) {
            $(this).removeClass("filter_active").siblings().slideDown();
        } else {
            $(this).addClass("filter_active").siblings().slideUp();
        }
    });

//Аккордеон гарантии
    $('.garant_block_title').addClass("garant_title_hide").siblings().slideUp()
    var accordGarant = $('.garant_block_title');
    accordGarant.click(function () {
        if ($(this).hasClass("garant_title_hide")) {
            $(this).removeClass("garant_title_hide").siblings().slideDown();
        } else {
            $(this).addClass("garant_title_hide").siblings().slideUp();
        }
    });
    //Слайдеры на карточке товара

    $('#analogs_tab').click(function () {
        $('.cards_tab_wrapper_analogs').slick({
            slidesToShow: 4,
            responsive: [
                {
                    breakpoint: 1279,
                    settings: {
                        slidesToShow: 3,
                        infinite: true,
                        dots: true
                    }
                },
                {
                    breakpoint: 1000,
                    settings: {
                        slidesToShow: 2,
                        infinite: true,
                        dots: true

                    }
                },
                {
                    breakpoint: 750,
                    settings: {
                        slidesToShow: 1,
                        infinite: true,
                        dots: true

                    }
                }
            ]
        })
    });
    $('.you_was_seen_content').slick({
        slidesToShow: 4,
        responsive: [
            {
                breakpoint: 1279,
                settings: {
                    slidesToShow: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 1000,
                settings: {
                    slidesToShow: 2,
                    infinite: true,
                    dots: true

                }
            },
            {
                breakpoint: 750,
                settings: {
                    slidesToShow: 1,
                    infinite: true,
                    dots: true

                }
            }

        ]
    })
    $('.change_color_wrapper').slick({
        slidesToShow: 5,
        arrows: false,
        responsive: [
            {
                breakpoint: 1279,
                settings: {
                    slidesToShow: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 1000,
                settings: {
                    slidesToShow: 5,
                    infinite: true,

                }
            },

        ]
    });
    $('.card_tabs_wrapper_content').slick({
        infinite: false,
        slidesToShow: 5,
        responsive: [
            {
                breakpoint: 1279,
                settings: {
                    slidesToShow: 4,
                    dots: true
                }
            },
            {
                breakpoint: 1000,
                settings: {
                    slidesToShow: 3,
                    dots: true

                }
            },
            {
                breakpoint: 750,
                settings: {
                    slidesToShow: 2,
                    dots: true
                }
            }
        ]
    })
    $('.you_was_seen_content').slick({
        slidesToShow: 4,
        infinite: false
    })
    //Модальные окна
    $('.sign_in_account').click(function () {
        $('.modal').fadeIn().css("display", "flex");
        $('.close').click(function () {
            $('.auth').addClass('active').siblings().removeClass('active');
            $('.modal').fadeOut(0);
        })
        $('.auth').addClass('active');
        $('.forgot_password').click(function () {
            $('.auth').removeClass('active');
            $('.forgot_modal').addClass('active')
        });
        $('.create_fonomono_profile').click(function () {
            $('.register').addClass('active').siblings().removeClass('active')
        })
        $(document).mouseup(function (e) {
            var container = $(".modal");
            if (container.has(e.target).length === 0) {
                $('.auth').addClass('active').siblings().removeClass('active');
                container.fadeOut(0);
            }
        });
    })
                //табы лк
    $(".cab_tab").not(":first").hide(300);
    $(".left_item").click(function () {
        $(this).addClass('active')
        $(this).siblings().removeClass('active')
        $(".cab_tab").hide().eq($(this).index()).fadeIn()
    }).eq(0).addClass("active");
            //переключение пола
    $('.sex').click(function () {
        if ($(this).hasClass("active")) {
            $(this).removeClass("active");
        } else {
            $(this).addClass("active");
            $(this).siblings().removeClass("active");
        }
    })
    $("#credit_anchor").on('click', function(event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function(){
                window.location.hash = hash;
            });
        }
    });

    //Форма вопроса
    $('#phone_question').mask("+375(99)999-99-99", {autoclear: false});
    $('#submit_question').click(function () {
        if ($('.contacts form')[0].checkValidity()) {    //прошло валидацию
            $('.contacts').css("display", "none");
            $('.question_accept').fadeIn();
            return false
        } else {
            //не прошло валидацию
        }
    });




});