var box1 = document.getElementById("box1");
var left_control = document.getElementById("left");
var right_control = document.getElementById("right");


var index = 1;

var move_amount = 0;

function shift(direction) {

    var width = box1.offsetWidth;

	if (direction == "right") {

		move_amount = move_amount - width;

		box1.style.marginLeft = move_amount.toString() + "px";
		document.getElementById("box" + index.toString()).style.opacity = 0;
		document.getElementById("box" + (index+1).toString()).style.opacity = 1;

		index++;
		

	}

	else if (direction == "left") {
	
		move_amount = move_amount + width;
		
		box1.style.marginLeft = move_amount.toString() + "px";
		document.getElementById("box" + index.toString()).style.opacity = 0;
		document.getElementById("box" + (index-1).toString()).style.opacity = 1;
		
		
		index--;

	}
	
	if (1 < index < 4) {
	
		left_control.style.opacity = "1";
		left_control.style.pointerEvents = "unset";
		right_control.style.opacity = "1";
		right_control.style.pointerEvents = "unset";
	
	}
	
	if (index == 1) {
	
		left_control.style.opacity = "0.5";
		left_control.style.pointerEvents = "none";
	
	}
	
	if (index == 4) {
		right_control.style.opacity = "0.5";
		right_control.style.pointerEvents = "none";
	}
	

}