document.querySelector('span.mess-with-me').style.fontSize = "3em";

document.querySelector('p.mess-with-me').style.backgroundColor = "green";

document.querySelector('#hide-me-area').style.display = "none";

document.querySelector('#triceratops').style.width = '324px';

spanMess = document.querySelector('span.mess-with-me');
spanMess.addEventListener('click', makeOrange);
function makeOrange() {
	spanMess.style.backgroundColor = "orange";
}

triceratops = document.querySelector('#triceratops');
triceratops.addEventListener('click', redBorder);
function redBorder() {
	triceratops.style.border = "5px solid red";
}

feathers = document.querySelector("#feathers");
feathers.addEventListener('click', featherTrans);
function featherTrans() {
	feathers.style.opacity = '50%';
}

dinoRow = document.querySelector("#row");
button = document.querySelector("#toggle");
button.addEventListener('click', rowbg);
function rowbg() {
	let color = dinoRow.style.backgroundColor;

	if(color == "") {
		dinoRow.style.backgroundColor = "cyan";
	} else {
		dinoRow.style.backgroundColor = "";
	}
}

bigg = document.querySelector("#biggify");
bigg.addEventListener('mouseover', biggify);
bigg.addEventListener('mouseout', smallify);
function biggify() {
	bigg.style.width = '200px';
}
function smallify() {
	bigg.style.width = '';
}