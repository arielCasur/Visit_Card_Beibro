// State management
let isFlipped = false;
let currentTheme = 'green1';



// Theme definitions
const themes = {
    green1: { name: 'green1', className: 'theme-green1', textClass: 'text-green1' },
    green2: { name: 'green2', className: 'theme-green2', textClass: 'text-green2' },
    green3: { name: 'green3', className: 'theme-green3', textClass: 'text-green3' },
};

// Initialize Lucide icons
document.addEventListener('DOMContentLoaded', function() {
    updateTheme();
});

// Flip card function
function flipCard() {
    isFlipped = !isFlipped;
    const cardInner = document.getElementById('cardInner');
    const flipButtonText = document.getElementById('flipButtonText');
    
    if (isFlipped) {
        cardInner.classList.add('flipped');
        flipButtonText.textContent = 'Voir le Recto';
    } else {
        cardInner.classList.remove('flipped');
        flipButtonText.textContent = 'Voir le Verso';
    }
}

// Set theme function
function setTheme(theme) {
    currentTheme = theme;
    
    // Update theme buttons
    document.querySelectorAll('.theme-button').forEach(btn => {
        btn.classList.remove('active');
    });
    
    const activeButton = document.querySelector(`.theme-button.${themes[theme].className}`);
    if (activeButton) {
        activeButton.classList.add('active');
    }
    
    updateTheme();
}

// Update theme colors
function updateTheme() {
    const cardFront = document.getElementById('cardFront');
    const flipButton = document.getElementById('flipButton');
    const theme = themes[currentTheme];
    
    // Remove all theme classes
    Object.values(themes).forEach(t => {
        cardFront.classList.remove(t.className);
        flipButton.classList.remove(t.className);
    });
    
    // Add current theme class
    cardFront.classList.add(theme.className);
    flipButton.classList.add(theme.className);
    
    // Update icon colors
    updateIconColors();
}

// Update icon colors based on theme
function updateIconColors() {
    const theme = themes[currentTheme];

    // Cible uniquement les icônes qui NE sont PAS dans .card-back
    const iconElements = document.querySelectorAll(
        '.card-front i, .controls i, .data-preview i, .front-contacts a'
    );

    iconElements.forEach(icon => {
        Object.values(themes).forEach(t => {
            icon.classList.remove(t.textClass);
        });
        icon.classList.add(theme.textClass);
    });
}

