window.onload = function() {
	fetch('https://api.github.com/repos/TrestanSimon/flare.observer/commits/main')
	.then(res => res.json())
	.then(out =>
		document.getElementById('commit-date').innerHTML = new Date(out.commit.author.date).toISOString().slice(0, -5)+'Z')
	.catch(err => console.log(err));
}
