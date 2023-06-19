let match = "Ongoing";

const Gameboard = () => {
  const GameboardArray = [];
  return GameboardArray;
};

const Players = (GameboardArray) => {
  const cell = document.querySelectorAll(".cell");
  let count = 1;
  cell.forEach((element) => {
    element.onclick = () => {
      const Player1 = () => {
        if (element.textContent == "") {
          element.textContent = "X";
          GameboardArray[element.id] = "X";
          count++;
          displayResult(GameboardArray);
        } else {
          alert("Press another block Player 1");
        }
      };

      const Player2 = () => {
        if (element.textContent == "") {
          element.textContent = "O";
          GameboardArray[element.id] = "O";
          count++;
          displayResult(GameboardArray);
        } else {
          alert("Press another block Player 2");
        }
      };

      if (match == "Ongoing") {
        if (count % 2 != 0) {
          Player1();
        } else {
          Player2();
        }
      } else {
        alert("Match is Over");
      }
    };
  });
};

const Game = () => {
  const GameboardArray = Gameboard();
  Players(GameboardArray);
};
Game();

const displayResult = (GameboardArray) => {
  winningArray = [
    //row
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    //column
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    //diagonal
    [0, 4, 8],
    [2, 4, 6],
  ];

  winningArray.forEach((innerArray) => {
    // Now, i want it to check

    if (
      GameboardArray[innerArray[0]] &&
      GameboardArray[innerArray[1]] &&
      GameboardArray[innerArray[2]] != ""
    ) {
      if (
        GameboardArray[innerArray[0]] === GameboardArray[innerArray[1]] &&
        GameboardArray[innerArray[1]] === GameboardArray[innerArray[2]]
      ) {
        setTimeout(() => {
          alert("Match Over");
          match = "Over";
        }, 100);
      }
    }
  });
};
