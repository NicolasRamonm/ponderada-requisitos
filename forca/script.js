const API_URL = "https://api.dicionario-aberto.net/random"; // URL da API

let selectedWord = "";
let guessedLetters = [];
let attemptsLeft = 6;

// Função para buscar uma palavra aleatória da API
async function fetchRandomWord() {
    try {
        const response = await fetch(API_URL);
        const data = await response.json();
        
        let word = data.word.toLowerCase();

        // Garantimos que a palavra tenha pelo menos 4 letras para um jogo mais interessante
        if (word.length < 4) {
            return fetchRandomWord(); // Se for curta, buscamos outra
        }

        selectedWord = word;
        guessedLetters = [];
        attemptsLeft = 6;

        document.getElementById("message").innerText = "";
        document.getElementById("attempts").innerText = attemptsLeft;
        document.getElementById("used-letters").innerText = "";
        document.getElementById("letter-input").disabled = false;

        displayWord();
    } catch (error) {
        console.error("Erro ao buscar palavra:", error);
        document.getElementById("message").innerText = "Erro ao carregar palavra. Tente novamente.";
    }
}

// Exibe a palavra oculta com letras acertadas
function displayWord() {
    let display = selectedWord.split("").map(letter => guessedLetters.includes(letter) ? letter : "_").join(" ");
    document.getElementById("word-display").innerText = display;
}

// Função para tentar uma letra
function guessLetter() {
    let input = document.getElementById("letter-input").value.toLowerCase();
    document.getElementById("letter-input").value = ""; 

    if (!input || guessedLetters.includes(input) || input.length !== 1) {
        document.getElementById("message").innerText = "Digite uma letra válida!";
        return;
    }

    guessedLetters.push(input);

    if (!selectedWord.includes(input)) {
        attemptsLeft--;
    }

    document.getElementById("attempts").innerText = attemptsLeft;
    document.getElementById("used-letters").innerText = guessedLetters.join(", ");

    displayWord();
    checkGameStatus();
}

// Verifica se o jogo acabou
function checkGameStatus() {
    if (!document.getElementById("word-display").innerText.includes("_")) {
        document.getElementById("message").innerText = "Parabéns! Você ganhou!";
        document.getElementById("letter-input").disabled = true;
    } else if (attemptsLeft === 0) {
        document.getElementById("message").innerText = `Você perdeu! A palavra era "${selectedWord}".`;
        document.getElementById("letter-input").disabled = true;
    }
}

// Reinicia o jogo pegando uma nova palavra da API
function resetGame() {
    fetchRandomWord();
}

// Inicia o jogo ao carregar a página
fetchRandomWord();
