$(document).foundation()


var distance = $('.tabbed-search').offset().top - 81 ;

$(window).scroll(function() {
    if ( $(this).scrollTop() >= distance ) {
        $('.tabbed-search').addClass('fixed_aside');
    } else {
        $('.tabbed-search').removeClass('fixed_aside');
    }
});
