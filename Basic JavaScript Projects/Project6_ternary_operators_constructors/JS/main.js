function Vote_Function() {
    var Age, Can_vote;
    Age = document.getElementById("Age").value;
    Can_vote = (Age < 18) ? "You are too young" : "You are old enough"; //Conditional (ternary) operator ? assigns value to a variable based on condition
    document.getElementById("vote").innerHTML = Can_vote + " to vote.";
}
function Vehicle(Make, Model, Year, Color) { //function using constructor
    this.Vehicle_Make = Make; //uses keyword 'this' as placeholder
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;
}
var Jack = new Vehicle("Dodge", "Viper", 2020, "Red"); //The name is the identifier, 'new' is the keyword
var Emily = new Vehicle("Jeep", "Trail Hawk", 2019, "White and Black");
var Erik = new Vehicle("Ford", "Pinto", 1971, "Mustard");
function myFunction() {
    document.getElementById("New_and_This").innerHTML = //pushes to HTML using id 'New_and_This'
        "Erik drives a " + Erik.Vehicle_Color + "-colored " + Erik.Vehicle_Model + 
        " manufactured in  " + Erik.Vehicle_Year;
}
function count_Function() { //function to count up, starting at var Starting_Point and using function Plus_one()
    document.getElementById("Nested_Function").innerHTML = Count();
    function Count() {
        var Starting_point = 9;
        function Plus_one() { Starting_point += 1; } //nested function
        Plus_one();
        return Starting_point;
    }
}