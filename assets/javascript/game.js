$(document).ready(function(){

// Global Variable
var win = 0;
var lose =0;
var currentCount=0;
var currentCrystalNum = Math.floor((Math.random() * 90) + 10);
var currentCrystalCount;


// Functions
function currentNumber() {
    var a = document.getElementById("currentCrystalNum")
    a.innerText = currentCrystalNum;
    }
   
function currentCount() {
    var a = document.getElementById("currentCrystalCount").html

}

for (var i = 1; i < 5; i++) {
    var randomValue = Math.floor((Math.random() * 12) + 1);
    $("#c" + i).attr('crystal-value' , randomValue)
    console.log(randomValue);
    }


// Logic
currentNumber();
 
$('.crystal').on('click', function() {

var crystalNumber = parseInt($(this).attr('crystal-value'));

    currentCount += crystalNumber
    $('#currentCrystalCount').text(currentCount)

    if (currentCount === currentCrystalNum){
        win++;
        alert("Great Job, you win!")
        $('#win').innerHTML("Win: " + win)
    restartGame();

    }else if (currentCount > currentCrystalNum){
        lose++;
        alert("Sorry, try again.")
        $('#lose').innerHTML("Lose: " + lose);
    restartGame();
    }
   // game is not restarting 
   // the wins and loses are not being tracked :''( 


    });

function restartGame() {
    currentNumber();
    currentCount() 
}

});


