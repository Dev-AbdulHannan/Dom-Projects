'use strict';
// console.log(document.querySelector('.message').textContent);
// console.log((document.querySelector('.message').textContent = 'Correct No!🎉'));

// document.querySelector('.guess').textContent = 30;

let numb = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
let displaymessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  if (!guess) {
    document.querySelector('.message').textContent = '🚫 No Number!';
  } else if (numb == guess) {
    document.querySelector('.number').textContent = numb;
    document.querySelector('body').style.backgroundColor = '#60b347';
    displaymessage('Correct No!🎉');
    document.querySelector('.number').style.width = '30rem';

    highscore = Math.max(score, highscore);
    document.querySelector('.highscore').textContent = highscore;
  } else if (guess > numb) {
    if (score > 0) {
      displaymessage('Too high☝');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displaymessage('You have lost the game mother fucker💣💥');
    }
  } else if (guess < numb) {
    if (score > 0) {
      document.querySelector('.message').textContent = 'Too low👇';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent =
        'You have lost the game mother fucker💣💥';
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  numb = Math.trunc(Math.random() * 20) + 1;

  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';

  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
