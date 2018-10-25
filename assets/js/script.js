$(document).ready(function () {
                                //Слайдер дсотавка
    $('.delivery_slides').slick({
        useCSS:true
    });
                                //

                                //Триггер кнопки каталог
    $(".label").click(function() {
        if($('.label_wrapper').hasClass("show")){
            $('.label_wrapper').removeClass("show")
        } else{
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
        asNavFor:'.main_slider_payment_wrapper'
    });
                                //

                                // синхронизация слайдеров
    $('.main_slider_payment_wrapper').on('swipe', function(event, slick, direction){
        if($(this).slick('slickCurrentSlide') === 0){
            $('.pay_card').addClass('black_payment').siblings().removeClass('black_payment');
        }else
        if($(this).slick('slickCurrentSlide') === 1 ){
            $('.courier_pay').addClass('black_payment').siblings().removeClass('black_payment');
        }else
        if($(this).slick('slickCurrentSlide') === 2){
            $('.bank_pay').addClass('black_payment').siblings().removeClass('black_payment');
        }
    });
    $('.nav_slider_payment_item').click(function () {
        $(this).addClass('black_payment').siblings().removeClass('black_payment');
    })

    $('.main_slider_payment_wrapper .slick-arrow').click(function () {
        if($('.main_slider_payment_wrapper').slick('slickCurrentSlide') === 0){
            $('.pay_card').addClass('black_payment').siblings().removeClass('black_payment');
        }else
        if($('.main_slider_payment_wrapper').slick('slickCurrentSlide') === 1 ){
            $('.courier_pay').addClass('black_payment').siblings().removeClass('black_payment');
        }else
        if($('.main_slider_payment_wrapper').slick('slickCurrentSlide') === 2){
            $('.bank_pay').addClass('black_payment').siblings().removeClass('black_payment');
        }
    })
    //

                                //якорь наверх страницы
    $('body').append('<img id="go-top" src="assets/img/icons/up.png" alt="">');
    $(function() {
        $.fn.scrollToTop = function() {
            $(this).hide().removeAttr("href");
            if ($(window).scrollTop() >= "250") $(this).fadeIn("slow")
            var scrollDiv = $(this);
            $(window).scroll(function() {
                if ($(window).scrollTop() <= "250") $(scrollDiv).fadeOut("slow")
                else $(scrollDiv).fadeIn("slow")
            });
            $(this).click(function() {
                $("html, body").animate({scrollTop: 0}, "slow")
            })
        }
    });

    $(function() {
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
    $('.stock_slide_block').slick({
        slidesToShow: 1,
        arrows: true
    });
                                //

                                //Удаление блоков на табах
    $('#sets_tab').click(function () {
        $('.more_services').css({display:'block'})
    });
    $('#about_tab').click(function () {
        $('.more_services').css({display:'block'})
    });
    $('#stabs_tab').click(function () {
        $('.more_services').css({display:'none'})
    });
    $('#feedbacks_tab').click(function () {
        $('.more_services').css({display:'block'})
    });
    $('#video_tabs').click(function () {
        $('.more_services').css({display:'none'})
    });
    $('#analogs_tab').click(function () {
        $('.more_services').css({display:'block'})
    });
    $('#present_tab').click(function () {
        $('.more_services').css({display:'none'})
    });
                                //

                                //Слайдеры на карточе товара
    $('.focus_photo_wrapper').slick({
        slidesToShow: 1,
        arrows:false,
        slidesToScroll: 1,
        fade: true,
    })
    $('.card_photo_mini_wrapper').slick({
        slidesToShow: 5,
        asNavFor: '.focus_photo_wrapper',
        focusOnSelect: true
    })
    $('.change_color_wrapper').slick({
        slidesToShow: 5,

    });
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
    $(".btn").click(function() {
        if($('.second_header_adaptive').hasClass("show")){
            $('.second_header_adaptive').removeClass("show")
        } else{
            $('.second_header_adaptive').addClass("show")
        }
    });

                                //табы карточки
    $(".tab_item").not(":first").hide(300);
    $(".card_tabs_wrapper_nav .card_tabs_wrapper_nav_item").click(function() {
        $(".card_tabs_wrapper_nav_item a").eq($(this).index()).addClass("active");
        $(this).addClass('underline')
        $(this).siblings().removeClass('underline')
        $(".tab_item").hide().eq($(this).index()).fadeIn()

    }).eq(0).addClass("active");


                                //Фильтр
    $('.sort_and_filter .filter').click(function () {
        $(this).css({
            color: '#ffffff',
            background: "#12b425",
            border: "1px solid #12b425",

        });
        $('.sort_and_filter .filter .lines div').css({
            background: "#ffffff"
        })
    });
    var mainAccord = $('.filters_list .filter_title');
    mainAccord.click(function() {
        if($(this).hasClass("filter_active")){
            $(this).removeClass("filter_active").siblings().slideDown();
        } else{
            $(this).addClass("filter_active").siblings().slideUp();
        }
    });

});