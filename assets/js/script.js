//map.length = 15 (linhas);
const tabuleiro = document.getElementsByClassName("tabuleiro");
for (var i = 0; i < map.length; i++) {
  const blocos = document.createElement("div");
  blocos.classList.add("linha");
  blocos.setAttribute("id", i);
  tabuleiro[0].appendChild(blocos);

  for (var j = 0; j < map[i].length; j++) {
    const bloco = document.createElement("div");
    bloco.classList.add("bloco", "bloco" + j);
    bloco.setAttribute("linha", i);
    bloco.setAttribute("bloco", j);
    
    if (map[i][j] === "W") {
        bloco.classList.add("w");
        
    } else if (map[i][j] === "S") {
      bloco.classList.add("espaco");
        const player = document.createElement("div");
        player.classList.add("bloco","s");
        bloco.appendChild(player);
    } else if (map[i][j] === "F") {
        bloco.classList.add("f");
    } else {
        bloco.classList.add("espaco");
    }
    blocos.appendChild(bloco);
  }
}

//controles

const body = document.querySelector("body");
body.addEventListener("keydown", movimentacao);

//movimentação player
function movimentacao(evt){
    const keyName = evt.key;
    
    let player = document.querySelector(".s");
    let playerLinha = player.parentElement.getAttribute("linha");
    let playerBloco = player.parentElement.getAttribute("bloco");
    
    
    if (keyName === "ArrowUp" || keyName === "w") {

      let linhaAlvo = Number(playerLinha) - 1;

      let alvo = document.getElementById(linhaAlvo);
      alvo = alvo.children[playerBloco];

      if (map[linhaAlvo][playerBloco] === " ") {
        alvo.appendChild(player);

      } else if (map[linhaAlvo][playerBloco] === "F"){
        // console.log("u win!")
        alvo.appendChild(player);
        mensagemVitoria();
      } else {
        console.log("Movimento inválido.")
      }

    } else if (keyName === "ArrowRight" || keyName === "d") {

      let blocoAlvo = Number(playerBloco) + 1;
      let alvo = document.getElementById(playerLinha);
      alvo = alvo.children[blocoAlvo];
      if (map[playerLinha][blocoAlvo] === " ") {
        alvo.appendChild(player);

      } else if (map[playerLinha][blocoAlvo] === "F"){
        // console.log("u win!")
        alvo.appendChild(player);
        mensagemVitoria();
      } else {
        console.log("Movimento inválido.")
      }
    
    } else if (keyName === "ArrowDown" || keyName === "s") {

      let linhaAlvo = Number(playerLinha) + 1;

      let alvo = document.getElementById(linhaAlvo);
      alvo = alvo.children[playerBloco];

      if (map[linhaAlvo][playerBloco] === " ") {
        alvo.appendChild(player);

      } else if (map[linhaAlvo][playerBloco] === "F"){
        // console.log("u win!")
        alvo.appendChild(player);
        mensagemVitoria();
      } else {
        console.log("Movimento inválido.")
      }

    } else if (keyName === "ArrowLeft" || keyName === "a") {

      let blocoAlvo = Number(playerBloco) - 1;
      let alvo = document.getElementById(playerLinha);
      alvo = alvo.children[blocoAlvo];
      if (map[playerLinha][blocoAlvo] === " ") {
        alvo.appendChild(player);

      } else if (map[playerLinha][blocoAlvo] === "F"){
        // console.log("u win!")
        alvo.appendChild(player);
        mensagemVitoria();
      } else {
        console.log("Movimento inválido.")
      }

    } else {
      console.log("Utilize as setas do teclado.");
    }
}

function mensagemVitoria() {

  const a = document.getElementsByClassName("tabuleiro");
  const b = document.createElement("div");
  b.setAttribute("id", "msgVitoria");
  b.innerText = "Você ganhou!";
  a[0].appendChild(b);
}