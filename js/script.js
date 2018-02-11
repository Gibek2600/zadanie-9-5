var buttons = document.getElementsByClassName('button');

for (k = 0; k <= buttons.length; k++) {
	var text = buttons[k].innerText;
	console.log(text);
	alert(text);
}