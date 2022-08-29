function game(number, hiddenNumber) {
	if (isFinite(number) && number !== "") {
		if(parseInt(number) > hiddenNumber) {
			return "Меньше!";
		}

		if(parseInt(number) < hiddenNumber) {
			return "Больше!";
		}

		if(parseInt(number) === hiddenNumber) {
			return "Правильно!";
		}
	} else {
		return "Введи число!";
	}
}


var hiddenNumber = parseInt(Math.random() * (1000 - 1) + 1);
alert(hiddenNumber);

let number = prompt("Введите число, для своего варианта отгадки");
debugger
while (number != null) {
	let result = game(number, hiddenNumber);
	alert(result);
	
	if(result === "Правильно!") {
		break;
	} else {
		number = prompt("Введите число");
	}
}

alert("Игра закончилась!");