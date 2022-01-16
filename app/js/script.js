$(function(){
    $('.clients-slide').slick({
        arrows: false, 
        dots: true,
        dotsClass: 'slick-dots',
        slidesToShow: 3,
        slidesToScroll: 3,
        autoplay: true,
        autoplaySpeed: 3000,
        speed: 600,
        responsive: [
            {
              breakpoint: 1240,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
              }
            },
            {
                breakpoint: 630,
                settings: {
                    slidesToShow: 1,
                    centerMode: true,
                    centerPadding: '90px',
                    dots: false,
                }
            },
            {
                breakpoint: 500,
                settings: {
                    slidesToShow: 1,
                    centerMode: true,
                    centerPadding: '0',
                    dots: false,
                }
            }
           
        ]
    });
    $('.menu-btn').click(function(){
        $('.menu').toggleClass('menu_active');
        $('.menu-btn__line').toggleClass('menu_btn__line_active');
        $(this).toggleClass('menu-btn_active');
    });
})

setTimeout(function(){
    $('.preloader').fadeToggle();
});
AOS.init();