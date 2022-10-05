$(document).ready(function () {
    var $mobileMenuButton = $('.headerSection header nav .mobileMenu');
    var $mobileNav = $('.headerSection header nav .mobileNav');
    var $mobileExit = $('.headerSection header nav .mobileNav .exitMobile');

    $mobileMenuButton.on("click", () => {
        $mobileNav.css('display', "flex");
    });

    $mobileExit.on("click", () => {
        $mobileNav.css('display', "none");
    });
});