const playMatch = () => {
    const options = document.querySelectorAll(".parent button");
    //Computer Options
    const computerOptions = ["rock", "paper", "scissors"];
      options.forEach(option => {
      option.addEventListener("click", function() {
        //Computer Choice
        const computerNumber = Math.floor(Math.random() * 3);
        const computerChoice = computerOptions[computerNumber];
      };
      const updateScore = () => {
        const playerScore = document.querySelector(".player-score p");
        playerScore.textContent = pScore;
      };
      const compareHands = (playerChoice, computerChoice) => {
        //Update Text
        const winner = document.querySelector(".winner");
        //Checking for a tie
        if (playerChoice === computerChoice) {
          winner.textContent = "It is a tie";
          return;
        }
        //Check for Rock
        if (playerChoice === "btn-rocks") {
          if (computerChoice === "scissors") {
            winner.textContent = "Player Wins";
            pScore++;
            updateScore();
            return;
          } else {
            winner.textContent = "Computer Wins";
            cScore++;
            updateScore();
            return;
          }
        }
        //Check for Paper
        if (playerChoice === "btn-papers") {
          if (computerChoice === "scissors") {
            winner.textContent = "Computer Wins";
            cScore++;
            updateScore();
            return;
          } else {
            winner.textContent = "Player Wins";
            pScore++;
            updateScore();
            return;
          }
        }
        //Check for Scissors
        if (playerChoice === "btn-scissors") {
          if (computerChoice === "rock") {
            winner.textContent = "Computer Wins";
            cScore++;
            updateScore();
            return;
          } else {
            winner.textContent = "Player Wins";
            pScore++;
            updateScore();
            return;
          }
        }
      };

    startGame();
    playGame();
};
games();