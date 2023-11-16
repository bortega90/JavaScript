function KVP_function() { //assigning function to variables
    var pet = {     //assigning variable properites
        species: "Dog",
        color: "Tri-color",
        breed: "Corgi/Mix",
        Age: 2,
        Sound: "Bark!"
    };
    delete pet.Age; //deleting variable property
    document.getElementById("Dictionary").innerHTML = pet.species;
}