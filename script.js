document.getElementById('celebrateBtn').addEventListener('click', function() {
    // Play sound
    const sound = document.getElementById('celebrationSound');
    sound.play();

    // Show confetti
    confetti({
        particleCount: 1000,
        spread: 700,
        origin: { y: 0.6 }
    });

    // Show the birthday message
    const birthdayMessage = document.getElementById('birthdayMessage');
    birthdayMessage.style.display = 'block'; // Make the message visible

    // Optional: You can add more confetti bursts
    setTimeout(() => {
        confetti({
            particleCount: 1000,
            spread: 700,
            origin: { y: 0.6 }
        });
    }, 500);
});
// Countdown Timer
const birthdayDate = new Date("2025-04-06T00:00:00"); // Set your birthday date here
const countdownElement = document.getElementById('countdown');

function updateCountdown() {
    const now = new Date();
    const timeRemaining = birthdayDate - now;

    const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

    countdownElement.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s until your birthday!`;
}

setInterval(updateCountdown, 1000);