function readFile(file) {
	var reader = new XMLHttpRequest();
	reader.open('get', file, false);
	reader.onreadystatechange = function() {
		if (reader.readyState == 4) {
                return reader.responseText;
        }
	}
	reader.send(null);
	return reader.responseText;
}

function setText(file, id) {
	var array = readFile(file).split('\n');
	var r = Math.floor(Math.random() * (array.length));
	document.getElementById(id).innerHTML = array[r];
}