//slideshow
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

//choosing phrases for "good design is..." section
var goodDesignIs = ["bold", "playful", "organized", "professional", "clean"];
var index = 0;
$('.good-design__textbox__dropdown').click(function(){
  if (index < (goodDesignIs.length - 1)){
    index+= 1;
  } else {
    index = 0;
  }
  $('.good-design__textbox__dropdown').html(goodDesignIs[index]);
  console.log(index);
});
