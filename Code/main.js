let HumanScoreNumber = 0;
let ComputerScoreNumber = 0;


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

 ;

}

function getComputerChoice(max) {
  let value = Math.floor(Math.random() * max);
  return value;
  // 0 -> Rock
  // 1-> Scissor
  // 2-> Paper
  
}

function getHumanChoice(){
  const buttons = document.querySelectorAll("button");
  buttons.forEach((button) => {

  button.addEventListener("click", () => {
    return button.id;
  });
});
}
function playRound(){
  ScoreWriter();

  let HumanValue = getHumanChoice();
  let ComputerValue = String(getComputerChoice(3));

    if (HumanValue == "0" && ComputerValue == "0") {
      Score.textContent = "Draw";
    } 
    else if (HumanValue == "1" && ComputerValue == "1") {
      Score.textContent = "Draw";
    } 
    else if (HumanValue == "2" && ComputerValue == "2") {
      Score.textContent = "Draw";
    } 
    else if (HumanValue == "0" && ComputerValue == "1") {
      Score.textContent = "Player won";
      HumanScoreNumber++
      HumanScore++;
    } 
    else if (HumanValue == "1" && ComputerValue == "2") {
      Score.textContent = "Player won";
      HumanScoreNumber++;
      HumanScore++;
    } 
    else if (HumanValue == "2" && ComputerValue == "0") {
      Score.textContent = "Player won";
      HumanScoreNumber++;
    } 
    else {
      Score.textContent = "Computer won";
      ComputerScoreNumber++;
    }
  }

function playGame() {
  let i = 0;
  while (i < 6) {
    playRound();
    i++;
  }
}

playGame();