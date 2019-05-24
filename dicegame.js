
/////////////Player 1//////////////

let rollCount = 0;
let randomNumber = 0;


function rollDice() {  
  randomNumber = (Math.floor(Math.random()*6)+1);
  document.getElementById("numberz").innerHTML = ("Your score = " + Number.parseInt(rollCount += randomNumber));
    
  if (randomNumber == 1) {
    document.getElementById("score1").innerHTML = alert("You lose. Player 2 wins!" + location.reload())
  }
  else if (rollCount >= 20) {
    document.getElementById("score2").innerHTML = alert("Well done you win!! Player 2 loses." + location.reload())
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
    document.getElementById("player2Score1").innerHTML = alert("You lose. Player 1 wins. Gutted." + location.reload()) 
  }
  else if (rollCount2 >= 20) {
    document.getElementById("player2Score2").innerHTML = alert("Well done you win!! Player 1 is a looooserrrrr" + location.reload())
  }
}

Button2.onclick = function showNumberRolled2 () {
 
  diceRoll2 = rollDice2();
  document.getElementById("dice2").src = `dice${randomNumber2}copy.png`
  console.log('I have changed2.') 
}

button2.onclick = function restart2 () {
location.reload();
}










    