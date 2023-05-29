function my_Dictionary() { //Names the dictionary
    var Animal = {  //Names object Animal
        Species: "Cat", //key value pair
        Color: "Brown", //key value pair
        Breed: "Domestic Shorthair", //key value pair
        Age: 6, //key value pair
        Sound: "Meh!" //key value pair
    };
    delete Animal.Age; //deletes key Age
    document.getElementById("Dictionary").innerHTML = Animal.Sound; //Pushes the value of key Sound to HTML
}