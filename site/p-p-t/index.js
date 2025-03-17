let escolhas = ['pedra', 'papel', 'tesoura'];
let cp = 0
let jp = 0
function jogo(escolhadojogador) {
    let escolhadocomputador = escolhas[Math.floor(Math.random() * 3)];
    document.getElementById('j').textContent = `Jogador: ${escolhadojogador}`
    document.getElementById('c').textContent = `Computador: ${escolhadocomputador}`
    document.getElementById('vitoria').textContent = ""
    let resultado = document.getElementById("resultado")
    if (escolhadojogador === escolhadocomputador) {
        resultado.textContent = 'Empate.'
    } else {
        switch (escolhadojogador) {
            case 'pedra' :
                escolhadocomputador === 'tesoura' ? resultado.textContent =  `Ponto pro jogador (${jp++})` : resultado.textContent =  `Ponto pro computador (${cp++})`
                break;
                case 'papel' :
                    escolhadocomputador === 'pedra' ? resultado.textContent =  `Ponto pro jogador (${jp++})` : resultado.textContent =  `Ponto pro computador (${cp++})`
                    break;
                    case 'tesoura' :
                        escolhadocomputador === 'papel' ?  resultado.textContent =  `Ponto pro jogador (${jp++})` : resultado.textContent =  `Ponto pro computador (${cp++})` 
                        break;
        }
    }
 } 
function acabarJogo() {
    document.getElementById("j").textContent = `Jogador: ${jp}`
    document.getElementById("c").textContent = `Computador: ${cp}`
    resultado.textContent = ''
    if (cp > jp) {
        document.getElementById("vitoria").textContent = 'Computador ganhou!'        
    } else if (cp === jp) {
       document.getElementById('vitoria').textContent = 'Empate, ninguém ganhou'
    } else {
       document.getElementById("vitoria").textContent = 'Você(Jogador) ganhou!'
    }
}  