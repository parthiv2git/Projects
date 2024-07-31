function pickComputerMove() {
  const randomNumber = Math.random();

  let computerMove = "";

  if (randomNumber >= 0 && randomNumber < 1 / 3) {
    computerMove = "rock";
  } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
    computerMove = "paper";
  } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
    computerMove = "scissors";
  }

  return computerMove;
}

function playGame(playerMove) {
  const computerMove = pickComputerMove();

  let result = "";

  if (playerMove === "rock") {
    if (computerMove === "rock") {
      result = "tie!😒";
    } else if (computerMove === "paper") {
      result = "You lose!😢";
    } else if (computerMove === "scissors") {
      result = "You win!😎";
    }
  } else if (playerMove === "paper") {
    if (computerMove === "rock") {
      result = "You win!😎";
    } else if (computerMove === "paper") {
      result = "tie!😒";
    } else if (computerMove === "scissors") {
      result = "You lose!😢";
    }
  } else if (playerMove === "scissors") {
    if (computerMove === "rock") {
      result = "You lose!😢";
    } else if (computerMove === "paper") {
      result = "You win!😎";
    } else if (computerMove === "scissors") {
      result = "tie!😒";
    }
  }

  alert(
    `You picked ${playerMove}. Computer picked ${computerMove}. ${result}.`
  );
}
