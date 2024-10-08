function validar(p, s)
{
  let erroI = document.querySelector("#perror");
  let erroII = document.querySelector("#serror");
  
  let warning = "Número inválido!";
  
	if (notaI && notaII < 0)
    {
    	erroI.innerHTML = warning;
    }
  	else if (notaI && notaII > 10)
    {
    	erroII.innerHTML = warning;
    }
}

function media (p, s)
{
  let resultado = result;
  let mediaTotal = (p + s) / 2;
  
  let reprovado = "Reprovado";
  let aprovado = "Aprovado";
  let recuperacao = "Recuperação";
  
  if (mediaTotal >= 6 && mediaTotal <= 10)
  {
    resultado.classList.remove("#reprovado");
    resultado.classList.remove("#recuperacao");
    resultado.classList.add("#aprovado");
    
    resultado.innerHTML = aprovado;
  }
  
  else if (mediaTotal >= 4 && mediaTotal <= 5);
  {
    resultado.classList.remove("#reprovado");
    resultado.classList.remove("#aprovado");
    resultado.classList.add("#recuperacao");
    
    resultado.innerHTML = recuperacao;
  }
  
  else if (mediaTotal >= 0 && mediaTotal <= 3)
  {
    resultado.classList.remove("#recuperacao");
    resultado.classList.remove("#aprovado");
    resultado.classList.add("#reprovado");
    
    resultado.innerHTML = reprovado;
  }
} 
