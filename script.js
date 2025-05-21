function displayWelcomeMessage() {
    const userName = localStorage.getItem('userName');

    if (userName) {
        alert(`Welcome back, ${userName}! We're glad to see you again.`);
    } else {
        const name = prompt('Welcome! What is your name?');
        if (name) {
            localStorage.setItem('userName', name);
            alert(`Nice to meet you, ${name}!`);
        } else {
            alert('Welcome, guest!');
        }
    }
}

function toggleDarkMode() {
    const body = document.body;
    body.classList.toggle('dark-mode'); 
    
    if (body.classList.contains('dark-mode')) {
        localStorage.setItem('theme', 'dark');
    } else {
        localStorage.setItem('theme', 'light');
    }
}

function applySavedTheme() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-mode');
    }
}

document.addEventListener('DOMContentLoaded', () => {    
    const welcomeButton = document.getElementById('welcomeButton');
    if (welcomeButton) {
        welcomeButton.addEventListener('click', displayWelcomeMessage);
    }
    
    const darkModeToggle = document.getElementById('darkModeToggle');
    if (darkModeToggle) {
        darkModeToggle.addEventListener('click', toggleDarkMode);
    }
    
    applySavedTheme();
});