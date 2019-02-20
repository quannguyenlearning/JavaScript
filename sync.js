function add(a, b, callback) {
    callback(a + b);
}

console.log('Before');
add(1, 2, result => console.log('Result:' + result));
console.log('After');