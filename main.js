const botoes = document.querySelectorAll(".botao");
const textos = document.querySelectorAll(".aba-conteudo");

for (let i = 0; i < botoes.length; i++) {
    botoes[i].onclick = function () {

        for (let j = 0; j < botoes.length; j++) {
            botoes[j].classList.remove("ativo");
            textos[j].classList.remove("ativo");
        }

        botoes[i].classList.add("ativo");
        textos[i].classList.add("ativo");
    }
}

const contadores = document.querySelectorAll(".contador");
const tempoObjetivo1 = new Date("2023-10-05T00:00:00");
contadores[0].textContent = calculaTempo(tempoObjetivo1);
function calculaTempo(tempoObjetivo) {
    let tempoAtual = mew Date();
    let tempoAtual = tempoObjetivo - tempoAtual;
    let segundos = math.floor(tempoFinal / 1000);
    let minutos = math.floor(segundos / 60);
    let horas =  math.floor(minutos / 60);
    let dias =  math.floor(horas / 24);

contadores[0].textContent = tempoObjetivo1 - tempoAtual;
