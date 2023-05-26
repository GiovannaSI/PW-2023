const btJogador1 = document.getElementById("btJogador1");
const btJogador2 = document.getElementById("btJogador2");
const btReiniciar = document.getElementById("btReiniciar");
const resultado1 = document.getElementById("resultado1");
const resultado2 = document.getElementById("resultado2");
const resultadoIntermediario = document.getElementById(
  "resultadoParcial"
);
const resultadoFinalRodada = document.getElementById("resultadoFinalRodada");
const resultadoFinal = document.getElementById("resultadoFinal");
const h2Rodada = document.getElementById("h2Rodada");

const maxRodadas = 8;
let rodadas = 0;
let dado1 = {};
let dado2 = {};
let score1 = 0;
let score2 = 0; 

const salvarPontuação = () => {
    localStorage.setItem("dadosJogo", JSON.stringify({score1, score2}));
};

const obterPontuacao = () => {
    const dadosJogo = JSON.parse(localStorage.getItem("dadosJogo"));
    if (dadosJogo) {
      score1 = dadosJogo.score1;
      score2 = dadosJogo.score2;
      resultadoFinalRodada.innerHTML = `${score1} x ${score2}`;
    }
  };

  obterPontuacao();

const calcularRodada = () => {
  if (dado1.valor > dado2.valor) {
    score1 += 1;
    resultadoParcial.innerHTML = "Jogador 1 ganhou";
  } else if (dado2.valor > dado1.valor) {
    score2 += 1;
    resultadoParcial.innerHTML = "Jogador 2 ganhou";
  } else {
    resultadoParcial.innerHTML = "Empate";
  }
  resultadoFinalRodada.innerHTML = `${score1} x ${score2}`;

  salvarPontuação();
};

const calcularFimJogo = () => {
  if (rodadas === maxRodadas) {
    btJogador1.disabled = true;
    if (score1 > score2) {
      resultadoFinal.innerHTML = "Resultado Final = Jogador 1 ganhou";
    } else if (score2 > score1) {
      resultadoFinal.innerHTML = "Resultado Final = Jogador 2 ganhou";
    } else {
      resultadoFinal.innerHTML = "Resultado Final = Empate";
    }
    salvarPontuação();
  }
};

const configuracaoJogada = (bt1, bt2, dado, resultado) => {
  dado.valor = Math.floor(Math.random() * 6) + 1;
  bt1.disabled = true;
  bt2.disabled = false;
  resultado.innerHTML = dado.valor;
};

const handleBtJogador1Click = () => {
  configuracaoJogada(btJogador1, btJogador2, dado1, resultado1);
  rodadas += 1;
  h2Rodada.innerHTML = "Rodada " + rodadas;
  resultado2.innerHTML = "";
  resultadoParcial.innerHTML = "";
};

const handleBtJogador2Click = () => {
  configuracaoJogada(btJogador2, btJogador1, dado2, resultado2);
  calcularRodada();
  calcularFimJogo();
};

const handleBtReiniciarClick = () => {
  rodadas = 0;
  score1 = 0;
  score2 = 0;
  h2Rodada.innerHTML = "Rodada 1";
  resultado1.innerHTML = "";
  resultado2.innerHTML = "";
  resultadoParcial.innerHTML = "";
  resultadoFinalRodada.innerHTML = `${score1} x ${score2}`;
  resultadoFinal.innerHTML = "";
  btJogador1.disabled = false;

  localStorage.removeItem('score1');
  localStorage.removeItem('score2');
};

window.addEventListener('load', () => {
    const pontuacao = obterPontuacao();
    score1 = pontuacao.score1;
    score2 = pontuacao.score2;
});

btJogador1.onclick = handleBtJogador1Click;
btJogador2.onclick = handleBtJogador2Click;
btReiniciar.onclick = handleBtReiniciarClick;