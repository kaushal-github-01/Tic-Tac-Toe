const cells = document.querySelectorAll(".cell");
cells.forEach((cell) => {
  cell.onclick = () => {
    let position = cell.id - 1;
    Game.Gameboard.playersFactory(cell, position);
  };
});

let count = 1;

const Game = (() => {
  const Gameboard = (() => {
    const gameboard = [];

    const playersFactory = (cell, position) => {
      const player1 = () => {
        if (cell.innerText == "") {
          gameboard[position] = "X";
          cell.innerText = "X";
          count++;
        } else {
          alert("Not empty");
        }
      };

      const player2 = () => {
        if (cell.innerText == "") {
          gameboard[position] = "O";
          cell.innerText = "O";
          count++;
        } else {
          alert("Not empty");
        }
      };

      if (count < 10) {
        if (count % 2 != 0) {
          player1();
        } else {
          player2();
        }
      } else {
        alert("Time to find the result");
      }

      console.log(gameboard);
      return gameboard;
    };

    return { playersFactory };
  })();

  return { Gameboard };
})();
