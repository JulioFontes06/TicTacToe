const firstColumn = document.querySelector("#firstColumn");
const secondColumn = document.querySelector("#secondColumn");
const thirdColumn = document.querySelector("#thirdColumn");

const keys = document.querySelectorAll(".key");
const currentPlayer = document.getElementById("currentPlayer");

const divRestart = document.querySelector("#restartButtonConteiner");
const divQuit = document.querySelector("#quitButtonConteiner");

const playerX = document.getElementById("playerXPoints");
const playerO = document.getElementById("playerOPoints");


let playerXName = localStorage.playerXName;

playerXName = playerXName.replace('"', "");
playerXName = playerXName.replace('"', "");

let playerOName = localStorage.playerOName;

playerOName = playerOName.replace('"', "");
playerOName = playerOName.replace('"', "");

playerX.innerText = playerXName + ': 0'
playerO.innerText = playerOName + ': 0'
currentPlayer.innerText = playerXName;

let playerXTurn = true;
let playerXPoits = 0;
let playerOPoits = 0;

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
    currentPlayer.innerText = playerOName;
    playerXTurn = false;
    victoryCheck();
  } else {
    key.innerHTML = "O";
    key.dataset.key = "O";
    key.setAttribute("disabled", !key.disabled);
    currentPlayer.innerText = playerXName;
    playerXTurn = true;
    victoryCheck();
  }
}

function poitsCount() {
  if (playerXTurn) {
    playerOPoits++;
    playerO.innerText = playerOName + ": " + playerOPoits;
  } else {
    playerXPoits++;
    playerX.innerText = playerXName + ': ' + playerXPoits
  }
}

function createButton(id, innerText) {
  const button = document.createElement("button");
  button.id = id;
  button.innerText = innerText;

  return button;
}

function restartPlay(e) {
  keys.forEach((key) => {
    key.innerHTML = "";
    key.dataset.key = "null";
    key.style.backgroundColor = "#fff";
    key.disabled = false;
  });
  if (playerXTurn) {
    currentPlayer.innerText = playerXName;
  } else {
    currentPlayer.innerText = playerOName;
  }
  e.target.remove();
  quitButton.remove()
}

function quitPlay() {
  location.href = "./index.html";
}

