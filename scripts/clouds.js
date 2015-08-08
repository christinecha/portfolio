function moveCloudsRight() {
	$('.clouds').animate({
		left: "+=50"
		}, 4000, function(){
			moveCloudsLeft();
			console.log("working");
	});
};

function moveCloudsLeft() {
	$('.clouds').animate({
		left: "-=50"
		}, 4000, function(){
			moveCloudsRight();
			console.log("working");
	});
};

moveCloudsLeft();