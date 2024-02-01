const firstColumn = document.querySelector("#firstColumn");
const secondColumn = document.querySelector("#secondColumn");
const thirdColumn = document.querySelector("#thirdColumn");

const keys = document.querySelectorAll(".key");
const currentPlayer = document.getElementById("currentPlayer");

const divRestart = document.querySelector('#restartButtonConteiner')

const playerX = document.getElementById('playerXPoints')
const playerO = document.getElementById('playerOPoints')

let playerXTurn = true;
let playerXPoits = 0
let playerOPoits = 0


keys.forEach((key) => {
  key.addEventListener("click", () => {
    playerTurn(key);
  });
});

function playerTurn(key) {
  if (playerXTurn) {
    key.innerHTML = "X";
    key.dataset.key = "X";
    key.setAttribute("disabled", !key.disabled);
    currentPlayer.innerText = "Player O";
    playerXTurn = false;
    victoryCheck();
  } else {
    key.innerHTML = "O";
    key.dataset.key = "O";
    key.setAttribute("disabled", !key.disabled);
    currentPlayer.innerText = "Player X";
    playerXTurn = true;
    victoryCheck();
  }
}

function createRestartButton() {
  const restartButton = document.createElement("button");
  restartButton.id = "restartButton";
  restartButton.innerText = "Reiniciar";

  divRestart.appendChild(restartButton);
}

function restartPlay(e) {
  keys.forEach((key) => {
    key.innerHTML = "";
    key.dataset.key = "null";
    key.style.backgroundColor = "#fff";
    key.disabled = false;
  });
  if (playerXTurn) {
    currentPlayer.innerText = "Player: X";
    playerOPoits++
    playerO.innerText = `Player O: ${playerOPoits}` 
  } else {
    currentPlayer.innerText = "Player: O";
    playerXPoits++
    playerX.innerText = `Player X: ${playerXPoits}` 
  }
  e.target.remove();
}

