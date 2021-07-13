function first(test, n) {
    if (n < 0) {
        return []
    }
    if (test.length <= n) {
        return test
    }
    if (n == null) {
        return test[0]
    }
    return test.slice(0, n)
}
console.log(first([7, 9, 0, -2]));

console.log(first([], 3));

console.log(first([7, 9, 0, -2], 3));

console.log(first([7, 9, 0, -2], 6));

console.log(first([7, 9, 0, -2], -3))