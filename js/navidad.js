
// ---------------------------------------
// |   Realizamos la maquina de escribrir |
// ---------------------------------------

const textMaquina = document.querySelector("#maquina_escribir");

const palabras = [
  "Feliz Navidad",
  "Les Desea ",
  "Juan Pablo",
  
];

let indiceActual = 0;

function maquinaEscribir() {
  textMaquina.innerHTML = "";

  let textArray = palabras[indiceActual];

  textArray = textArray.split("");
  let i = 0;

  const pintarString = setInterval(() => {
    textMaquina.textContent += textArray[i];
    i++;

    if (i == textArray.length) {
      clearInterval(pintarString);

      setTimeout(() => {
        borrarPalabra();
      }, 1000);
    }
  }, 200);
}

function borrarPalabra() {
  let texto = textMaquina.textContent;

  const borrarString = setInterval(() => {
    texto = texto.slice(0, -1);
    textMaquina.textContent = texto;

    if (texto == "") {
      clearInterval(borrarString);
      indiceActual = (indiceActual + 1) % palabras.length;

      setTimeout(() => {
        maquinaEscribir();
      }, 200);
    }
  }, 200);
}

maquinaEscribir();


// --------------------------
// |   Realizamos la Nieve  |
// --------------------------
const contNieve = document.querySelector(".nieve");

contNieve.innerHTML = "";

function generarNieve() {
  Array.from({ length: 50 }).forEach((element) => {
    const num = random(11, 26);
    contNieve.innerHTML += `<span style = "--i:${num}"></span>`;
  });
}
function random(inicio, final) {
  return Math.floor(Math.random() * (final - inicio + 1) + inicio);
}
generarNieve();

// --------------------------
// |   Realizamos el contador  |
// --------------------------
const getRemainTime = (deadline = "Dec 25 2023 11:59:00 GMT-0500") => {
  let now = new Date(),
    remainTime = (new Date(deadline) - now + 1000) / 1000,
    remainSecons = ("0" + Math.floor(remainTime % 60)).slice(-2),
    remainMinutes = ("0" + Math.floor((remainTime / 60) % 60)).slice(-2),
    remainHours = ("0" + Math.floor((remainTime / 3600) % 24)).slice(-2),
    remainDays = Math.floor(remainTime / (3600 * 24));

  return {
    remainTime,
    remainSecons,
    remainMinutes,
    remainHours,
    remainDays,
  };
};

const countdown = (deadline, elem, finalMessage) => {
  const el = document.querySelector(elem);

  const timerUpdate = setInterval(() => {
    let timer = getRemainTime(deadline);
    el.innerHTML = `$dias ${timer.remainDays} horas ${timer.remainHours} minutos ${timer.remainMinutes} segundos ${timer.remainSecons}`;
    if (timer.remainTime <= 1) {
      clearInterval(timerUpdate);
      el.innerHTML = finalMessage;
    }
  }, 1000);
};

console.log(
  countdown("Dec 25 2023 11:59:00 GMT-0500", ".timer", "Feliz Navidad")
);

