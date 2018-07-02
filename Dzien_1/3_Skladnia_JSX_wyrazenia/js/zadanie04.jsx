import React from 'react';
import ReactDOM from 'react-dom';

document.addEventListener('DOMContentLoaded', function() {
  let numberA = Number(prompt('Podaj liczbę A'));
  let numberB = Number(prompt('Podaj liczbę B'));
  let operation = prompt('Podaj znak');

  const calc = (a, b, operation) => {
    if (operation === '+') {
      return <h1>{numberA + numberB}</h1>;
    } else if (operation === '-') {
      return <h2>{numberA - numberB}</h2>;
    } else if (operation === '*') {
      return <h3>{numberA * numberB}</h3>;
    } else if (operation === '/') {
      return <h4>{numberA / numberB}</h4>;
    }
  };

  ReactDOM.render(
    <div>{calc(numberA, numberB, operation)}</div>,
    document.getElementById('app')
  );
});