function winAnunciation() {
  if (playerXTurn) {
    currentPlayer.innerText = `O player: ${playerOName} venceu`;
  } else {
    currentPlayer.innerText = `O player: ${playerXName} venceu`;
  }

  keys.forEach((key) => {
    key.setAttribute("disabled", !key.disabled);
  });
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
    thirdColumn.children[2].innerHTML !== "";

  if (condition1) {
    const createRestartButton = createButton("restartButton", "Reiniciar");
    divRestart.appendChild(createRestartButton);
    const createQuitButton = createButton("quitButton", "Sair");
    divQuit.appendChild(createQuitButton);

    firstColumn.children[0].style.backgroundColor = "#A6A867";
    firstColumn.children[1].style.backgroundColor = "#A6A867";
    firstColumn.children[2].style.backgroundColor = "#A6A867";

    poitsCount();
    winAnunciation();

    restartButton.addEventListener("click", restartPlay);
    quitButton.addEventListener("click", quitPlay);

  } else if (condition2) {
    const createRestartButton = createButton("restartButton", "Reiniciar");
    divRestart.appendChild(createRestartButton);
    const createQuitButton = createButton("quitButton", "Sair");
    divQuit.appendChild(createQuitButton);

    secondColumn.children[0].style.backgroundColor = "#A6A867";
    secondColumn.children[1].style.backgroundColor = "#A6A867";
    secondColumn.children[2].style.backgroundColor = "#A6A867";
    poitsCount();
    winAnunciation();

    restartButton.addEventListener("click", restartPlay);
    quitButton.addEventListener("click", quitPlay);

  } else if (condition3) {
    const createRestartButton = createButton("restartButton", "Reiniciar");
    divRestart.appendChild(createRestartButton);
    const createQuitButton = createButton("quitButton", "Sair");
    divQuit.appendChild(createQuitButton);

    thirdColumn.children[0].style.backgroundColor = "#A6A867";
    thirdColumn.children[1].style.backgroundColor = "#A6A867";
    thirdColumn.children[2].style.backgroundColor = "#A6A867";
    poitsCount();
    winAnunciation();

    restartButton.addEventListener("click", restartPlay);
    quitButton.addEventListener("click", quitPlay);

  } else if (condition4) {
    const createRestartButton = createButton("restartButton", "Reiniciar");
    divRestart.appendChild(createRestartButton);
    const createQuitButton = createButton("quitButton", "Sair");
    divQuit.appendChild(createQuitButton);

    firstColumn.children[0].style.backgroundColor = "#A6A867";
    secondColumn.children[1].style.backgroundColor = "#A6A867";
    thirdColumn.children[2].style.backgroundColor = "#A6A867";
    poitsCount();
    winAnunciation();

    restartButton.addEventListener("click", restartPlay);
    quitButton.addEventListener("click", quitPlay);

  } else if (condition5) {
    const createRestartButton = createButton("restartButton", "Reiniciar");
    divRestart.appendChild(createRestartButton);
    const createQuitButton = createButton("quitButton", "Sair");
    divQuit.appendChild(createQuitButton);

    firstColumn.children[2].style.backgroundColor = "#A6A867";
    secondColumn.children[1].style.backgroundColor = "#A6A867";
    thirdColumn.children[0].style.backgroundColor = "#A6A867";
    poitsCount();
    winAnunciation();

    restartButton.addEventListener("click", restartPlay);
    quitButton.addEventListener("click", quitPlay);

  } else if (condition6) {
    const createRestartButton = createButton("restartButton", "Reiniciar");
    divRestart.appendChild(createRestartButton);
    const createQuitButton = createButton("quitButton", "Sair");
    divQuit.appendChild(createQuitButton);

    firstColumn.children[0].style.backgroundColor = "#A6A867";
    secondColumn.children[0].style.backgroundColor = "#A6A867";
    thirdColumn.children[0].style.backgroundColor = "#A6A867";
    poitsCount();
    winAnunciation();

    restartButton.addEventListener("click", restartPlay);
    quitButton.addEventListener("click", quitPlay);

  } else if (condition7) {
    const createRestartButton = createButton("restartButton", "Reiniciar");
    divRestart.appendChild(createRestartButton);
    const createQuitButton = createButton("quitButton", "Sair");
    divQuit.appendChild(createQuitButton);

    firstColumn.children[1].style.backgroundColor = "#A6A867";
    secondColumn.children[1].style.backgroundColor = "#A6A867";
    thirdColumn.children[1].style.backgroundColor = "#A6A867";
    poitsCount();
    winAnunciation();

    restartButton.addEventListener("click", restartPlay);
    quitButton.addEventListener("click", quitPlay);

  } else if (condition8) {
    const createRestartButton = createButton("restartButton", "Reiniciar");
    divRestart.appendChild(createRestartButton);
    const createQuitButton = createButton("quitButton", "Sair");
    divQuit.appendChild(createQuitButton);

    firstColumn.children[2].style.backgroundColor = "#A6A867";
    secondColumn.children[2].style.backgroundColor = "#A6A867";
    thirdColumn.children[2].style.backgroundColor = "#A6A867";
    poitsCount();
    winAnunciation();

    restartButton.addEventListener("click", restartPlay);
    quitButton.addEventListener("click", quitPlay);

  } else if (tieCondition) {
    const createRestartButton = createButton("restartButton", "Reiniciar");
    divRestart.appendChild(createRestartButton);
    const createQuitButton = createButton("quitButton", "Sair");
    divQuit.appendChild(createQuitButton);

    currentPlayer.innerText = "Empate";

    restartButton.addEventListener("click", restartPlay);
    quitButton.addEventListener("click", quitPlay);
  }
}
