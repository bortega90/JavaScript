function myFunction () { //this function will add add two variables
    var a = 5;
    var b = 5;
    var c = a + b;
    document.getElementById("Math").innerHTML = c;
}

function myFunction_2 () { //this function will subtract two variables
    var d = 6; 
    var e = 4;
    var f = d - e;
    document.getElementById("Math_2").innerHTML = f;
}

function myFunction_3 () { //this function will multiply two variables
    var g = 7;
    var h = 8;
    var i = g * h;
    document.getElementById("Math_3").innerHTML = i;
}

function myFunction_4 () { //this function will divide two variables
    var j = 48;
    var k = 7;
    var l = j/k;
    document.getElementById("Math_4").innerHTML = l;
}

function myFunction_5 () { //this function will do PEMDAS
    var equations_math = (6+8) * 3 / 5-7;
    document.getElementById("Math_5").innerHTML = '6 plus 8, multiplied by 3 divide by 5 and then subtracted by 7 equals ' + equations_math;
}

function negation_Operator() { //will make variable b negative
    var b = 33
    document.getElementById("Math_6").innerHTML= -b;
}

var t = 7;
t++;
document.write(t);

var u = 8;
u--;
document.write(u);

window.alert(Math.random() * 20);