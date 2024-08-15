let HumanScore = 0;
let ComputerScore = 0;

function ScoreWriter(){
  PlayerScoreManuplated = "Player score: "+ HumanScore
  ComputerScoreManuplated = "Computer score: " + ComputerScore 
  console.log(PlayerScoreManuplated);
  console.log(ComputerScoreManuplated);
}

function getComputerChoice(max) {
  let value = Math.floor(Math.random() * max);
  return value;
  // 0 -> Rock
  // 1-> Scissor
  // 2-> Paper
  
}

function getHumanChoice(){
  console.log("-------------")
  console.log("0->Rock");
  console.log("1->Paper");
  console.log("2->Scissor");
  value = prompt("Choice: ")
  return value;
}
function playRound(){
  let HumanValue = getHumanChoice()
  let ComputerValue = String(getComputerChoice(3));

  if (HumanValue == "0" || HumanValue == "1" || HumanValue == "2"){
    if (HumanValue == "0" && ComputerValue == "0") {
      console.log("Draw");
      ScoreWriter();
    } else if (HumanValue == "1" && ComputerValue == "1") {
      console.log("Draw");
      ScoreWriter();
    } else if (HumanValue == "2" && ComputerValue == "2") {
      console.log("Draw");
      ScoreWriter();
    } else if (HumanValue == "0" && ComputerValue == "1") {
      console.log("Player won");
      HumanScore++;
      ScoreWriter();
    } else if (HumanValue == "1" && ComputerValue == "2") {
      console.log("Player won");
      HumanScore++;
      ScoreWriter();
    } else if (HumanValue == "2" && ComputerValue == "0") {
      console.log("Player won");
      HumanScore++;
      ScoreWriter();
    } else {
      console.log("Computer won");
      ComputerScore++;
      ScoreWriter();
    }
  }
  else{
    console.log("You cant use the numbers different than 0, 1 and 2")
  }
}
function playGame(){
  let i = 0;
  while (i < 6){
    playRound();

    i++;
  }
}

playGame()
