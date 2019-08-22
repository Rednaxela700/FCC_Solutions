// Example
var sum = 0;
function addThree() {
    sum = sum + 3;
}

// Only change code below this line
function  addFive() {
    sum += 5; //adding five to global variable in local scope
    //no return is it's undefined
}


// Only change code above this line
var returnedValue = addFive();