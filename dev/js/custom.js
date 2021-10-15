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

// -- product slider initialization -- //

$('.product__slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    fade: true,
    dots: false,
    asNavFor: '.product__thumbnail-slider'
  });
  $('.product__thumbnail-slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.product__slider',
    // vertical: true,
    // verticalSwiping: true,
    dots: false,
    arrows: false,
    focusOnSelect: true
  });