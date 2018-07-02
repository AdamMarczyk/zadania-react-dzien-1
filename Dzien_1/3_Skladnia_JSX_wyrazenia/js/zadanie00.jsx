import React from 'react';
import ReactDOM from 'react-dom';

document.addEventListener('DOMContentLoaded', function() {
  let numberA = Number(prompt('Podaj liczbę A'));
  let numberB = Number(prompt('Podaj liczbę B'));

  ReactDOM.render(
    <div>{numberA + numberB}</div>,
    document.getElementById('app')
  );
});
