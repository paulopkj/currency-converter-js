

// MAPEAMENTO DO BUTAO E SELECT LOGO A BAIXO!

const botaoDeConversaoPrincipal = document.querySelector(".botao-de-conversao-principal")  // ---HTML LINHA 34 ---
const selectDeMoedas = document.querySelector(".selecao-de-moeda")  // ---HTML LINHA 23 ---

// --- FUNÇÃO DE CONVERSÃO DE VALORES ---
function converterValores() {

    const inputMoedaValor = document.querySelector(".input-moeda-convertida").value   // --- HTML LINHA 31 ---
    const valorEmReal = document.querySelector(".valor-da-moeda-para-convercao")   // --- HTML LINHA 40 ---
    const valorConvertido = document.querySelector(".valor-da-moeda-ja-convertida")   // --- HTML LINHA 48 ---

    const dolaDoDia = 5.2   // --- VALOR FIXO DO DÓLAR ---
    const euroDoDia = 6.2   // --- VALOR FIXO DO EURO ---


    // --- CONVERSÃO PARA DÓLAR ---  // OBS: ESSE TRECHO DE CÓDIGO PEGUEI ALGUMAS COISAS DA INTERNET!
    if (selectDeMoedas.value == "dola") {   
        valorConvertido.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputMoedaValor / dolaDoDia)
    }

    // --- CONVERSÃO PARA EURO ---  // OBS: ESSE TRECHO DE CÓDIGO PEGUEI ALGUMAS COISAS DA INTERNET!
    if (selectDeMoedas.value == "euro") {   
        valorConvertido.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputMoedaValor / euroDoDia)
    }

    // --- VALOR EM REAL ---  // OBS: ESSE TRECHO DE CÓDIGO PEGUEI ALGUMAS COISAS DA INTERNET!
    valorEmReal.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(inputMoedaValor)
}

// --- TROCAR IMAGEM + TEXTO DA MOEDA ---

function trocarImagemEMoeda() {

    const moedaEmDola = document.querySelector(".moeda-em-dola")  // ---HTML LINHA 47 ---
    const moedaimagem = document.querySelector(".moeda-img")  // ---HTML LINHA 46 ---

    // Aplica fade-out
    moedaimagem.classList.add("fade")
    moedaEmDola.classList.add("fade")

    setTimeout(() => {

        if (selectDeMoedas.value == "dola") {
            moedaEmDola.innerHTML = "Dólar Americano"
            moedaimagem.src = "./dolar.png"
        }

        if (selectDeMoedas.value == "euro") {
            moedaEmDola.innerHTML = "Euro"
            moedaimagem.src = "./assets/euro.png"
        }

        // Remove fade (volta fade-in)
        moedaimagem.classList.remove("fade")
        moedaEmDola.classList.remove("fade")

        converterValores()  // Chama a função de conversão de valores que esta logo no inicio do código!

    }, 250); // Duração do fade em milissegundos
}


selectDeMoedas.addEventListener("change", trocarImagemEMoeda)  // --- EVENTO DE TROCA NO SELECT DE MOEDAS ---
botaoDeConversaoPrincipal.addEventListener("click", converterValores)  // --- EVENTO DE CLICK NO BOTÃO DE CONVERSÃO ---



    //--JAVASCRIPT ANIMAÇÃO DE SCROLLREVEAL -->//

  ScrollReveal().reveal('main', {
    duration: 1200,
    distance: '60px',
    origin: 'bottom',
    easing: 'ease-out',
    reset: false
  });

  ScrollReveal().reveal('.currency-box', {
    duration: 1000,
    distance: '50px',
    origin: 'left',
    easing: 'ease-out',
    interval: 150
  });

  ScrollReveal().reveal('.arrow-img', {
    duration: 900,
    scale: 0.5,
    easing: 'ease-in-out'
  });

  ScrollReveal().reveal('.botao-de-conversao-principal', {
    duration: 900,
    distance: '40px',
    origin: 'top'
  });