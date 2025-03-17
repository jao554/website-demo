const quadrados = document.querySelectorAll(".figura")
let figuras = ['🐵', '🐆', '🦍', '🦓', '🐈', '🦋', '🦓', '🐵', '🐔', '🐆', '🐈', '🦊', '🦍', '🐔', '🐴', '🐴', '🦋', '🕷️', '🕷️', '🦊']
let jogador = 1
embaralhar(figuras)  
function embaralhar(array) {
  for (let i = array.length - 1; i > 0; i--) {
   const aleatorio = Math.floor(Math.random() * (i + 1));
   
   [array[i], array[aleatorio]] = [array[aleatorio], array[i]]
  }
}
function clicarF(X) {
   quadrados[X].textContent = figuras[X]
}
function passaraVez() {
  quadrados[0].textContent = ""
  quadrados[1].textContent = ""
  quadrados[2].textContent = ""
  quadrados[3].textContent = ""
  quadrados[4].textContent = ""
  quadrados[5].textContent = ""
  quadrados[6].textContent = ""
  quadrados[7].textContent = ""
  quadrados[8].textContent = ""
  quadrados[9].textContent = ""
  quadrados[10].textContent = ""
  quadrados[11].textContent = ""
  quadrados[12].textContent = ""
  quadrados[13].textContent = ""
  quadrados[14].textContent = ""
  quadrados[15].textContent = ""
  quadrados[16].textContent = ""
  quadrados[17].textContent = ""
  quadrados[18].textContent = ""
  quadrados[19].textContent = ""
}