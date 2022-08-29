var errorsList ='';
var firstName = prompt('Введите ваше имя');
if (!firstName) {
	errorsList += '\nError: Имя Неизвестно\n';
	firstName = 'Неизвестный';
}

var lastName = prompt('Введите вашу фамилию');
if (!lastName) {
	errorsList += 'Error: Фамилия Неизвестно\n';
	lastName = 'Неизвестный';
}

var birthYear = prompt('Введите ваш год рождения');

var age;
if (!birthYear) {
	errorsList += 'Error: Год рождения Неизвестно\n\nОбновите страницу и введите данные заново!';
	age = 'Неизвестно';
} else {
	var currentYear = 2019;
	age = currentYear - birthYear;
}

if (errorsList) {
	alert(errorsList);
} else {
	if (age < 20) {
		alert('Привет, ' + lastName + ' ' + firstName + '!');
	}
	else if (age >= 20 && age < 40) {
		alert('Добрый день, ' + lastName + ' ' + firstName);
	}
	else {
		alert('Здравствуйте, ' + lastName + ' ' + firstName);
	}
}