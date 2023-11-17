function full_sentence() {
    var part_1 = "I have ";
    var part_2 = "made this ";
    var part_3 = "into a complete ";
    var part_4 = "sentence. ";
    var whole_sentence = part_1.concat(part_2, part_3, part_4);
    document.getElementById("Concatenate").innerHTML = whole_sentence;
}

function slice_method() {
    var sentence = "All work and no play makes Johnny a dull boy.";
    var section = sentence.slice(27,33);
    document.getElementById("Slice").innerHTML = section;
}

//UpperCase 
let str = "hello world!";
let upperCaseStr = str.toUpperCase();
console.log(upperCaseStr);

//number methods
function string_Method() {
    var X = 182;
    document.getElementById("Numbers_to_string").innerHTML = X.toString();
}

//toPrecision() Method
function precision_Method() {
    var X = 12938.30129876112;
    document.getElementById("Precision").innerHTML = X.toPrecision(10);
}

//toFixed()method round to the hundreths place
function fixed_Method() {
    let num = 4.3453;
    let n = num.toFixed(2);
    document.getElementById("demo_1").innerHTML = n;
}

//valueOf()method
function value_Method() {
    let text = "Hola!";
    let result = text.valueOf();
    document.getElementById("demo_2").innerHTML = result;
}
