function full_Sentence() { //method concat() concatenates shorter strings into one longer string
    var part_1 = "The sentence is ";
    var part_2 = "I sentence you ";
    var part_3 = "to life in prison ";
    var part_4 = "because you clicked on that button.";
    var whole_sentence = part_1.concat(part_2, part_3, part_4);
    document.getElementById("Concatenate").innerHTML = whole_sentence;
}
function slice_Method() { //slice() method extracts part of a string when you define the position
    var Sentence = "All work and no play makes Jack a dough boy.";
    var Section = Sentence.slice(27, 31); //position is 27 through 31
    document.getElementById("Slice").innerHTML = Section;
}
function UpperC() { //toUpperCase() method converts string to uppercase
    var text1 = "ahhhhh!";
    var upper = text1.toUpperCase();
    document.getElementById("String").innerHTML = upper;
}
function SearchText() { //search() method finds and prints the position of a part of a string
    var text2 = "I am a smarty every live long day";
    var position = text2.search("smarty"); //the string to find
    document.getElementById("SearchMe").innerHTML = position;
}
function string_Method() { //toString() method returns a number as a string
    var X = 182;
    document.getElementById("Numbers_to_string").innerHTML = X.toString();
}
function precision_Method() { //toPrecision() shortens a number based on the length requested
    var Y = 1284.39383943213;
    document.getElementById("Precision").innerHTML = Y.toPrecision(8); //the number will be 8 digits long
}
function fixed_Method() { // toFixed()  method shortens the decimal place to requested number of digits
    var Z = 9.7894;
    document.getElementById("Rounded").innerHTML = Z.toFixed(2); //decimal place will be 2 digits long
}
function primitive_value() { // valueOf() method returns the primitive value of a string
    var text3 = "Hi Mom!";
    document.getElementById("Value").innerHTML = text3.valueOf();
}