// Gera um número aleatório entre 1 e 10
let secretNumber = Math.floor(Math.random() * 10) + 1;

let attempts = 0;

function checkGuess() {
    const guess = parseInt(document.getElementById('guessInput').value);

    if (Number.isNaN(guess) || guess < 1 || guess > 10) {
        alert('Por favor, insira um número entre 1 e 10.');
        return;
    }

    attempts++;

    const resultElement = document.getElementById('result');
    const inputElement = document.getElementById('guessInput');
    const guessButton = document.getElementById('guessButton');

    if (guess === secretNumber) {
        resultElement.textContent = `Parabéns! Você acertou em ${attempts} tentativas.`;
        resultElement.style.color = 'green';
        inputElement.setAttribute('disabled', 'true');
        guessButton.setAttribute('disabled', 'true');
    } else {
        const hint = guess < secretNumber ? 'Muito baixo.' : 'Muito alto.';
        resultElement.textContent = `Errado. ${hint} Tente novamente.`;
        resultElement.style.color = 'red';
    }
}

function restartGame() {
    // Reseta as variáveis e elementos para reiniciar o jogo
    secretNumber = Math.floor(Math.random() * 10) + 1;
    attempts = 0;

    const resultElement = document.getElementById('result');
    const inputElement = document.getElementById('guessInput');
    const guessButton = document.getElementById('guessButton');

    resultElement.textContent = '';
    resultElement.style.color = '';
    inputElement.value = '';
    inputElement.removeAttribute('disabled');
    guessButton.removeAttribute('disabled');
}
