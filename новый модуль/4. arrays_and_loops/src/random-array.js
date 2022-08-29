/* eslint-disable no-param-reassign */
// это функция, внутри которой нужно написать ваш код
// count, n и m будут задаваться в момент вызова функции, как в примере кода под ней
function randomArray(count, n, m) {
  let arr = [];

  [m, n] = [n, m];

  if (n <= m) {
    while (n <= m && arr.length < count) {
      arr.push(Math.round(Math.random() * (m - n) + n));
    }
  } else {
    while (n >= m && arr.length < count) {
      arr.push(Math.round(Math.random() * (n - m) + m));
    }
  }

  console.log(arr);
}

// вызов функции
randomArray(10, 10, 100); // вывести массив из 10-ти случайных чисел от 10 до 100
randomArray(2, 5, 1); // вывести массив из 2-х случайных чисел от 1 до 5
// можете вызывать функцию сколько угодно раз подряд с различными параметрами

// строка ниже необходима, чтобы работало автоматическое тестирование
// не изменяйте этот код!
export default randomArray;
