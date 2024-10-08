//Themes
let background = document.querySelector("body");
let darkB = document.querySelector(".dark");
let lightB = document.querySelector(".light");

//Clock
let time = document.querySelector("#clock");

//Grades
let formulario = document.querySelector("form");
let notaI = document.querySelector("#primeira");
let notaII = document.querySelector("#segunda");
let result = document.querySelector("#resultado");
let btnC = document.querySelector("#bttnC");
let warning = document.querySelector("#aviso");
let final = document.querySelector("#total");

//events
darkB.addEventListener("click", darkButton);
lightB.addEventListener("click", lightButton);

window.addEventListener("load", startTime, true);

btnC.addEventListener("click", media);

//functions

//Themes
function darkButton()
{
  background.classList.remove("light-theme");
  background.classList.add("dark-theme");
  console.log("preto");
}

function lightButton()
{
  background.classList.remove("dark-theme");
  background.classList.add("light-theme");
  console.log("blanco");
}

//Clock
function startTime()
{
  const today = new Date();
  let h = today.getHours();
  let m = today.getMinutes();
  let s = today.getSeconds();
  m = checkTime(m);
  s = checkTime(s);
  time.innerHTML =  h + ":" + m + ":" + s;
  setTimeout(startTime, 1000);
}

function checkTime(i)
{
  if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
  return i;
}

//Grades

function calc(n1, n2)
{
  return ((n1 + n2) / 2);
}

function validar()
{
  let num1 = notaI.value;
  let num2 = notaII.value;
  
  if (num1 < 0 || num1 > 10 || num2 < 0 || num2 > 10)
    {
      formulario.reset();
      warning.textContent = "Número inválido!";
      warning.classList.add('alerta')
      setTimeout(function(){
          warning.textContent = ''
          warning.classList.remove('alerta')
          result.classList = "";
      }, 2000);
    }
}

function media(e)
{
  console.log("entrou na funçao");
    let nota1 = parseFloat(notaI.value);
    let nota2 = parseFloat(notaII.value);
    let mediaTotal = calc(nota1, nota2);

    console.log(mediaTotal);
    
    if (mediaTotal >= 6)
    {
      result.classList.remove("reprovado");
      result.classList.remove("recuperacao");
      result.classList.add("aprovado");
      
      console.log("aprovado");

      result.value = parseFloat(mediaTotal);
      final.innerHTML = "Aprovado!";
    }
    
    else if (mediaTotal <= 3)
    {
      result.classList.remove("recuperacao");
      result.classList.remove("aprovado");
      result.classList.add("reprovado");
      
      console.log("reprovado");

      result.value = parseFloat(mediaTotal);
      final.innerHTML = "Reprovado!";
    }

    else if (isNaN(mediaTotal))
    {
      result.classList.remove("recuperacao");
      result.classList.remove("aprovado");
      result.classList.remove("reprovado");

      formulario.reset();
      final.innerHTML = "";
    }

    else
    {
      result.classList.remove("reprovado");
      result.classList.remove("aprovado");
      result.classList.add("recuperacao");
  
      console.log("recuperação");

      result.value = parseFloat(mediaTotal);
      final.innerHTML = "Recuperação!";
    }

  e.preventDefault()
}