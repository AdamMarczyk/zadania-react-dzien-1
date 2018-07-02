import React from 'react';
import ReactDOM from 'react-dom';

import people from './zadanie00_02';

document.addEventListener('DOMContentLoaded', function() {
  const myPeople = people.map(person => (
    <div>
      {person.name} {person.surname}
    </div>
  ));

  ReactDOM.render(<div>{myPeople}</div>, document.getElementById('app'));
});
