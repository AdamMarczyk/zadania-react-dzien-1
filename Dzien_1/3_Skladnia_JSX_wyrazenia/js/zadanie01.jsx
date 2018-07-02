import React from 'react';
import ReactDOM from 'react-dom';

document.addEventListener('DOMContentLoaded', function() {
  let yearOfBirth = Number(prompt('Podaj rok urodzenia'));
  let currentYear = new Date().getFullYear();

  ReactDOM.render(
    <h1>{currentYear - yearOfBirth}</h1>,
    document.getElementById('app')
  );
});
