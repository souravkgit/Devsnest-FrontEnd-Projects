var arr1 = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
// arr1.sort()
count = 1;
val = "";
count1 = 1;
// console.log(arr1.sort())
for (let i = 1; i < arr1.length; i++) {
    if (arr1[i] == arr1[i - 1]) {
        count += 1;
    } else {
        count = 1;
    }
    if (count > count1) {
        count1 = count;
        val = arr1[i];
    }
}
console.log(val, ", " + count1 + " times")