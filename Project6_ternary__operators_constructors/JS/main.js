function Vote_Function(){  //voting age indicator
    var Age, Can_vote;
    Age = document.getElementById("Age").value;
    Can_vote = (Age<18)? "You are too young":"You are old enough";
    document.getElementById("Vote").innerHTML = Can_vote + " to vote.";
}


function wise_Function() {
    var Age, Wisdom;
    Age = document.getElementById("Age").value;
    Wisdom = (Age>32)? "You are not ":"You are ";
    document.getElementById("New_and_This").innerHTML = Wisdom + "wise. ";
}

function nest_Fun() {       //nested function
    document.getElementById("Nested_Function").innerHTML = nest();
    function nest() {
        var start = 0;
        function add_one() {start += 1;}
        add_one();
        return start;
    }
}

function Vehicle(Make, Model, Year, Color) {
    this.Vehicle_Make = Make;
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;
}
var Jack = new Vehicle("Dodge", "Viper", 2020, "Red");
var Emily = new Vehicle("Jeep", "Trail Hawk", 2019, "White and Black");
var Erik = new Vehicle("Ford", "Pinto", 1971, "Mustard");
function myFunction() {
    document.getElementById("Keywords_and_constructors").innerHTML = "Erik drives a " + Erik.Vehicle_Color + "-colored " + Erik.Vehicle_Model + " manufactured in " + Erik.Vehicle_Year;
}