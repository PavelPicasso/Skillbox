let ruDate = {
	now: new Date(),
	day: 0,
	date: 0,
	month: 0,
	year: 0,
	hours: 0,
	minutes: 0,
	seconds: 0,
	ruDays: ["воскресенье", "понедельник", "вторник", "среда", "четверг", "пятница", "суббота"],
	ruMonth: ["января", "февраля", "мара", "апреля", "майя", "июня", "июля", "августа", "сентября", "октября", "ноября", "декабря"],
	
	declination: function(number, titles) {
		
		cases = [2, 0, 1, 1, 1, 2];
		if(number % 100 > 4 && number % 100 < 20) {
			return titles[2];
		} else {
			if ((number % 10 < 5)) {
				return titles[cases[number % 10]];
			} else {
				return titles[cases[5]];
			}
		}
		
		// if(number % 10 === 1 && number % 100 !== 11) {
		// 	return titles[0];
		// } else {
		// 	if(number % 10 <= 2 && number % 10 >= 4 && ( number % 100 > 10 || number % 100  <= 20)) {
		// 		return titles[1];
		// 	} else {
		// 		return titles[2];
		// 	}
		// }
	},
	init: function() {
		this.now = new Date();
		this.day = this.now.getDay();
		this.date = this.now.getDate();
		this.month = this.now.getMonth() + 1;
		this.year = this.now.getFullYear();
		this.hours = this.now.getHours();
		this.minutes = this.now.getMinutes();
		this.seconds = this.now.getSeconds();
	},
	getRuMonth: function() {
		return this.ruMonth[this.month];
	},
	getRuDays: function() {
		return this.ruDays[this.day]
	},
	getDateTime: function() {
		this.init();
		return `Сегодня ${this.date} ${this.getRuMonth()} ${this.year} ${this.declination(this.year, ['лет', 'год', 'года'])}, ${this.getRuDays()}, ${this.hours} ${this.declination(this.hours, ['час', 'часа', 'часов'])} ${this.minutes} ${this.declination(this.hours, ['минута', 'минуты', 'минут'])} ${this.seconds} ${this.declination(this.hours, ['секунда', 'секунды', 'секунд'])}`;
	},
	getData: function() {
		return this.now;
	}
}
console.log(ruDate.getData());

let timerId = setInterval(function() {
	currentTime = ruDate.getDateTime();
	console.log(currentTime);
}, 1000);

setTimeout(function() {
	clearInterval(timerId);
	alert('stop');
}, 10000);