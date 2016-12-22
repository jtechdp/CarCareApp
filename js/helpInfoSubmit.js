
    var e = document.getElementById("submitForm");

    e.onclick = function () {
    	 
	      var xhr = new XMLHttpRequest();

	      xhr.open('GET', '/js/helpSubmit.json', false);
	      xhr.send();


		if (xhr.status != 200) {
		// если ошибка то обработать ошибку
		document.getElementById('format').innerHTML = 'Ошибка ' + xhr.status + ': ' + xhr.statusText;
		} else {
		// если все ровно то вывести результат
		var textRes = xhr.responseText;
		textRes = JSON.parse(textRes);

		document.getElementById('format').innerHTML = '<br/><br/><ul><li>' + textRes.name + '</li><li>' +
			textRes.surname + '</li><li>' + textRes.tel + '</li><li>' + textRes.email + '</li><li>' +
			textRes.password + '</li><li>' + textRes.age + '</li><li>' + textRes.xz + '</li>';
			
		}

    }
