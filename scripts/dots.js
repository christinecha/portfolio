//create a 12 dotBoxes spread evenly across the window
function getBoxSize(){
	var boxWidth = $(window).width() / 30;
	return boxWidth;
};

function createBoxes(){
	for (i = 299; i >= 0; i--) {
		$('#grid').append("<div class='dotBox'><div class='dotarea'><div class='dot'></div></div></div>");
		$('.dotBox').css('width',getBoxSize());
		$('.dotBox').css('height',getBoxSize());
	};
};

getBoxSize();
createBoxes();



// CONNECT THE DOTS

var startDotSet = false;
var endDotSet = false;
var mouseX;
var mouseY;

//get mouse coords
$(document).mousemove(function(){
	mouseX = event.pageX;
	mouseY = event.pageY;
});

//if there is NO startdot yet
$('.dotarea').mouseenter(function(){
	if (startDotSet === false) {
		//name a startdot on mouseover
		$(this).children('.dot').addClass('startDot');
		console.log("added startdot Class");
		//tell program now there's a startdot!
		$('#canvas').append("<svg><line class=\"line\" x1=\"0\" y1=\"0\" x2=\"0\" y2=\"0\" /></svg>");
		$('#canvas line:last-child').unwrap();
		return startDotSet = true;
		//if there IS a startdot already
		} else {
		//name a enddot on mouseover
		$(this).children('.dot').addClass('endDot');
		console.log("added enddot Class");
		//tell program now there's an enddot!
		return endDotSet = true;
	};
});



//if there IS a startdot but no enddot
$(document).mousemove(function(){
	if ((startDotSet === true) && (endDotSet === false)) {
		//draw a line from startdot to mouse
		console.log("ok, ready to draw!");
		var startDotOffset = $('.startDot').offset();
		var endDotOffset = $('.endDot').offset();
		$('#canvas line:last-child').attr('x1', (parseInt(startDotOffset.left) + 5));
		$('#canvas line:last-child').attr('y1', (parseInt(startDotOffset.top) + 5));
		$('#canvas line:last-child').attr('x2', mouseX);
		$('#canvas line:last-child').attr('y2', mouseY);
	//if there is BOTH startdot and enddot
	} else if ((startDotSet === true) && (endDotSet === true)) {
		//build a line from startdot to enddot
		var startDotOffset = $('.startDot').offset();
		var endDotOffset = $('.endDot').offset();
		$('#canvas line:last-child').attr('x1', (parseInt(startDotOffset.left) + 5));
		$('#canvas line:last-child').attr('y1', (parseInt(startDotOffset.top) + 5));
		$('#canvas line:last-child').attr('x2', (parseInt(endDotOffset.left) + 5));
		$('#canvas line:last-child').attr('y2', (parseInt(endDotOffset.top) + 5));
		//remove classes startdot and enddot
		$('.startDot').removeClass('startDot');
		$('.endDot').addClass('startDot');
		$('.endDot').removeClass('endDot');
		//turn off startdot and enddot set
		startDotSet = true;
		endDotSet = false;
		//add a new potential line (invisible for now)
		$('#canvas').append("<svg><line class=\"line\" x1=\"0\" y1=\"0\" x2=\"0\" y2=\"0\" /></svg>");
		$('#canvas line:last-child').unwrap();
	};
});

$(document).click(function(){
	$('#canvas').empty();
});

$(document).scroll(function(){
	$('#canvas').attr('height', $(document).height());
	$('#canvas').attr('width', $(document).width());
});

$(window).resize(function(){
	$('#canvas').empty();
	$('#canvas').attr('height', $(document).height());
	$('#canvas').attr('width', $(document).width());
});

//re-measure & print anytime the window is resized
$(window).resize(function(){
	$('#grid').empty();
	getBoxSize();
	createBoxes();
});
