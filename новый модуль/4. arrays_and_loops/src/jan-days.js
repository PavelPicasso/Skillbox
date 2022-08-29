// это функция, внутри которой нужно написать ваш код
// firstWeekDay будет задаваться в момент вызова функции, как в примере кода под ней
function januaryDays(firstWeekDay) {
  let array = [];
  let week = ['понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота', 'воскресенье'];

  let indexWeek = week.indexOf(firstWeekDay);

  for (let i = 1; i < 32; i++) {
    array.push(i);
  }

  for (let elem of array) {
    const y = (indexWeek + elem - 1) % 7;
    console.log(`${elem} января, ${week[y]}`);
  }
}

// выполнение кода внутри функции
januaryDays('понедельник'); // вывести все дни недели января, если 1-я января - понедельник
januaryDays('среда'); // вывести все дни недели января, если 1-я января - среда
januaryDays('воскресенье'); // вывести все дни недели января, если 1-я января - воскресенье
// можете вызывать функцию сколько угодно раз подряд с различными параметрами

// строка ниже необходима, чтобы работало автоматическое тестирование
// не изменяйте этот код!
export default januaryDays;
