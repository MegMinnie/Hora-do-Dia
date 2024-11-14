const botao = document.querySelector("button");
const periodo = document.querySelector(".periodo");
const corpo = document.querySelector("body");

function atualizarHora() {
  const meses = [
    "Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
    "Agosto",
    "Setembro",
    "Outubro",
    "Novembro",
    "Dezembro",
  ];
  let agora = new Date();
  let saidaUm = document.getElementById("saidaUm");
  let saidaDois = document.getElementById("saidaDois");

  let dia = agora.getDate();
  let mes = meses[agora.getMonth()];
  let ano = agora.getFullYear();
  let hora = agora.getHours();
  let min = agora.getMinutes();
  let seg = agora.getSeconds();
  let msg;

  if (hora >= 0 && hora < 12) {
    msg = "Bom dia!";
    corpo.style.backgroundImage = "url('assets/fotos/manha.jpg')";
  } else if (hora >= 12 && hora <= 18) {
    msg = "Boa tarde!";
    corpo.style.backgroundImage = "url('assets/fotos/tarde.jpg')";
  } else {
    msg = "Boa noite!";
    corpo.style.backgroundImage = "url('assets/fotos/noite.jpg')";
  }

  periodo.innerHTML = `${msg}`;
  saidaUm.innerHTML = `Agora são ${hora} hora(s), ${min} minuto(s) e ${seg} segundo(s)`;
  saidaDois.innerHTML = `${dia}/ ${mes}/ ${ano}`;
}

setInterval(atualizarHora, 1000);

atualizarHora();
