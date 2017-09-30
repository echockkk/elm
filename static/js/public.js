window.onload = function() {
	var html = document.querySelector('html');
  	var width = html.getBoundingClientRect();
  	html.style.fontSize = width/16 + 'px';
}