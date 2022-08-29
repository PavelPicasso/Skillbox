function filterArray(source, block) {
    let result = [];
    for (let item of source) {
        if (!block.includes(item)) {
            result.push(item);
        }
    }
    return result;
}

console.log(filterArray(['1', '2', '3', '4', '5'], ['3', '4']));
console.log(filterArray(['1', '2', '3', '4', '5'], ['0', '3', '4']));
console.log(filterArray(['1', '2', '3', '4', '5'], ['6', '7', '8']));
console.log(filterArray([], ['6', '7', '8']));
console.log(filterArray(['6', '7', '8'], ['6', '7', '8']));
console.log(filterArray(['6', '7', '8'], []));

export default filterArray;