const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Se você despertasse em uma arena de combate em um mundo pós apocalíptico. Qual seria seu primeiro pensamento?",
        alternativas: [
            {
                texto: "Isso é assustador!",
                afirmacao: "afirmação"
            },
            {
                texto: "Isso é maravilhoso!",
                afirmacao: "afirmação"
            }
        ]
    },
    {
        enunciado: "Uma voz assustadora ressoa de um alto falante em algum lugar da arena junto com vários gritos e aplausos eufóricos, então você percebe que faz parte de um espetáculo macabro. Qual atitude você toma?",
        alternativas: [
            {
                texto: "Entra em completo desespero.",
                afirmacao: "afirmação"
            },
            {
                texto: "Tenta manter a calma e ouvir o que a voz diz.",
                afirmacao: "afirmação"
            }
        ]
    },
    {
        enunciado: "Ela questiona se você gostaria de participar de uma série de desafios. O que você decide? ",
        alternativas: [
            {
                texto: "sim",
                afirmacao: "afirmação"
            },
            {
                texto: "não",
                afirmacao: "afirmação"
            }
        ]
    },
    {
        enunciado: "VOCÊ NÃO TEM ESCOLHA. Em desespero você decide fugir e tem que escolher entre dois caminhos: ",
        alternativas: [
            {
                texto: "Um mais estreito porém mais curto",
                afirmacao: "afirmação"
            },
            {
                texto: "um de fácil mobilidade porém mais longo",
                afirmacao: "afirmação"
            }
        ]
    },
    {
        enunciado: "Você avista a luz da saída, porém sente uma respiração atrás de si. O que você faz? ",
        alternativas: [
            {
                texto: "Se vira para ver o que é ",
                afirmacao: "afirmação"
            },
            {
                texto: "Continua correndo ",
                afirmacao: "afirmação"
            }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "VOCÊ MORREU...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();