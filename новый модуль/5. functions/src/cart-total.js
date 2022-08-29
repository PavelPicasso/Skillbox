function calculate(sum, items, promocode) {
    if (promocode === 'ДАРИМ300') {
      sum = sum - 300;
      
      if (sum <= 0) {
        sum = 0;
      }
    }

    if (items >= 10) {
      sum = sum - (sum*5/100);
    }

    if (sum > 50000) {
      sum = 50000 + (sum - 50000) * 0.8;
    }

    if (promocode === 'СКИДКА15' && sum >= 20000) {
      sum = sum - (sum * 15 / 100);
    }

    return sum;
  }
  
  calculate(500, 10, 'ДАРИМ300')

  console.log(calculate(500, 10, 'ДАРИМ300'))
  console.log(calculate(52000, 5, 'ДАРИМ300'))
  console.log(calculate(50000, 1, 'СКИДКА15'))
  console.log(calculate(500, 10,))

  export default calculate;