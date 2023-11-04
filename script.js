const rokBtn = document.getElementById('rok');
const paperBtn = document.getElementById('paper');
const scissBtn = document.getElementById('sciss');
const lizardBtn = document.getElementById('lizard');
const spokBtn = document.getElementById('spok');
const playerRes = document.getElementById('playerRes');
const compRes = document.getElementById('compRes');
const start = document.getElementById('newGame');
const btn = document.querySelectorAll('.btn');

let playerWIN = 0;
let compWIN = 0;
let tie = 0;
let roundWinner = '';

function getComputerChoice() {
  const choice = Math.floor(Math.random() * 5);

  switch (choice) {
    case 0:
      return 'rok';
    case 1:
      return 'paper';
    case 2:
      return 'scissors';
    case 3:
      return 'lizard';
    case 4:
      return 'spok';
  }
}

function playRound(pCh, compCh) {
  if (
    (pCh === 'rok' && compCh === 'lizard') ||
    (pCh === 'rok' && compCh === 'scissors') ||
    (pCh === 'paper' && compCh === 'spok') ||
    (pCh === 'paper' && compCh === 'rok') ||
    (pCh === 'scissors' && compCh === 'paper') ||
    (pCh === 'scissors' && compCh === 'lizard') ||
    (pCh === 'lizard' && compCh === 'spok') ||
    (pCh === 'lizard' && compCh === 'paper') ||
    (pCh === 'spok' && compCh === 'scissors') ||
    (pCh === 'spok' && compCh === 'rok')
  ) {
    playerWIN++;
    roundWinner = 'player';
    playerRes.textContent = `You won ${playerWIN} times`;
  }
  if (pCh === compCh) {
    roundWinner = 'tie';
    tie++;
  }
  if (
    (pCh === 'rok' && compCh === 'paper') ||
    (pCh === 'rok' && compCh === 'spok') ||
    (pCh === 'paper' && compCh === 'scissors') ||
    (pCh === 'paper' && compCh === 'lizard') ||
    (pCh === 'scissors' && compCh === 'rok') ||
    (pCh === 'scissors' && compCh === 'spok') ||
    (pCh === 'lizard' && compCh === 'rok') ||
    (pCh === 'lizard' && compCh === 'scissors') ||
    (pCh === 'spok' && compCh === 'paper') ||
    (pCh === 'spok' && compCh === 'lizard')
  ) {
    compWIN++;
    roundWinner = 'comp';
    compRes.textContent = `Computer won ${compWIN} times`;
  }

  console.log(compWIN, playerWIN, tie);
}

function handleClick(playerChoice) {
  const compChoice = getComputerChoice();
  playRound(playerChoice, compChoice);

  if (isOver()) {
    if (playerWIN > compWIN) {
      playerRes.textContent = 'You win computer';
      compRes.textContent = '';
    } else {
      compRes.textContent = 'Computer win';
      playerRes.textContent = '';
    }
    start.classList.remove('view');
    rokBtn.disabled = true;
    paperBtn.disabled = true;
    scissBtn.disabled = true;
    lizardBtn.disabled = true;
    spokBtn.disabled = true;
  }
}

rokBtn.addEventListener('click', () => {
  handleClick('rok');
});
paperBtn.addEventListener('click', () => {
  handleClick('paper');
});
scissBtn.addEventListener('click', () => {
  handleClick('scissors');
});
lizardBtn.addEventListener('click', () => {
  handleClick('lizard');
});
spokBtn.addEventListener('click', () => {
  handleClick('spok');
});
start.addEventListener('click', () => {
  playerWIN = 0;
  compWIN = 0;
  tie = 0;
  playerRes.textContent = 'Your win';
  compRes.textContent = 'Comp`s win';
  start.classList.add('view');
  rokBtn.disabled = false;
  paperBtn.disabled = false;
  scissBtn.disabled = false;
  lizardBtn.disabled = false;
  spokBtn.disabled = false;
});

function isOver() {
  return playerWIN === 5 || compWIN === 5;
}
