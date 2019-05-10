
/////////////Player 1//////////////

let rollCount = 0;
let randomNumber = 0;


function rollDice() {  
  randomNumber = (Math.floor(Math.random()*6)+1);
  document.getElementById("numberz").innerHTML = ("Your score = " + Number.parseInt(rollCount += randomNumber));
    
  if (randomNumber == 1) {
    document.getElementById("score1").innerHTML = "You lose."
  }
  else if (rollCount >= 20) {
    document.getElementById("score2").innerHTML = "well done you win!!"
  }
}

Button.onclick = function showNumberRolled () {
 
  diceRoll = rollDice();
  document.getElementById("dice").src = `dice${randomNumber}.png`
  console.log('I have changed.') 
}

button.onclick = function restart () {
location.reload();
}


////////////////Player 2////////////////


let rollCount2 = 0;
let randomNumber2 = 0;

function rollDice2() {
  randomNumber2 = (Math.floor(Math.random()*6)+1);
  document.getElementById("numberz2").innerHTML = ("Your score = " + Number.parseInt(rollCount2 += randomNumber2));

  if (randomNumber2 == 1) {
    document.getElementById("score2").innerHTML = "You lose, sucker!!!"
  }
  else if (rollCount2 >= 20) {
    document.getElementById("dice").src = `dice${randomNumber2}.png`
    console.log("I have changed too.")
  }
}
Button2.onclick = function restart2 () {
  location.reload();
}









    