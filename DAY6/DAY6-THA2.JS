function clone(test) {
    ret = []
    for (el of test) {
        ret.push(el)
    }
    return ret
}

console.log(clone([1, 2, 4, 0]))
console.log(clone([1, 2, [4, 0]]))