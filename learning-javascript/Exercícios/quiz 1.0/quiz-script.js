let numDaPerg = document.querySelector(".numDaPergunta");
let enunciado = document.querySelector(".enunciado");

let alterA = document.querySelector("#alternativaA");
let alterB = document.querySelector("#alternativaB");
let alterC = document.querySelector("#alternativaC");

let nota = 0;

// eventos
alterA.addEventListener("click", verificarResposta);
alterB.addEventListener("click", verificarResposta);
alterC.addEventListener("click", verificarResposta);

// construtor
function Pergunta(numPerg, questao, altA, altB, altC, resposta) {
  this.numPerg = numPerg;
  this.questao = questao;
  this.altA = altA;
  this.altB = altB;
  this.altC = altC;
  this.resposta = resposta;
}

// perguntas
let pergunta1 = new Pergunta("1", "Quantos álbuns tem o rapper BK?", "5", "4", "3", "4");
let pergunta2 = new Pergunta("2", "Qual o nome do primeiro álbum do rapper Black Alien?", "Babilon By Gus", "Abaixo de Zero - Hello Hell", "Usuário", "Babilon By Gus");
let pergunta3 = new Pergunta("3", '"Taurus" é um álbum da artista: ', "Tasha & Tracie", "Bivolt", "Duquesa", "Duquesa");
let pergunta4 = new Pergunta("4", "Quem motivou o rapper Kamau a iniciar sua carreira?", "Mano Brown", "KL Jay", "2Pac", "KL Jay")
let pergunta5 = new Pergunta("5", '"Freestyle" é o nome de uma música de: ', "Emicida", "Rashid", "Bivolt", "Bivolt");

const perguntas = [pergunta1, pergunta2, pergunta3, pergunta4, pergunta5];
let perguntaAtual = perguntas[0];

numDaPerg.textContent = pergunta1.numPerg + ". ";
enunciado.textContent = pergunta1.questao;
alterA.textContent = pergunta1.altA;
alterB.textContent = pergunta1.altB;
alterC.textContent = pergunta1.altC;

// funcoes
function verificarResposta(r)
{
  let resposta = r.target.textContent;
  let num = parseInt(numDaPerg.textContent);

  if (resposta === perguntaAtual.resposta)
  {
    nota++;
  }

  if (num === perguntas.length)
  {
    fim();
  }
  else
  {
    proxQuestao(num);
  }
}

function proxQuestao(x)
{
  let i = x;

  numDaPerg.textContent = perguntas[i].numPerg + ". ";
  enunciado.textContent = perguntas[i].questao;
  alterA.textContent = perguntas[i].altA;
  alterB.textContent = perguntas[i].altB;
  alterC.textContent = perguntas[i].altC;

  perguntaAtual = perguntas[i];
}

function fim()
{
  const acertos = document.createElement("div");
  acertos.classList.add("acertos");
  acertos.textContent = `Você acertou ${nota}`;
  document.body.appendChild(acertos);
}

console.log(JSON.stringify(pergunta1));
console.log(JSON.stringify(pergunta2));
console.log(JSON.stringify(pergunta3));
console.log(JSON.stringify(pergunta4));
console.log(JSON.stringify(pergunta5));