// Example
var ourArray = [];

for (var i = 0; i < 10; i += 2) {
    ourArray.push(i);
}

// Setup
var myArray = [];

// Only change code below this line.
for (i = 2; i < 12; i += 2) {
    myArray.push(i -1);
    console.log(myArray)
}
// Second solution

for (i = 0; i < 10; i += 2) {
    myArray.push(i +1)
    // if (i % 2 !== 0) {
    //     myArray.push(i);
    // }
}