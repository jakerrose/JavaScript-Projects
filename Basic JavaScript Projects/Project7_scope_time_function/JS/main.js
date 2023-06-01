var X = 10; //Added global variable X
function Add_numbers_1() {
    document.write(20 + X + "<br>");
}
function Add_numbers_2() {
    document.write(X + 100); //accesses var X because it is global
}
Add_numbers_1();
Add_numbers_2();

document.write("<br>");

function Add_numbers_3() {
    var Y = 30; //added local variable Y
    document.write(10 + Y + "<br>");
}
function Add_numbers_4() {
    document.write(Y + 200); //cannot access Y because it is local to function Add_numbers_4
}
Add_numbers_3();
Add_numbers_4();


function get_Date() {
    if (new Date().getHours() > 17) { //using method getHours(), we can access the time
        document.getElementById("Greeting").innerHTML = "G'Evening Mate!"; //if time is 17:00 or after, prints good evening message
    }
    else {
        document.getElementById("Greeting").innerHTML = "Top o' the Morning Mate!";//if before 17:00, prints good morning message
    }
}
function Age_Function() { //function to determine if one can buy alcohol, user inputs age
    Age = document.getElementById("Age").value;
    if (Age >= 21) { //if age is 21 or older, user can buy alcohol
        Type = "You can get drunk!";
    }
    else {
        Type = "Can't get drunk yet, Young 'un! :("; //if younger than 21, user cannot buy alcohol
    }
    document.getElementById("How_old").innerHTML = Type;
}
function Time_function() {
    var Time = new Date().getHours(); //using method getHours() to access time
    var Reply;
    if (Time < 12 == Time > 0) { //if time is 12:00 or earlier and after 00:00, good morning message prints
        Reply = "GOOOOD morning";
    }
    else if (Timme >= 12 == Time < 18) { //if after 12:00 but before 18:00, good afternoon message prints
        Reply = "Yawn. Good afternoon";
    }
    else {
        Reply = "Nighty night, you get to go beddy by!"; //if after 18:00 and before or equal to 00:00, good night message prints
    }
    document.getElementById("Time_of_day").innerHTML = Reply;
}