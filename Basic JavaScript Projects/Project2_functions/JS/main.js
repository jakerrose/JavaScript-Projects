function My_First_Function() { //Defining a function by naming it
    var str = "This is the button text!"; //Defining a variable and giving it a string value
    document.getElementById("Button_Text").innerHTML = str; //getElementByID returns element with specific value. innerHTML sets HTML content.
}

function Second_Function() { //Defining a function by naming it
    var pop = alert("No kidding!"); //Uses event onmouseover to display alert box when hovering over text
    document.getElementById("PopUp").innerHTML = pop; //getElementByID returns element with specific value. innerHTML sets HTML content.
}

function Keystroke() {  //Defining a function by naming it
    var key = prompt("Type in here!", "Message"); //uses onkeydown event to bring up text box to type in when pressing key
    document.getElementById("Typing").innerHTML = key; //getElementByID returns element with specific value. innerHTML sets HTML content.
}

function myFunction() { //Defining a function by naming it
    var sentence = "I am learning"; //Defines variable as string
    sentence += " a lot from this book!"; //Concatenates two strings with += operator
    document.getElementById("Concatenate").innerHTML = sentence; //getElementByID returns element with specific value. innerHTML sets HTML content.
}