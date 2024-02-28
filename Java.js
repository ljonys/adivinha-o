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

    if (guess === secretNumber) {
        document.getElementById('result').innerHTML = `Parabéns! Você acertou em ${attempts} tentativas.`;
        document.getElementById('result').style.color = 'green';
        document.getElementById('guessInput').setAttribute('disabled', 'true');
    } else {
        const hint = guess < secretNumber ? 'Muito baixo.' : 'Muito alto.';
        document.getElementById('result').innerHTML = `Errado. ${hint} Tente novamente.`;
        document.getElementById('result').style.color = 'red';
    }
}
