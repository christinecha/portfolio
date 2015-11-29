$('.aesthetic').on('mouseenter', 'img', function(){
  var color = $(this).attr('data-color');
  $(this).css('border-color', color);
});

$('.aesthetic').on('mouseleave', 'img', function(){
  $(this).css('border-color', '');
});

var captions = [
  'Album artwork<br>for jazz guitarist Gilad Hekselman<br><br><span class="xs">(DRAG/DROP + DOUBLE-CLICK TO EXPLORE)</span>',
  'Dibbl<br>a web app for one-on-one education<br><br><span class="xs">(HTML/CSS/JS + FIREBASE)</span>',
  'Connect the dots<br>a toy app<br><span class="xs">(HTML/CSS/JS)</span>',
  'Kebab King<br>UI design<br><span class="xs">(ILLUSTRATOR)</span>',
  'Open Market NYC<br>Festival Guide (PRINT)<br><span class="xs">(SCROLL TO VIEW)</span>',
  'GIFS! GIFS! GIFS!<br>Animated Illustrations<br><span class="xs">(ILLUSTRATOR/PHOTOSHOP)</span>',
  'OR BAREKET<br>Logo + Brand Assets<br><span class="xs">(CHOOSE A COLOR)</span>',
];

$('.aesthetic').on('click', 'img', function(){
  $('.caption').html('');
  $('.displaybox').hide();
  $('.block-1').css('background-image', 'none');

  var num = $(this).attr('data-num');
  var displaybox = '.displaybox-' + num;

  $(displaybox).show();
  $('.caption').html(captions[num]);

  $( ".draggable-within-parent" ).draggable();
});

$('img').on('dblclick', function(){
  if ($(this).attr('src') == 'assets/gilad-large.png'){
    $(this).attr('src', 'assets/gilad-xl.png');
  } else if ($(this).attr('src') == 'assets/gilad-xl.png'){
    $(this).attr('src', 'assets/gilad-large.png');
  };
});

$('.closeIcon').on('click', function(){
  $(this).parent('.displaybox').hide();
  $('.caption').html('choose a letter');
  $('.block-1').css('background-image', 'url("assets/headshot_christinecha.png")');
});

// generate random swatches
var hexChar = ['0','1','2','3','4','5','6','7','8','9','a','b','c','d','e','f'];
var hexCode = '#';
var chooseRandomSwatches = function(){
  $('.swatch').each(function() {
    for (var i = 0; i < 6; i++) {
      var x = Math.floor((Math.random() * hexChar.length - 1) + 1);
      hexCode+= hexChar[x];
    };
    $(this).css('background-color', hexCode);
    hexCode = '#';
  });
};
chooseRandomSwatches();

$('.swatch').on('click', function(){
  var color = $(this).css('background-color');
  chooseRandomSwatches();
  $('.displaybox-6').css('background-color', color);
});
