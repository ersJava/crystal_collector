$(document).ready(function(){

var win;
var lose;
var currentCount;

// ================================
var currentCrystalNum;
function currentNumber() {
    var a = document.getElementById("currentCrystalNum")
    a.innerText = Math.floor((Math.random() * 30) + 10);
    }
    currentNumber()
//================================ 

// *this is a loop that runs 4x and with console.log(crystals) will print crystals 4x
for (var i = 0; i < 4; i++) {
// declare a random var to generate a random num by math random
var randomValue = Math.floor((Math.random() * 9) + 1);
console.log(randomValue);

var dataId = $(this).attr('value' , randomValue);
console.log(dataId);
        
    }

// doesn't this code work? ughhhhhhhhh
$(startGame).ready(function() {
// listens to a click event with anything with the class "crystals", once clicked it listens 
$('.crystal').on('click', function() {

// converting string of integers to a new number from the random value from each crystal
// code doesn't work
    // var num =parseInt($(this).attr(randomValue));

    //current crystal count starts at 0, and adds number for var num
    var currentCount =+ num
    
    //if currentCount === to currentCrystalNum
    //alert "you win"
    // win;++

    //if else currentCount !== to currentCrystalNum
    //alert "try again"
    //lose++

    // I don't know!!! 

        });
    });
// ================================
var currentCrystalCount;
function currentCount() {
    var a = document.getElementById("currentCrystalCount").html
    currentCount()
}
//================================ 



});


