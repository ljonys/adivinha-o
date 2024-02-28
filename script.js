// Gera um número aleatório entre 1 e 10
const secretNumber = Math.floor(Math.random() * 10) + 1;

let attempts = 0;

function checkGuess() {
    const guess = parseInt(document.getElementById('guessInput').value);

    if (isNaN(guess) || guess < 1 || guess > 10) {
        alert('Por favor, insira um número entre 1 e 10.');
        return;
    }

    attempts++;

    const resultElement = document.getElementById('result');
    const inputElement = document.getElementById('guessInput');

    if (guess === secretNumber) {
        resultElement.textContent = `Parabéns! Você acertou em ${attempts} tentativas.`;
        resultElement.style.color = 'green';
        inputElement.setAttribute('disabled', 'true');
    } else {
        const hint = guess < secretNumber ? 'Muito baixo.' : 'Muito alto.';
        resultElement.textContent = `Errado. ${hint} Tente novamente.`;
        resultElement.style.color = 'red';
    }
}
