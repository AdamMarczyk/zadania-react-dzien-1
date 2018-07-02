import React from 'react';
import ReactDOM from 'react-dom';

document.addEventListener('DOMContentLoaded', function() {
  //Nie modyfikuj kodu powyżej

  const redDiv = <div style={{ height: '100px', backgroundColor: 'red' }} />;
  const greenDiv = (
    <div style={{ height: '100px', backgroundColor: 'green' }} />
  );
  const blueDiv = <div style={{ height: '100px', backgroundColor: 'blue' }} />;

  //Nie modyfikuj kodu poniżej
  ReactDOM.render(
    <div>
      {redDiv}
      {greenDiv}
      {blueDiv}
    </div>,
    document.getElementById('app')
  );
});
