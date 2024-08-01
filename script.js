// Definimos las respuestas correctas para los juegos
const colorFavorito = "dibujo";
const acertijoRespuesta = "el reloj";
const codigoSecreto = "22/11/2023";

function startGames() {
    document.getElementById('welcome').style.display = 'none';
    document.getElementById('games').style.display = 'block';
}

function checkGuess() {
    const guess = document.getElementById('guess').value.toLowerCase();
    const result = document.getElementById('result1');
    
    if (guess === colorFavorito) {
        result.textContent = "¡Correcto! Mi pasatiempo favorito es el dibujo .";
    } else {
        result.textContent = "No, prueba de nuevo.";
    }
}

function checkRiddle() {
    const answer = document.getElementById('riddleAnswer').value.toLowerCase();
    const result = document.getElementById('result2');
    
    if (answer === acertijoRespuesta) {
        result.textContent = "¡Bien hecho! La respuesta es el reloj.";
    } else {
        result.textContent = "Inténtalo de nuevo.";
    }
}

document.getElementById('heart').addEventListener('click', function() {
    document.getElementById('result3').textContent = "¡Encontraste el corazón!";
    this.style.display = 'none';
});

function checkCode() {
    const code = document.getElementById('code').value;
    const result = document.getElementById('result4');
    
    if (code === codigoSecreto) {
        result.textContent = "¡Código correcto! Ahora puedes ver el mensaje final.";
        setTimeout(function() {
            document.getElementById('games').style.display = 'none';
            document.getElementById('finalMessage').style.display = 'block';
        }, 1000);
    } else {
        result.textContent = "Código incorrecto. Inténtalo de nuevo.";
    }
}
