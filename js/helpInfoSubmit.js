
    var elementIdHelpOutput = document.getElementById("submitForm");

    elementIdHelpOutput.onclick = function () {
    	 
	    var xhr = new XMLHttpRequest();

	    xhr.open('GET', '/js/helpSubmit.json', false);
	    xhr.send();


		if (xhr.status != 200) {
			// если ошибка то обработать ошибку
		document.getElementById('format').innerHTML = 'Ошибка ' + xhr.status + ': ' + xhr.statusText;
		} else {
			// если все ровно то вывести результат
		var textResponse = xhr.responseText;
		textResponse = JSON.parse(textResponse);

		var count = Object.getOwnPropertyNames(textResponse).length;
		var nameString = Object.getOwnPropertyNames(textResponse);		
		var stringOutput = '<br/><br/><ul><li>';

		for (var i = 0; i < count; i++) {
			var property = nameString[i];
			if (i != count - 1) {
				stringOutput += textResponse[property] + '</li><li>';
			}else{
				stringOutput += textResponse[property];
			}
		}

		document.getElementById('format').innerHTML = stringOutput + '</li></ul>';
    }
}
