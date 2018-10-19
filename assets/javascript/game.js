$(document).ready(function(){

    //stores the input from the user's choice from crystals
    var input=[""];

    //string to store current input 
    var totalString;

    //operator
    var addition=["+"];
    var nums=[1,2,3,4,5,6,7,8,9];
    var crystals=["imgOne", "imgTwo", "imgThree", "imgFour"];

    var currentCrystalNum;
    var win;
    var lose; 

    var imgOne;
    var imgTwo;
    var imgThree;
    var imgFour;

    var currentCrystalCount;

    function currentNumber() {
        var a = document.getElementById("currentCrystalNum")
        a.innerText = Math.floor((Math.random() * 30) + 10);
    }
    currentNumber()

    //everything is working
// let dwarves = ['d', 'a', 'r', 'k'];

// dwarves.forEach(output);

// function output(item, index, array) {
//     console.log(index, item);
// }

console.log('hello');

  
});