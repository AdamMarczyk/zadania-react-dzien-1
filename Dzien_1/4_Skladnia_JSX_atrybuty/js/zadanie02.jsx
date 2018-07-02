import React from 'react';
import ReactDOM from 'react-dom';

document.addEventListener('DOMContentLoaded', function() {
  //Funkcja generuje pseudolosowe liczby całkowite z zakresu 1-10.
  function genNumber() {
    return Math.round(Math.random() * 9 + 1);
  }
  //Nie modyfikuj kodu powyżej

  const numberA = genNumber();
  const numberB = genNumber();
  const answer = Number(
    prompt(`Podaj wynik dodawania: ${numberA} i ${numberB}`)
  );
  function getAnswerElement(a, b, answer) {
    if (a + b === answer) {
      return <div style={{ backgroundColor: 'green' }}>Odpowiedz poprawna</div>;
    } else {
      return <div style={{ backgroundColor: 'red' }}>Odpowiedz bledna</div>;
    }
  }

  ReactDOM.render(
    <div>{getAnswerElement(numberA, numberB, answer)}</div>,
    document.getElementById('app')
  );
});
