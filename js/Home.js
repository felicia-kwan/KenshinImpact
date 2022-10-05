'use strict';

$(document).ready((function() 
{
    var marginMove = 1920;
    var animSpeed = 1000;
    var curSlide = 1;

    var $slides = $('.page header .background .slider .slides');

    var $arrows = $('.page header .arrowImage');
    var arrowDir = 1;

    setInterval(() => {
        $slides.animate({'margin-left' : '-='+marginMove}, animSpeed, () => {
            curSlide++;

            if(curSlide === 5)
            {
                curSlide = 1;
                $slides.css('margin-left', 0);
            }
        })
    }, (4000));

    setInterval(() => {
        $arrows.animate({'margin-top' : '+=' + arrowDir + '%'}, 500, () => {
            arrowDir *= -1;
        })      
    }, 550);

    var $mobileMenuButton = $('.page header nav .mobileMenu');
    var $mobileNav = $('.page header nav .mobileNav');
    var $mobileExit = $('.page header nav .mobileNav .exitMobile');

    $mobileMenuButton.on("click", () => {
        $mobileNav.css('display', "flex");
    });

    $mobileExit.on("click", () => {
        $mobileNav.css('display', "none");
    })
}));