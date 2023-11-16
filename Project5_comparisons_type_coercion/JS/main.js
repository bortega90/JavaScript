document.write("6" * 8) ;

document.write(typeof " Abba Dabba") ; //string statment

document.write(typeof 1056) ; //number

function my_Function() {
    document.getElementById("Test").innerHTML=0/50 ;
}

function my_Function_1() {
    document.getElementById("Test1").innerHTML=isNaN('586') ;

}

document.write(3E310) ; //infinity
document.write(-3E310 ); //negative infinity

document.write(10>2) ; 
document.write(10<2) ;
console.log(4==6) ; //false log console via dev tools

document.write(10==50) ;
document.write(4==4) ;

A = 9;
B = 8;
document.write(A === B) ;

C = "Ortega";
D = "Ortega";
document.write(C === D);

document.write(6<4 && 12>4); //ny and statements one true one false
document.write(2>1 && 6>5);

document.write(4<2 || 10>4); //my or statements one true one false
document.write(2>5 || 5>6);

function not_Function() {
    document.getElementById("Not").innerHTML = !(20>10); //false not operator
}

function yes_Function() {
    document.getElementById("Yes").innerHTML = (2==2); //true not operator
}