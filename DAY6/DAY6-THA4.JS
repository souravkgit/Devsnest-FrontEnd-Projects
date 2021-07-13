myColor = ["Red", "Green", "White", "Black"];

function mix(test) {
    var ret = ""
    for (el of test) {
        ret = ret + el + ","
    }
    rete = ret.substring(0, ret.length - 1);
    return rete
}
console.log(mix(myColor))