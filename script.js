'use strict';
/* ========================= header ========================= */
$(function(){
        var $toggle = $('.gnb-toggle-btn'),
        $gnb = $('.gnb');

        $toggle.click(function(){
        $(this).toggleClass('active');
        $gnb.toggleClass('active');
        })
/* ========================= main banner ========================= */
        // main slider
    $('.main__banner').slick({
        dots:true,
        autoplay: true,
        autoplaySpeed: 2000,
});

// responsive
$('.responsive__slider').slick({
        dots: true,
        infinite: true,
        // autoplay: true,
        // autoplaySpeed: 2000,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 3,
        responsive: [
            {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
            }
            },
            {
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
            },
            {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
            }
        ]
});
/* ========================= modal ========================= */

var $modal = $('.modal');
var $overlay = $('.overlay');
var $btn = $('button');
var $btnClose = $('.close__modal');

    $overlay.hide();
    $btn.click(function(){
        $overlay.fadeIn();
    })
    $btnClose.click(function(){
        $overlay.fadeOut();
    });
    $overlay.click(function(e){
        // target은 내가 클릭한 객체
        // currentTarget은 이벤트가 발생한 객체
        if(e.target == e.currentTarget){
            $(this).fadeOut();
        }
    })      
})

