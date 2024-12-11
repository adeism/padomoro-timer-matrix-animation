const canvas = document.getElementById('matrixCanvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const matrixChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ123456789@#$%^&*()*&^%$#@!';
const matrix = matrixChars.split('');

const fontSize = 10;
const columns = canvas.width / fontSize;
const drops = [];

for (let x = 0; x < columns; x++) {
    drops[x] = 1;
}

let themeColor = 'rgb(0, 255, 0)'; // Initial theme color

function drawMatrix() {
    ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = themeColor; // Use the updated themeColor
    ctx.font = fontSize + 'px arial';

    for (let i = 0; i < drops.length; i++) {
        const text = matrix[Math.floor(Math.random() * matrix.length)];
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
            drops[i] = 0;
        }
        drops[i]++;
    }
}

setInterval(drawMatrix, 35);

let timerInterval;
let timeLeft = 25 * 60;
let isRunning = false;
let isBreakTime = false;

function updateTimer() {
    const minutes = Math.floor(timeLeft / 60);
    let seconds = timeLeft % 60;
    seconds = seconds < 10 ? '0' + seconds : seconds;
    document.getElementById('timer').innerText = `${minutes}:${seconds}`;
}

function startStopTimer() {
    if (isRunning) {
        clearInterval(timerInterval);
        document.getElementById('startStop').innerText = 'Start';
    } else {
        timerInterval = setInterval(() => {
            if (timeLeft <= 0) {
                clearInterval(timerInterval);
                if (!isBreakTime) {
                    showPopup(); // Tampilkan popup saat waktu kerja habis
                } else {
                    showAlert();  // Tampilkan alert saat break time habis
                }
                isRunning = false;
            } else {
                timeLeft--;
                updateTimer();
            }
        }, 1000);
        document.getElementById('startStop').innerText = 'Stop';
    }
    isRunning = !isRunning;
}

function resetTimer() {
    clearInterval(timerInterval);
    timeLeft = 25 * 60; // Selalu reset ke 25 menit
    updateTimer();
    document.getElementById('startStop').innerText = 'Start';
    isRunning = false;
    isBreakTime = false; // Set isBreakTime ke false setelah reset
}

function changeTheme() {
    const selectedTheme = document.getElementById('themeSelect').value;
    const root = document.documentElement;
    const timerElement = document.getElementById('timer');
    const startStopButton = document.getElementById('startStop');
    const resetButton = document.getElementById('reset');
    const themeSelect = document.getElementById('themeSelect');

    if (selectedTheme === 'yellow') {
        // Yellow theme specific styling
        root.style.setProperty('--text-color', '#ff0');
        root.style.setProperty('--button-color', 'rgba(255, 255, 0, 0.5)');
        root.style.setProperty('--button-hover-color', 'rgba(255, 255, 0, 0.7)');
        root.style.setProperty('--select-color', 'rgba(255, 255, 0, 0.5)');
        root.style.setProperty('--select-hover-color', 'rgba(255, 255, 0, 0.7)');

        timerElement.style.color = '#ff0'; // Yellow timer text
        timerElement.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';

        startStopButton.style.color = '#ff0';
        resetButton.style.color = '#ff0';
        themeSelect.style.color = '#ff0';
    } else {
        const themeHexColor = getHexColor(selectedTheme);
        const themeRGB = getRGB(selectedTheme);

        root.style.setProperty('--text-color', themeHexColor);
        root.style.setProperty('--button-color', `rgba(${themeRGB}, 0.5)`);
        root.style.setProperty('--button-hover-color', `rgba(${themeRGB}, 0.7)`);
        root.style.setProperty('--select-color', 'rgba(0, 0, 0, 0.5)');
        root.style.setProperty('--select-hover-color', 'rgba(0, 0, 0, 0.7)');

        timerElement.style.color = themeHexColor;
        timerElement.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';

        startStopButton.style.color = themeHexColor;
        resetButton.style.color = themeHexColor;
        themeSelect.style.color = themeHexColor;
    }

    // Update matrix animation color
    themeColor = `rgb(${getRGB(selectedTheme)})`;

    // Update timer shadow
    timerElement.style.boxShadow = `0 0 30px var(--button-color)`;
}

function getRGB(color) {
    switch (color) {
        case 'green': return '0, 255, 0';
        case 'blue': return '0, 0, 255';
        case 'red': return '255, 0, 0';
        case 'yellow': return '255, 255, 0';
        default: return '0, 255, 0';
    }
}

function getHexColor(color) {
    switch (color) {
        case 'green': return '#0f0';
        case 'blue': return '#00f';
        case 'red': return '#f00';
        case 'yellow': return '#ff0';
        default: return '#0f0';
    }
}

document.getElementById('startStop').addEventListener('click', startStopTimer);
document.getElementById('reset').addEventListener('click', resetTimer);
document.getElementById('themeSelect').addEventListener('change', changeTheme);
updateTimer();

// Fungsi untuk menampilkan popup
function showPopup() {
    const popup = document.getElementById('popup');
    popup.classList.add('show');
}

// Fungsi untuk menyembunyikan popup
function hidePopup() {
    const popup = document.getElementById('popup');
    popup.classList.remove('show');
}

// Event listener untuk tombol Ok
document.getElementById('okButton').addEventListener('click', () => {
    hidePopup();
    isBreakTime = true;
    timeLeft = 5 * 60; // Set waktu istirahat 5 menit
    updateTimer();
    startStopTimer(); // Langsung mulai timer istirahat
});

// Event listener untuk tombol Skip
document.getElementById('skipButton').addEventListener('click', () => {
    hidePopup();
    resetTimer(); // Reset ke 25 menit
});

// Fungsi untuk memainkan suara alert (opsional)
function playAlertSound() {
  // Implementasi sederhana, browser mungkin memblokir autoplay
  const audio = new Audio('path/to/your/sound.mp3'); // Ganti dengan path ke file audio
  audio.play().catch(error => {
    console.warn("Autoplay audio diblokir oleh browser:", error);
  });
}

// Fungsi untuk menampilkan alert
let alertTimeout; // Variabel untuk menyimpan timeout alert
function showAlert() {
    const alert = document.getElementById('alert');
    alert.classList.add('show');
    playAlertSound();

    // Auto-close alert setelah 10 detik
    clearTimeout(alertTimeout); // Hapus timeout sebelumnya jika ada
    alertTimeout = setTimeout(() => {
        hideAlert();
        resetTimer(); // Reset dan mulai timer utama
        isBreakTime = false; // Set kembali ke mode kerja
        startStopTimer(); // Mulai timer utama
    }, 10000);
}

// Fungsi untuk menyembunyikan alert
function hideAlert() {
    const alert = document.getElementById('alert');
    alert.classList.remove('show');
}