function victoryCheck() {
  const condition1 =
    firstColumn.children[0].dataset.key ===
      firstColumn.children[1].dataset.key &&
    firstColumn.children[1].dataset.key ===
      firstColumn.children[2].dataset.key &&
    firstColumn.children[0].dataset.key !== "null";

  const condition2 =
    secondColumn.children[0].dataset.key ===
      secondColumn.children[1].dataset.key &&
    secondColumn.children[1].dataset.key ===
      secondColumn.children[2].dataset.key &&
    secondColumn.children[0].dataset.key !== "null";

  const condition3 =
    thirdColumn.children[0].dataset.key ===
      thirdColumn.children[1].dataset.key &&
    thirdColumn.children[1].dataset.key ===
      thirdColumn.children[2].dataset.key &&
    thirdColumn.children[0].dataset.key !== "null";

  const condition4 =
    firstColumn.children[0].dataset.key ===
      secondColumn.children[1].dataset.key &&
    secondColumn.children[1].dataset.key ===
      thirdColumn.children[2].dataset.key &&
    firstColumn.children[0].dataset.key !== "null";

  const condition5 =
    firstColumn.children[2].dataset.key ===
      secondColumn.children[1].dataset.key &&
    secondColumn.children[1].dataset.key ===
      thirdColumn.children[0].dataset.key &&
    firstColumn.children[2].dataset.key !== "null";

  const condition6 =
    firstColumn.children[0].dataset.key ===
      secondColumn.children[0].dataset.key &&
    secondColumn.children[0].dataset.key ===
      thirdColumn.children[0].dataset.key &&
    firstColumn.children[0].dataset.key !== "null";

  const condition7 =
    firstColumn.children[1].dataset.key ===
      secondColumn.children[1].dataset.key &&
    secondColumn.children[1].dataset.key ===
      thirdColumn.children[1].dataset.key &&
    firstColumn.children[1].dataset.key !== "null";

  const condition8 =
    firstColumn.children[2].dataset.key ===
      secondColumn.children[2].dataset.key &&
    secondColumn.children[2].dataset.key ===
      thirdColumn.children[2].dataset.key &&
    firstColumn.children[2].dataset.key !== "null";

  const tieCondition =
    firstColumn.children[0].innerHTML !== "" &&
    firstColumn.children[1].innerHTML !== "" &&
    firstColumn.children[2].innerHTML !== "" &&
    secondColumn.children[0].innerHTML !== "" &&
    secondColumn.children[1].innerHTML !== "" &&
    secondColumn.children[2].innerHTML !== "" &&
    thirdColumn.children[0].innerHTML !== "" &&
    thirdColumn.children[1].innerHTML !== "" &&
    thirdColumn.children[2].innerHTML !== ""

  if (condition1) {
    createRestartButton();
    const restartButton = document.getElementById("restartButton");

    firstColumn.children[0].style.backgroundColor = "#A6A867";
    firstColumn.children[1].style.backgroundColor = "#A6A867";
    firstColumn.children[2].style.backgroundColor = "#A6A867";
    currentPlayer.innerText = `O player: ${firstColumn.children[0].dataset.key} venceu`;
    keys.forEach((key) => {
      key.setAttribute("disabled", !key.disabled);
    });
    restartButton.addEventListener("click", restartPlay);
  }
  if (condition2) {
    createRestartButton();
    const restartButton = document.getElementById("restartButton");

    secondColumn.children[0].style.backgroundColor = "#A6A867";
    secondColumn.children[1].style.backgroundColor = "#A6A867";
    secondColumn.children[2].style.backgroundColor = "#A6A867";
    currentPlayer.innerText = `O player: ${secondColumn.children[0].dataset.key} venceu`;
    keys.forEach((key) => {
      key.setAttribute("disabled", !key.disabled);
    });
    restartButton.addEventListener("click", restartPlay);
  } else if (condition3) {
    createRestartButton();
    const restartButton = document.getElementById("restartButton");

    thirdColumn.children[0].style.backgroundColor = "#A6A867";
    thirdColumn.children[1].style.backgroundColor = "#A6A867";
    thirdColumn.children[2].style.backgroundColor = "#A6A867";
    currentPlayer.innerText = `O player: ${thirdColumn.children[0].dataset.key} venceu`;
    keys.forEach((key) => {
      key.setAttribute("disabled", !key.disabled);
    });
    restartButton.addEventListener("click", restartPlay);
  } else if (condition4) {
    createRestartButton();
    const restartButton = document.getElementById("restartButton");

    firstColumn.children[0].style.backgroundColor = "#A6A867";
    secondColumn.children[1].style.backgroundColor = "#A6A867";
    thirdColumn.children[2].style.backgroundColor = "#A6A867";
    currentPlayer.innerText = `O player: ${firstColumn.children[0].dataset.key} venceu`;
    keys.forEach((key) => {
      key.setAttribute("disabled", !key.disabled);
    });
    restartButton.addEventListener("click", restartPlay);
  } else if (condition5) {
    createRestartButton();
    const restartButton = document.getElementById("restartButton");

    firstColumn.children[2].style.backgroundColor = "#A6A867";
    secondColumn.children[1].style.backgroundColor = "#A6A867";
    thirdColumn.children[0].style.backgroundColor = "#A6A867";
    currentPlayer.innerText = `O player: ${firstColumn.children[2].dataset.key} venceu`;
    keys.forEach((key) => {
      key.setAttribute("disabled", !key.disabled);
    });
    restartButton.addEventListener("click", restartPlay);
  } else if (condition6) {
    createRestartButton();
    const restartButton = document.getElementById("restartButton");

    firstColumn.children[0].style.backgroundColor = "#A6A867";
    secondColumn.children[0].style.backgroundColor = "#A6A867";
    thirdColumn.children[0].style.backgroundColor = "#A6A867";
    currentPlayer.innerText = `O player: ${firstColumn.children[0].dataset.key} venceu`;
    keys.forEach((key) => {
      key.setAttribute("disabled", !key.disabled);
    });
    restartButton.addEventListener("click", restartPlay);
  } else if (condition7) {
    createRestartButton();
    const restartButton = document.getElementById("restartButton");

    firstColumn.children[1].style.backgroundColor = "#A6A867";
    secondColumn.children[1].style.backgroundColor = "#A6A867";
    thirdColumn.children[1].style.backgroundColor = "#A6A867";
    currentPlayer.innerText = `O player: ${firstColumn.children[1].dataset.key} venceu`;
    keys.forEach((key) => {
      key.setAttribute("disabled", !key.disabled);
    });
    restartButton.addEventListener("click", restartPlay);
  } else if (condition8) {
    createRestartButton();
    const restartButton = document.getElementById("restartButton");

    firstColumn.children[2].style.backgroundColor = "#A6A867";
    secondColumn.children[2].style.backgroundColor = "#A6A867";
    thirdColumn.children[2].style.backgroundColor = "#A6A867";
    currentPlayer.innerText = `O player: ${firstColumn.children[2].dataset.key} venceu`;
    keys.forEach((key) => {
      key.setAttribute("disabled", !key.disabled);
    });
    restartButton.addEventListener("click", restartPlay);
  } else if (tieCondition) {
    createRestartButton();
    const restartButton = document.getElementById("restartButton");

    currentPlayer.innerText = "Empate";
    keys.forEach((key) => {
      key.setAttribute("disabled", !key.disabled);
    });
    restartButton.addEventListener("click", restartPlay);
  }
}
