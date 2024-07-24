const playerZero = document.querySelector('.player--0');
const playerOne = document.querySelector('.player--1');
const scoreZero = document.querySelector('#score--0');
const scoreOne = document.querySelector('#score--1');
const currentZero = document.querySelector('#current--0');
const currentOne = document.querySelector('#current--1');
const diceR = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

const init = function () {
  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  playing = true;

  scoreZero.textContent = 0;
  scoreOne.textContent = 0;
  currentZero.textContent = 0;
  currentOne.textContent = 0;

  diceR.classList.add('hidden');
  playerZero.classList.remove('player--winner');
  playerOne.classList.remove('player--winner');
  playerZero.classList.add('player--active');
  playerOne.classList.remove('player--active');
};
init();

const switchPlayer = function () {
  document.querySelector(`#current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  playerZero.classList.toggle('player--active');
  playerOne.classList.toggle('player--active');
};

btnRoll.addEventListener('click', function () {
  if (playing) {
    
    const dice = Math.trunc(Math.random() * 6) + 1;

    diceR.classList.remove('hidden');
    diceR.src = `./images/dice-${dice}.png`;

    if (dice !== 1) {

      currentScore += dice;
      document.querySelector(`#current--${activePlayer}`).textContent = currentScore;

    } else {
      switchPlayer();
    }
  }
});

btnHold.addEventListener('click', function () {
  if (playing) {

    scores[activePlayer] += currentScore;

    document.querySelector(`#score--${activePlayer}`).textContent =
      scores[activePlayer];

    if (scores[activePlayer] >= 100) {
    
      playing = false;
      diceR.classList.add('hidden');

      document.querySelector(`.player--${activePlayer}`)
      .classList.add('player--winner');

      document.querySelector(`.player--${activePlayer}`)
      .classList.remove('player--active');

    } else {
      switchPlayer();
    }
  }
});

btnNew.addEventListener('click', init);
