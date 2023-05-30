function not_Function() {
    document.getElementById("Not").innerHTML = !(20 > 10);//Using not operator
}
document.write(typeof "word"); //asking what type of operator
document.write("<br>");
document.write(10 == 10); //does 10=10?
document.write("<br>");
document.write(10 === "ten"); //asking if value and type are the same
document.write("<br>");
document.write(10 > 3); //using greater than operator
document.write("<br>");
document.write(10 > 3); //using less than operator
document.write("<br>");
document.write(10 > 3 && 10 > 2); //Boolean logic, asking if both are correct using AND operator
document.write("<br>");
document.write(10 > 3 || 10 > 11); //asking if either are correct with OR operator
document.write("<br>");
function coercion() {
    document.getElementById("coerce").innerHTML = 10 + "word"; //using a coercion to combine two different types
}
