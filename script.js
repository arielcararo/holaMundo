// Elementos del DOM
const messageElement = document.getElementById('message');
const changeBtn = document.getElementById('changeBtn');
const resetBtn = document.getElementById('resetBtn');
const clickCountElement = document.getElementById('clickCount');

// Variables
let clickCount = 0;
let currentMessageIndex = 0;

// Array de mensajes divertidos
const messages = [
    "¡Hola Mundo! 🌍",
    "¡Bienvenido a mi app! 👋",
    "¡Espero que te guste! 😊",
    "¡Gracias por visitarme! 🙏",
    "¡Que tengas un día increíble! ✨",
    "¡Coding is fun! 💻",
    "¡JavaScript es genial! 🚀",
    "¡HTML + CSS + JS = ❤️",
    "¡Desarrollo web es pasión! 🔥",
    "¡Sigue programando! 🎯"
];

// Función para cambiar el mensaje
function changeMessage() {
    currentMessageIndex = (currentMessageIndex + 1) % messages.length;
    messageElement.textContent = messages[currentMessageIndex];
    
    // Incrementar contador
    clickCount++;
    clickCountElement.textContent = clickCount;
    
    // Efecto de animación
    messageElement.style.transform = 'scale(1.1)';
    setTimeout(() => {
        messageElement.style.transform = 'scale(1)';
    }, 200);
}

// Función para reiniciar
function resetApp() {
    currentMessageIndex = 0;
    clickCount = 0;
    messageElement.textContent = messages[0];
    clickCountElement.textContent = clickCount;
    
    // Efecto de animación para el reset
    messageElement.style.transform = 'scale(0.9)';
    setTimeout(() => {
        messageElement.style.transform = 'scale(1)';
    }, 200);
}

// Event listeners
changeBtn.addEventListener('click', changeMessage);
resetBtn.addEventListener('click', resetApp);

// Efecto de entrada para los botones
document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach((button, index) => {
        button.style.animationDelay = `${index * 0.1}s`;
        button.style.animation = 'fadeIn 0.8s ease-out forwards';
    });
});

// Efecto de hover para el contador
clickCountElement.addEventListener('mouseenter', () => {
    clickCountElement.style.color = '#667eea';
    clickCountElement.style.fontWeight = 'bold';
});

clickCountElement.addEventListener('mouseleave', () => {
    clickCountElement.style.color = '#666';
    clickCountElement.style.fontWeight = 'normal';
});

// Función para mostrar la hora actual
function showCurrentTime() {
    const now = new Date();
    const timeString = now.toLocaleTimeString('es-ES');
    console.log(`Hora actual: ${timeString}`);
}

// Mostrar hora cada 30 segundos
setInterval(showCurrentTime, 30000);

// Mensaje de bienvenida en consola
console.log('🚀 ¡Hola Mundo App iniciada!');
console.log('💡 Tips:');
console.log('- Haz clic en "Cambiar Mensaje" para ver diferentes mensajes');
console.log('- Usa "Reiniciar" para volver al estado inicial');
console.log('- Observa el contador de clicks');