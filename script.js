// Elementos del DOM
const greetingElement = document.getElementById('greeting');
const descriptionElement = document.getElementById('description');
const currentDateElement = document.getElementById('currentDate');
const currentTimeElement = document.getElementById('currentTime');
const changeGreetingBtn = document.getElementById('changeGreeting');
const changeLanguageBtn = document.getElementById('changeLanguage');
const resetAppBtn = document.getElementById('resetApp');

// Estados de la aplicación
let currentLanguage = 'es';
let greetingIndex = 0;

// Saludos en diferentes idiomas
const greetings = {
    es: [
        '¡Hola Mundo!',
        '¡Buenos días!',
        '¡Buenas tardes!',
        '¡Buenas noches!',
        '¡Saludos!',
        '¡Bienvenido!'
    ],
    en: [
        'Hello World!',
        'Good morning!',
        'Good afternoon!',
        'Good evening!',
        'Greetings!',
        'Welcome!'
    ],
    fr: [
        'Bonjour le monde!',
        'Bonjour!',
        'Bonne après-midi!',
        'Bonsoir!',
        'Salutations!',
        'Bienvenue!'
    ]
};

// Descripciones en diferentes idiomas
const descriptions = {
    es: [
        'Bienvenido a mi primera aplicación web',
        'Esta es una aplicación interactiva',
        '¡Explora las funcionalidades!',
        'Disfruta de la experiencia'
    ],
    en: [
        'Welcome to my first web application',
        'This is an interactive application',
        'Explore the features!',
        'Enjoy the experience'
    ],
    fr: [
        'Bienvenue dans ma première application web',
        'Ceci est une application interactive',
        'Explorez les fonctionnalités!',
        'Profitez de l\'expérience'
    ]
};

// Función para actualizar la fecha y hora
function updateDateTime() {
    const now = new Date();
    
    // Formatear fecha
    const dateOptions = { 
        weekday: 'long', 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
    };
    const formattedDate = now.toLocaleDateString(
        currentLanguage === 'es' ? 'es-ES' : 
        currentLanguage === 'en' ? 'en-US' : 'fr-FR', 
        dateOptions
    );
    
    // Formatear hora
    const timeOptions = { 
        hour: '2-digit', 
        minute: '2-digit', 
        second: '2-digit' 
    };
    const formattedTime = now.toLocaleTimeString(
        currentLanguage === 'es' ? 'es-ES' : 
        currentLanguage === 'en' ? 'en-US' : 'fr-FR', 
        timeOptions
    );
    
    currentDateElement.textContent = formattedDate;
    currentTimeElement.textContent = formattedTime;
}

// Función para cambiar el saludo
function changeGreeting() {
    greetingIndex = (greetingIndex + 1) % greetings[currentLanguage].length;
    greetingElement.textContent = greetings[currentLanguage][greetingIndex];
    
    // Efecto de animación
    greetingElement.style.transform = 'scale(1.1)';
    setTimeout(() => {
        greetingElement.style.transform = 'scale(1)';
    }, 200);
}

// Función para cambiar el idioma
function changeLanguage() {
    const languages = ['es', 'en', 'fr'];
    const currentIndex = languages.indexOf(currentLanguage);
    currentLanguage = languages[(currentIndex + 1) % languages.length];
    
    // Actualizar saludo y descripción
    greetingIndex = 0;
    greetingElement.textContent = greetings[currentLanguage][greetingIndex];
    
    // Cambiar descripción aleatoriamente
    const descIndex = Math.floor(Math.random() * descriptions[currentLanguage].length);
    descriptionElement.textContent = descriptions[currentLanguage][descIndex];
    
    // Actualizar texto de los botones según el idioma
    updateButtonTexts();
    
    // Efecto de transición
    document.body.style.transition = 'all 0.3s ease';
    setTimeout(() => {
        document.body.style.transition = '';
    }, 300);
}

// Función para actualizar textos de botones
function updateButtonTexts() {
    const buttonTexts = {
        es: {
            changeGreeting: 'Cambiar Saludo',
            changeLanguage: 'Cambiar Idioma',
            reset: 'Reiniciar'
        },
        en: {
            changeGreeting: 'Change Greeting',
            changeLanguage: 'Change Language',
            reset: 'Reset'
        },
        fr: {
            changeGreeting: 'Changer Salutation',
            changeLanguage: 'Changer Langue',
            reset: 'Réinitialiser'
        }
    };
    
    changeGreetingBtn.textContent = buttonTexts[currentLanguage].changeGreeting;
    changeLanguageBtn.textContent = buttonTexts[currentLanguage].changeLanguage;
    resetAppBtn.textContent = buttonTexts[currentLanguage].reset;
}

// Función para reiniciar la aplicación
function resetApp() {
    currentLanguage = 'es';
    greetingIndex = 0;
    greetingElement.textContent = greetings[currentLanguage][greetingIndex];
    descriptionElement.textContent = descriptions[currentLanguage][0];
    updateButtonTexts();
    
    // Efecto de reinicio
    const appCard = document.querySelector('.app-card');
    appCard.style.transform = 'rotate(360deg)';
    setTimeout(() => {
        appCard.style.transform = 'rotate(0deg)';
    }, 500);
}

// Event listeners
changeGreetingBtn.addEventListener('click', changeGreeting);
changeLanguageBtn.addEventListener('click', changeLanguage);
resetAppBtn.addEventListener('click', resetApp);

// Inicializar la aplicación
function initApp() {
    updateDateTime();
    updateButtonTexts();
    
    // Actualizar fecha y hora cada segundo
    setInterval(updateDateTime, 1000);
    
    // Efecto de entrada
    setTimeout(() => {
        document.querySelector('.app-card').style.opacity = '1';
    }, 100);
}

// Ejecutar cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', initApp);

// Efectos adicionales
document.addEventListener('mousemove', (e) => {
    const cards = document.querySelectorAll('.info-card');
    const xAxis = (window.innerWidth / 2 - e.pageX) / 25;
    const yAxis = (window.innerHeight / 2 - e.pageY) / 25;
    
    cards.forEach(card => {
        card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
    });
});

// Efecto de partículas de fondo (opcional)
function createParticle() {
    const particle = document.createElement('div');
    particle.style.position = 'fixed';
    particle.style.width = '2px';
    particle.style.height = '2px';
    particle.style.background = 'rgba(255, 255, 255, 0.5)';
    particle.style.borderRadius = '50%';
    particle.style.pointerEvents = 'none';
    particle.style.left = Math.random() * window.innerWidth + 'px';
    particle.style.top = window.innerHeight + 'px';
    particle.style.animation = 'float 3s linear infinite';
    
    document.body.appendChild(particle);
    
    setTimeout(() => {
        particle.remove();
    }, 3000);
}

// Crear partículas cada 2 segundos
setInterval(createParticle, 2000);

// Agregar CSS para la animación de partículas
const style = document.createElement('style');
style.textContent = `
    @keyframes float {
        0% {
            transform: translateY(0px);
            opacity: 1;
        }
        100% {
            transform: translateY(-100vh);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);