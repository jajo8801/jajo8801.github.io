


function openTab(evt, tab_name){

	var tab_name, tab_links;

	tab_content = document.getElementsByClassName("tabs_names");
	tab_links = document.getElementsByClassName("tab_links");

	for (var i = tab_content.length - 1; i >= 0; i--) {
		tab_content[i].style.display = "none";
	}

	for (var i = tab_links.length - 1; i >= 0; i--) {
		tab_links[i].className = tab_links[i].className.replace(" active", "");
	}

	document.getElementById(tab_name).style.display = "block";

	if(evt != null){
		evt.currentTarget.className += " active"
	}

}


function dialNumber(evt, input, text_output){
	if(input === "dial"){
		document.getElementById(text_output).value = "Dialing: " + document.getElementById(text_output).value;
	}else if(input === "clear"){
		document.getElementById(text_output).value = '';
	}else{
		document.getElementById(text_output).value = document.getElementById(text_output).value + input;
	}

}
