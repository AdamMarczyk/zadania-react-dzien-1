import React from 'react';
import ReactDOM from 'react-dom';

import people from './zadanie00_02';

document.addEventListener('DOMContentLoaded', function() {
  const myPeople = people.map(person => (
    <div className="person">
      <img src={person.avatar} />
      <div className="info">
        <h1>
          {person.title} {person.name} {person.surname}
        </h1>
        <p>{person.bio}</p>
      </div>
    </div>
  ));

  ReactDOM.render(<div>{myPeople}</div>, document.getElementById('app'));
});
