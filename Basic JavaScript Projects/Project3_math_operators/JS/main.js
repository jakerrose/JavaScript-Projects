//inserts addition equation into html id "Math1"//
function addition_Function() {
    var addition = 2 + 2;
    document.getElementById("Math").innerHTML = "2+2=" + addition;
}
//inserts subtration equation into html id "Math2"//
function subtraction_Function() {
    var Subtraction = 5 - 2;
    document.getElementById("Math1").innerHTML = "5 - 2 = " + Subtraction;
}
//inserts multiplication equation into html id "Math3"//
function multiplication() {
    var simple_Math = 6 * 8;
    document.getElementById("Math3").innerHTML = "6 X 8 =" + simple_Math;
}
//inserts divsion equation into html id "Math4"//
function division() {
    var simple_div = 48 / 6;
    document.getElementById("Math4").innerHTML = "48/6 =" + simple_div;
}
//inserts equation with multiple operators into html id "Math5"//
function more_Math() {
    var complex_Math = (1 + 2) * 10 / 2 - 5;
    document.getElementById("Math5").innerHTML = "1 plus 2, multiplied by 10, divided in half and then subtracted by 5 equals " + complex_Math;
}
//finds remainder and inserts into html id "Math6"//
function modulus() {
    var remainder = 25 % 6;
    document.getElementById("Math6").innerHTML = "When 25 is divided by 6, you get a remainder of " + remainder;
}
//retuns negative of variable x and inserts into html id "Math7"//
function negation_Operator() {
    var x = 10;
    document.getElementById("Math7").innerHTML = -x;
}
//increments var y up one whole number and inserts into html id "y"//
function increment() {
    var y = 5;
    y++;
    document.write(y);
}
//decrements var z down a whole number and inserts into html id "z"//
function decrement() {
    var z = 10;
    z--;
    document.write(z);
}
//creates random whole integer and displays in an alert box when button is clicked//
function random() {
    window.alert(Math.floor(Math.random() * 10) + 1);
}
//inserts Pi into html at id "Pi"//
document.getElementById("Pi").innerHTML = Math.PI;
//rounds up number 9.9 to nearest whole integer and inserts into html at id "round"//
document.getElementById("round").innerHTML = Math.round(9.9);
