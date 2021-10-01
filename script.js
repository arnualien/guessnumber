'use strict';
let randomNumber_by_system = Math.trunc(Math.random() * 20) + 1;
let highScore = 0;
var count = 20;
document.querySelector('.check').addEventListener('click', function () {
  const Guess = Number(document.querySelector('.guess').value);
  if (!Guess) {
    document.querySelector('.message').textContent = '⛔ No Number';
  } else if (Guess > 20) {
    document.querySelector('.message').textContent = '👎 Hasta la vista';
  } else if (Guess === randomNumber_by_system) {
    document.querySelector('.message').textContent = 'You Won';
    document.querySelector('.number').textContent = randomNumber_by_system;
    document.querySelector('body').style.backgroundColor = 'Green';

    if (count > highScore) {
      highScore = count;
      document.querySelector('.highscore').textContent = count;
    } else {
      document.querySelector('.highscore').textContent = highScore;
    }
    highScore = randomNumber_by_system;
  } else if (Guess > randomNumber_by_system) {
    document.querySelector('.message').textContent = 'Guess Too heigh';
    count--;
    document.querySelector('.score').textContent = count;
  } else if (Guess < randomNumber_by_system) {
    document.querySelector('.message').textContent = 'Guess Too low';
    count--;
    document.querySelector('.score').textContent = count;
  }
  if (count < 0) {
    document.querySelector('.message').textContent = 'You Lose the game';
    document.querySelector('.score').textContent = 0;
  }
});

document.querySelector('.again').addEventListener('click', function () {
  count = 20;
  randomNumber_by_system = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('body').style.backgroundColor = 'Black';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.score').textContent = 20;
  document.querySelector('.guess').value = '';
});
