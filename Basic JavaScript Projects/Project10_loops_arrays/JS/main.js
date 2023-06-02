function Call_Loop() { //a while loop. Starting at 1, loop will increase number each loop while the value is under 11
    var Digit = "";
    var X = 1;
    while (X < 11) {
        Digit += "<br>" + X;
        X++;
    }
    document.getElementById("Loop").innerHTML = Digit;
}
function string_Length() { //returns the length of the charaters of the string
    var text = "Helloooo woild!";
    var length = text.length;
    document.getElementById("Length").innerHTML = length;
}

//An object "Instruments" with an array is looped until all are returned to HTML
var Instruments = ["Guitar", "Drums", "Piano", "Bass", "Violin", "Trumpet", "Flute"];
var Content = "";
var Y;
function for_Loop() {
    for (Y = 0; Y < Instruments.length; Y++) {
        Content += Instruments[Y] + "<br>";
    }
    document.getElementById("List_of_Instruments").innerHTML = Content;
}
    //an array in which a specific value is returned
function array_Function() {
    var Cat_Picture = [];
    Cat_Picture[0] = "sleeping";
    Cat_Picture[1] = "playing";
    Cat_Picture[2] = "eating";
    Cat_Picture[3] = "purring";
    document.getElementById("Array").innerHTML = "In this picture, the cat is " +
        Cat_Picture[2] + ".";
}   
//an array in which specific variables are returned and there is a constant
function constant_function() {
    const Musical_Instrument = { type: "guitar", brand: "Fender", color: "black", feature: "Whammy bar"};
    Musical_Instrument.color = "blue";
    Musical_Instrument.price = "$1900";
    document.getElementById("Constant").innerHTML = "The cost of the " +
        Musical_Instrument.type + " was " + Musical_Instrument.price + " and had an extra " +Musical_Instrument.feature + ".";
} 
//a function with a function scope variable
function let_Variable() {
    var X = 82;
    document.write(X)
    {
        var X = 33;
        document.write("<br>" + X);
    }
    document.write("<br>" +X)
}
//using return function to get value of Pi
    function return_function() {
        return Math.PI;
    }
    document.getElementById("return").innerHTML = return_function();

//creating object using 'let' keyword, using 'this' keyword to return values
    let car = {
        make: "Dodge ",
        model: "Viper ",
        year: "2021 ",
        color: "red ",
        description : function() {
        return "The car is a " + this.year + this.color + this.make
            + this.model;
            }
        };
document.getElementById("Car_Object").innerHTML = car.description();

//an example of using the 'continue' statement
let text = "";
for (let i = 0; i < 10; i++) {
    if (i === 2) { continue; }
    text += "The number is " + i + "<br>";
}
document.getElementById("break_statement").innerHTML = text;

document.write("<br>");


       