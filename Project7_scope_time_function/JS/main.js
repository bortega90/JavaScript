var X = 10; //global variable example
function Add_numbers_1() {
    document.write(20 + X + "<br>");
}
function Add_numbers_2() {
    document.write(X + 100);
}
Add_numbers_1();
Add_numbers_2();




//local variable example
function Add_numbers_1() {
    var X = 10;
    document.write(20 + X + "<br>");
}
function Add_number_2() {
    document.write(X + 100);
}
Add_numbers_1();
Add_numbers_2();

//console.log
//function Add_numbers_1() {
  //  var X = 10;
    //console.log(15 + X);
//}
//function Add_numbers_2() {
  //  console.log(X + 100);
//}
//Add_numbers_1();
//Add_number_2();

//if statements
function get_Date() {
    if (new Date().getHours() < 18) {
    document.getElementById("Greeting").innerHTML = "How are you today?";
    }
}

if(10 == 10) {
    document.write("Equal");
}

//else statement
function Age_function() {
    Age = document.getElementById("Age").value;
    if (Age >= 18) {
        Vote = "You are old enough to vote!";
    }
    else {
        Vote = "You are not old enough to vote";
    }
    document.getElementById("How_old_are_you?").innerHTML = Vote;
}

function Time_function() {
    var Time = new Date().getHours();
    var Reply;
    if (Time < 12 == Time > 0) {
        Reply = "It is morning time!";
    }
    else if (Time >= 12 == Time <18) {
        Reply = "It is afternoon. ";
    }
    else {
        Reply = "It is evening time.";
    }
    document.getElementById("Time_of_day").innerHTML = Reply;


}