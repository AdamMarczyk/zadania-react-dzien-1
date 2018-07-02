import React from 'react';
import ReactDOM from 'react-dom';

document.addEventListener('DOMContentLoaded', function() {
  let numberA = Number(prompt('Podaj liczbę A'));
  let numberB = Number(prompt('Podaj liczbę B'));
  let operation = prompt('Podaj znak');
  let elem;
  if (operation === '+') {
    elem = <h1>{numberA + numberB}</h1>;
  } else if (operation === '-') {
    elem = <h2>{numberA - numberB}</h2>;
  } else if (operation === '*') {
    elem = <h3>{numberA * numberB}</h3>;
  } else if (operation === '/') {
    elem = <h4>{numberA / numberB}</h4>;
  }

  ReactDOM.render(<div>{elem}</div>, document.getElementById('app'));
});
