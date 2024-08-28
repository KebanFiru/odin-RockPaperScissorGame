let HumanScoreNumber = 0;
let ComputerScoreNumber = 0;
let HumanValue;
let ComputerValue;


const ScoreContainer = document.querySelector("div");
const PlayerScore = document.createElement("p");
const ComputerScore = document.createElement("p");
const Score = document.createElement("h");


ScoreContainer.append(ComputerScore);
ScoreContainer.append(PlayerScore);

ScoreContainer.append(Score);

ScoreContainer.append();

function ScoreWriter(){
  
  PlayerScore.textContent = `Player score is: ${HumanScoreNumber}`;
  ComputerScore.textContent = `Computer score is : ${ComputerScoreNumber}`;

}

function getComputerChoice(max) {
  let value = Math.floor(Math.random() * max);
  switch(value){
    case 0:
      return "Rock";
    case 1:
      return "Scissor";
    case 2:
      return "Paper";
  }

  
}


const buttons = document.querySelectorAll("button");
  buttons.forEach((button) => { button.addEventListener("click", () => {
      HumanValue = button.textContent;
      ComputerValue = getComputerChoice(3);
      console.log(ComputerValue);
      Score.textContent = CheckWinner(); 
       ScoreWriter();

});});

function CheckWinner(){

  if (HumanValue == ComputerValue) {
    return "Draw";
  } else if (ComputerValue == "Rock" && HumanValue == "Paper") {
    HumanScoreNumber++;
    return "Player win";
  } else if (ComputerValue == "Paper" && HumanValue == "Scissor") {
    HumanScoreNumber++;
    return "Player win";
  } else if (ComputerValue == "Scissor" && HumanValue == "Rock") {
    HumanScoreNumber++;
    return "Player win";
  }
  else{
    ComputerScoreNumber++
    return "Computer win";
  }
}
