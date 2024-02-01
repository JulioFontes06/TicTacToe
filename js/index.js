
const startButton = document.getElementById('start')

startButton.addEventListener('click', saveNames)

function saveNames() {
  const playerXName = document.getElementById('playerX').value
  const playerOName = document.getElementById('playerO').value
  localStorage.setItem('playerXName', JSON.stringify(playerXName))
  localStorage.setItem('playerOName', JSON.stringify(playerOName))

  location.href = './game.html'
}