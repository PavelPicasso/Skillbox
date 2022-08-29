// это функция, внутри которой нужно написать ваш код
// roadMines (массив ячеек поля) будет задаваться в момент вызова функции, как в примере кода под ней
function moveTank(roadMines) {
  let tankDamage = 0;
  let position = 1;

  for (let i = 0; i < roadMines.length; i++) {
    if (roadMines[i]) {
      tankDamage += 1;
      console.log('танк поврежден');
    }
    console.log(`танк переместился на ${position}`);

    position++;

    if (roadMines[i + 1] && tankDamage >= 1) {
      console.log(`танк переместился на ${position}`);
      console.log('танк уничтожен');
      break;
    }
  }
}

// вызов функции
moveTank([false, false, false, false, true, false, false, false, false, false]); // танк проедет по полю без мин
// можете вызывать функцию сколько угодно раз подряд с различными параметрами

// строка ниже необходима, чтобы работало автоматическое тестирование
// не изменяйте этот код!
export default moveTank;
