$('.projects').children().hide();
$('.projects div').first().show().addClass('currentSlide');

$('.nextArrow').click(function(){
  $('.currentSlide').hide();
  if ($('.currentSlide').next().length === 0){
    $('.projects div').first().show().addClass('nextSlide');
  } else {
    $('.currentSlide').next().show().addClass('nextSlide');
  };
  $('.currentSlide').removeClass('currentSlide');
  $('.nextSlide').addClass('currentSlide');
  $('.slide').removeClass('nextSlide');
});

$('.prevArrow').click(function(){
  $('.currentSlide').hide();
  if ($('.currentSlide').prev().length === 0){
    $('.projects div').last().show().addClass('nextSlide');
  } else {
    $('.currentSlide').prev().show().addClass('nextSlide');
  };
    $('.currentSlide').removeClass('currentSlide');
    $('.nextSlide').addClass('currentSlide');
    $('.slide').removeClass('nextSlide');
});
