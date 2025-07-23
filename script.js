// Target date: September 27, 2025 at 00:00
const targetDate = new Date('2025-09-27T00:00:00').getTime();

// Create floating background shapes
function createFloatingShapes() {
    const container = document.querySelector('.background-animation');
    for (let i = 0; i < 6; i++) {
        const shape = document.createElement('div');
        shape.classList.add('floating-shape');
        shape.style.left = Math.random() * 100 + '%';
        shape.style.width = shape.style.height = Math.random() * 100 + 20 + 'px';
        shape.style.animationDelay = Math.random() * 20 + 's';
        shape.style.animationDuration = (Math.random() * 10 + 15) + 's';
        container.appendChild(shape);
    }
}

function updateCountdown() {
    const now = new Date().getTime();
    const timeLeft = targetDate - now;

    if (timeLeft > 0) {
        const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

        document.getElementById('days').textContent = days.toString().padStart(2, '0');
        document.getElementById('hours').textContent = hours.toString().padStart(2, '0');
        document.getElementById('minutes').textContent = minutes.toString().padStart(2, '0');
        document.getElementById('seconds').textContent = seconds.toString().padStart(2, '0');
    } else {
        // Countdown finished
        document.getElementById('days').textContent = '00';
        document.getElementById('hours').textContent = '00';
        document.getElementById('minutes').textContent = '00';
        document.getElementById('seconds').textContent = '00';
    }
}

// Initialize
createFloatingShapes();
updateCountdown();

// Update every second
setInterval(updateCountdown, 1000);
