function Vote_Function(){  //voting age indicator
    var Age, Can_vote;
    Age = document.getElementById("Age").value;
    Can_vote = (Age<18)? "You are too young":"You are old enough";
    document.getElementById("Vote").innerHTML = Can_vote + " to vote.";
}


function wise_Fucntion() {
    var Age, Wisdom;
    Age = document.getElementById("Age").value;
    Wisdom = (Age<33)? "You are not ":"You are ";
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