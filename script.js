// Gera um número aleatório entre 1 e 10
const secretNumber = Math.floor(Math.random() * 10) + 1;

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
    const particlesContainer = document.getElementById('particles-js');

    if (guess === secretNumber) {
        resultElement.textContent = `Parabéns! Você acertou em ${attempts} tentativas.`;
        resultElement.style.color = 'green';
        inputElement.setAttribute('disabled', 'true');
        showFireworks(particlesContainer);
    } else {
        const hint = guess < secretNumber ? 'Muito baixo.' : 'Muito alto.';
        resultElement.textContent = `Errado. ${hint} Tente novamente.`;
        resultElement.style.color = 'red';
    }
}

function showFireworks(container) {
    particlesJS('particles-js', {
        particles: {
            number: {
                value: 80,
                density: {
                    enable: true,
                    value_area: 800
                }
            },
            color: {
                value: "#ffffff"
            },
            shape: {
                type: "circle",
                stroke: {
                    width: 0,
                    color: "#000000"
                },
                polygon: {
                    nb_sides: 5
                },
                image: {
                    src: "img/github.svg",
                    width: 100,
                    height: 100
                }
            },
            opacity: {
                value: 0.5,
                random: false,
                anim: {
                    enable: false,
                    speed: 1,
                    opacity_min: 0.1,
                    sync: false
                }
            },
            size: {
                value: 5,
                random: true,
                anim: {
                    enable: false,
                    speed: 40,
                    size_min: 0.1,
                    sync: false
                }
            },
            line_linked: {
                enable: true,
                distance: 150,
                color: "#ffffff",
                opacity: 0.4,
                width: 1
            },
            move: {
                enable: true,
                speed: 6,
                direction: "none",
                random: false,
                straight: false,
                out_mode: "out",
                bounce: false,
                attract: {
                    enable: false,
                    rotateX: 600,
                    rotateY: 1200
                }
            }
        },
        interactivity: {
            detect_on: "canvas",
            events: {
                onhover: {
                    enable: true,
                    mode: "repulse"
                },
                onclick: {
                    enable: true,
                    mode: "push"
                },
                resize: true
            },
            modes: {
                grab: {
                    distance: 400,
                    line_linked: {
                        opacity: 1
                    }
                },
                bubble: {
                    distance: 400,
                    size: 40,
                    duration: 2,
                    opacity: 8,
                    speed: 3
                },
                repulse: {
                    distance: 200
                },
                push: {
                    particles_nb: 4
                },
                remove: {
                    particles_nb: 2
                }
            }
        },
        retina_detect: true
    });
}
