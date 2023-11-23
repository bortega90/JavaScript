function getReceipt() {
    //this initializes our string so it can get passed from
    //function to function, growing line by line into a full receipt
    var text1 = "<h3> You Ordered:</h3>";
    var runningTotal = 0;
    var sizeTotal = 0;
    var sizeArray = document.getElementsByClassName("size");
    for (var i = 0; i < sizeArray.length; i++) {
        if (sizeArray[i].checked) {
            var selectedSize = sizeArray[i].value;
            text1 = text1+selectedSize+"<br>";
        }
    }
    if (selectedSize === "One Pupusa") {
        sizeTotal = 2.50;
    } else if (selectedSize === "Two Pupusas") {
        sizeTotal = 5;
    } else if (selectedSize === "Three Pupusas") {
        sizeTotal = 8;
    } else if (selectedSize === "Tweleve Pupusas") {
        sizeTotal = 16;
    }
    runningTotal = sizeTotal;
    console.log(selectedSize+"= $"+sizeTotal+".00");
    console.log("size text1: "+text1);
    console.log("subtotal: $"+runningTotal+".00");
    //these variables will get passed on to each function
    getFilling(runningTotal,text1);
};
function getFilling(runningTotal, text1) {
    var fillingTotal = 0;
    var selectedFilling = [];
    var fillingArray = document.getElementsByClassName("fillings");
    for (var j = 0; j < fillingArray.length; j++) {
        if (fillingArray[j].checked) {
            selectedFilling.push(fillingArray[j].value);
            console.log("selected filling item: ("+fillingArray[j].value+")");
            text1 = text1+fillingArray[j].value+"<br>";
        }
    }
    var fillingCount = selectedFilling.length;
    if (fillingCount > 1) {
        fillingTotal = (fillingCount -1);
     } else {
            fillingTotal = 0;
        }
        runningTotal = (runningTotal + fillingTotal);
        console.log("total selected filling items: "+fillingCount);
        console.log(fillingCount+" topping - 1 free filling = "+"$"+fillingTotal+".00");
        console.log("filling text1: "+text1);
        console.log("Purchase Total: "+"$"+runningTotal+".00");
        document.getElementById("showText").innerHTML=text1;
        document.getElementById("totalPrice").innerHTML="<h3>Total: <strong>$"+runningTotal+".00"+"</strong></h3>";
    };
