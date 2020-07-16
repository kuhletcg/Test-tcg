function multiply (array) {
    var sum=1;
    for (var i=0; i<array.length; i++) {
        sum = sum * array[i];
    } 
    return sum;
}
console.log(multiply[1,2,3]);
var txt = "";
var numbers = [24, 8, 23, 32, 5, 62];
numbers.forEach(myFunction);

function myFunction(value) {
  txt = txt + value + "<br>";
}