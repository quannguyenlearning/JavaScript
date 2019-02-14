// Sum an array
const myArray = [4, 6, 10, 5];
console.log(myArray.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
}));

// Flatten an array of arrays
console.log([[1, 2], [3, 4], [5, 6]].reduce((accumulator, currentValue) => {
    return accumulator.concat(currentValue);
}, []));

// Counting instances of values in an object
let names = ['Alice', 'Bob', 'Tiff', 'Bruce', 'Alice'];
console.log(names.reduce((allNames, name)=>{
    if (name in allNames) {
        allNames[name]++;
    } else {
        allNames[name] = 1;
    }
    return allNames;
}, {}));