$(document).ready(function(){
$('.multiple-items').slick({
  infinite: true,
  slidesToShow: 5,
  slidesToScroll: 2
});
});

$('.slider-for').slick({
  slidesToShow: 5,
  slidesToScroll: 2,
  arrows: false,
  fade: true,
  asNavFor: '.slider-nav'
});

$('.slider-nav').slick({
  slidesToShow: 5,
  slidesToScroll: 2,
  asNavFor: '.slider-for',
  dots: true,
  centerMode: true,
  focusOnSelect: true
});

$('.autoplay').slick({
  slidesToShow: 5,
  slidesToScroll: 2,
  autoplay: true,
  autoplaySpeed: 2000,
});