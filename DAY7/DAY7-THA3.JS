var student = { name: "David Rayy", sclass: "VI", rollno: 12 };
var count = 0;
for (const item in student) {
    count += 1
}
console.log(count)