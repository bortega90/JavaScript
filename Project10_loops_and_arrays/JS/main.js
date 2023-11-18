//while loops
function Call_Loop() {
    var digit = "";
    var E = 1;
    while (E < 11) {
        digit += "<br>" + E;
        E++;
    }
    document.getElementById("Loop").innerHTML = digit;
}


//for loops
var Instruments = ["Guitar", "Drums", "Piano", "Bass", "Violin", "Trumpet", "Flute"];
var Content = "";
var Y;
function for_Loop() {
    for (Y = 0; Y < Instruments.length; Y++) {
    Content += Instruments[Y] + "<br>";
    }
    document.getElementById("List_of_Instruments").innerHTML = Content;
}

//Arrays and objects
function array_Function() {
    var pet_pictures = [];
    pet_pictures[0] = "first bath";
    pet_pictures[1] = "dog park play date";
    pet_pictures[2] = "sleeping";
    document.getElementById("Array").innerHTML = "Here is Ollie's  " + pet_pictures[1] + ".";
}
//constants keywords
function constant_function() {
    const Music_Instruments = {type:"guitar", brand: "Fender", color:"black"};
    Music_Instruments.color= "blue";
    Music_Instruments.price = "$900";
    document.getElementById("Constant").innerHTML = "The cost of the " + Music_Instruments.type + " was " + Music_Instruments.price;
}

//'let'keyword
var B = 33;
document.write(B);
{
    let B = -33;
    document.write("<br>" + B);
}
document.write("<br>" + B);

//objects 
let car = {
    make: "Toyota",
    model: "Pickup 3rd Gen",
    year: "1993",
    color: "red",
    description: function() {
        return "The car is a " + this.year + this.color + this.make + this.model;
        }
};
document.getElementById("Car_Object").innerHTML = car.description(); //car.description isn't working 
