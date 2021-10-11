// -- open header menu on mouse over --//

$("details").hover(
    function () {
        $(this).attr('open', true);
    },
    function () {
        $(this).attr('open', false);
    }
);

// -- review slider initialization -- //

$('.reviews-slider__slide-wrapper').slick({
    dots: false,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
});

