let hora = document.querySelector("#h");
let minuto = document.querySelector("#m");
let segundo = document.querySelector("#s");

let hoje = document.querySelector("#hoje");
let dia = document.querySelector("#semana");

window.addEventListener("load", relogio, true);
window.addEventListener("load", data, true);

// Relogio
function relogio()
{
    let horario = new Date();
    let h = horario.getHours();
    let m = horario.getMinutes();
    let s = horario.getSeconds();

    m = addZero(m);
    s = addZero(s);

    hora.textContent = h;
    minuto.textContent = m;
    segundo.textContent = s;

    setInterval(relogio, 1000);
}

// Data de Hoje
function data()
{
    let dataDeHoje = new Date();
    // const weekday = ["Domingo", "Segunda-Feira", "Terça-Feira", "Quarta-Feira", "Quinta-Feira", "Sexta-Feira", "Sábado"];
    const weekday = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"];
    const month = ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"];

    let d = dataDeHoje.getDate();
    let m = month[dataDeHoje.getUTCMonth()];
    let a = dataDeHoje.getFullYear();
    let diaSemana = weekday[dataDeHoje.getUTCDay()];

    hoje.textContent = d + " / " + m + " / " +  a;
    dia.textContent = diaSemana;
}

function addZero(i) // adiciona zero na frente de números menores que 10
{
    if (i < 10) {i = "0" + i}; 
    return i;
}

function getUserPosition()
{
  let url = '';
  navigator.geolocation.getCurrentPosition((pos) => {
    let lat = pos.coords.latitude;
    let long = pos.coords.longitude;
    url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&units=imperial&APPID=622296cd4fda08b69c46ccfa980f968d`;
    fetchApi(url);
    console.log(url);
    setTimeout(getUserPosition, 60000); // callback pra função atualizar a temperatura a cada minuto
  })
}

function fetchApi(url)
{
  let cidade = document.querySelector("#cidade");
  let temp = document.querySelector("#temperatura");
  let sens = document.querySelector("#sensacao");

  fetch(url)
  .then((data) => {
    return data.json()
  })
  .then((data) => {
    console.log(data);
    let tempEmCelsius = ((5/9) * (data.main.temp-32)).toFixed(1);
    let sensacao = ((5/9) * (data.main.feels_like-32)).toFixed(1);
    
    cidade.textContent = data.name;
    temp.innerHTML = tempEmCelsius + " ºC";
    sens.textContent = "Sens. Térm: " + sensacao + " ºC";
  })
  .catch((err) => {
    cidade.innerText = `Impossível acessar o OpenWeather. Verifique a sua conexão.`;
    temp.innerHTML = `-`;
  })
}

getUserPosition();

/* ideias de funcionalidades
secao de opçoes para personalizar
jogar a moeda
rolar dado
ampulheta/temporizador
cronometro
*/
