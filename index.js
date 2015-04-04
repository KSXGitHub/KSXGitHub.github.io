
function main(){
	function elements_creation(){
		var htmlns = "http://www.w3.org/1999/xhtml";
		var bodyElement = document.body;
		var tipText = document.createTextNode("Hello! Click the button below to view the message");
		var buttonText = document.createTextNode("Click here");
		var tipElement = document.createElementNS(htmlns, "div");
		var button = document.createElementNS(htmlns, "button");
		var buttonContainer = document.createElementNS(htmlns, "div");
		bodyElement.insertBefore(tipElement, null);
		bodyElement.insertBefore(buttonContainer, null);
		tipElement.insertBefore(tipText, null);
		buttonContainer.insertBefore(button, null);
		button.insertBefore(buttonText, null);
		return 0;
	}
	function events_creation(){
		button.addEventListener("click", button_onClick, false);
		return 0;
	}
	elements_creation();
	events_creation();
	return 0;
}

function button_onClick(event){
	alert("Hello World!!");
}

main();
