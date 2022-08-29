let objects = [
    { name: 'Василий', surname: 'Васильев' },
    { name: 'Иван', surname: 'Иванов' },
    { name: 'Пётр', surname: 'Петров' }
]

function filterObj(objects, key, value) {
    const result = [];

    for (let i = 0; i < objects.length; i++) {
      const obj = objects[i];
  
      if (obj[key] === value) {
        result.push(obj);
      }
    }

    return result;
}
  
const filteredArray = filterObj(objects, 'name', 'Иван');
console.log(filteredArray);

// let result = objects.filter(item => item.name == 'Иван')
// console.log(result);

export default filterObj;