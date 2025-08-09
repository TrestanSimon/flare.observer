window.onload = function() {
	document.getElementById("last-modified").innerHTML = new Date(document.lastModified).toISOString().slice(0, 19) + 'Z';
}
