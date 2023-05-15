// selecione os elementos necessários do HTML
const timer = document.getElementById('timer');
const startButton = document.getElementById('startButton');
const pauseButton = document.getElementById('pauseButton');
const resetButton = document.getElementById('resetButton');

// inicialize as variáveis ​​do cronômetro
let startTime;
let elapsedTime = 0;
let timerInterval;

// crie uma função para formatar o tempo em HH:MM:SS
function formatTime(time) {
	let hours = Math.floor(time / 3600);
	let minutes = Math.floor((time - hours * 3600) / 60);
	let seconds = time - hours * 3600 - minutes * 60;
	
	hours = String(hours).padStart(2, '0');
	minutes = String(minutes).padStart(2, '0');
	seconds = String(seconds).padStart(2, '0');
	
	return `${hours}:${minutes}:${seconds}`;
}

// crie uma função para atualizar o cronômetro
function updateTimer() {
	const currentTime = Date.now();
	elapsedTime = Math.floor((currentTime - startTime) / 1000);
	timer.innerText = formatTime(elapsedTime);
}

// crie uma função para iniciar o cronômetro
function startTimer() {
	startTime = Date.now() - elapsedTime * 1000;
	timerInterval = setInterval(updateTimer, 1000);
	
	// desative o botão "Iniciar" e ative os botões "Pausar" e "Redefinir"
	startButton.disabled = true;
	pauseButton.disabled = false;
	resetButton.disabled = false;
}

// crie uma função para pausar o cronômetro
function pauseTimer() {
	clearInterval(timerInterval);
	
	// desative o botão "Pausar" e ative o botão "Iniciar"
	pauseButton.disabled = true;
	startButton.disabled = false;
}

// crie uma função para redefinir o cronômetro
function resetTimer() {
	clearInterval(timerInterval);
	elapsedTime = 0;
	timer.innerText = '00:00:00';
	
	// desative os botões "Pausar" e "Redefinir" e ative o botão "Iniciar"
	pauseButton.disabled = true;
	resetButton.disabled = true;
	startButton.disabled = false;
}

// adicione ouvintes de evento aos botões
startButton.addEventListener('click', startTimer);
pauseButton.addEventListener('click', pauseTimer);
resetButton.addEventListener('click', resetTimer);

// desative os botões "Pausar" e "Redefinir" no início
pauseButton.disabled = true;
resetButton.disabled = true;