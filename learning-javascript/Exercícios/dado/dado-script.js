let numeroSorteado = 0;
let botao = document.querySelector("#btnRolagem");
let img = document.querySelector("#imgDado");
let rolagem = document.querySelector("#num");

botao.addEventListener("click", rolar);

function rolar()
{
    numeroSorteado = getRandomInt(1, 20);
    console.log(numeroSorteado);
    img.setAttribute("src" , "./lados/" +numeroSorteado+".jpg");
    rolagem.textContent = numeroSorteado;
}

// FUNCAO que gera numero randomico inteiro
// incluindo o minimo e o maximo
function getRandomInt(min, max) {
    min = Math.ceil(min)  // arredonda para cima  ceil  = teto
    max = Math.floor(max) // arredonda para baixo floor = piso
    return Math.floor(Math.random() * (max - min + 1)) + min
}
