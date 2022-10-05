'use strict';

$(document).ready((function() 
{
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