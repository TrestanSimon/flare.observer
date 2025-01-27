window.onload = function() {
	document.getElementById('commit-date').innerHTML = new Date(document.lastModified).toISOString().slice(0, -5)+'Z'
}
