import React from 'react';
import ReactDOM from 'react-dom';

document.addEventListener('DOMContentLoaded', function() {
  const age = Number(prompt('Podaj wiek'));
  let elem;
  if (age < 18) {
    elem = <div id="youth">{age}</div>;
  } else {
    elem = <div id="adult">{age}</div>;
  }

  ReactDOM.render(<div>{elem}</div>, document.getElementById('app'));
});
