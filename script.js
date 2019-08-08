var showFront = false;
var showBack = false;

function show(card) {
	if (card == "front") {
		if (showFront) {
			document.getElementById("frontInfo").style.display = "none";
			showFront = false;
		} else {
			document.getElementById("backInfo").style.display = "none";
			showBack = false;
			document.getElementById("frontInfo").style.display = "block";
			showFront = true;
		}
	} else if (card == "back") {
		if (showBack) {
			document.getElementById("backInfo").style.display = "none";
			showBack = false;
		} else {
			document.getElementById("frontInfo").style.display = "none";
			showFront = false;
			document.getElementById("backInfo").style.display = "block";
			showBack = true;
		}
	}
}

function mouseOver(card, type) {
	card.style.backgroundColor = "rgb(0, 137, 123)";
	card.style.color = "white";
	show(type)
}

function mouseOut(card, type) {
	card.style.backgroundColor = "white";
	card.style.color = "black";
	show(type)
}