import React from 'react';
import ReactDOM from 'react-dom';

document.addEventListener('DOMContentLoaded', function() {
  const imageUrl =
    'http://www.nice.com/PublishingImages/Career%20images/J---HR_Page-4st-strip-green-hair%20(2).png';

  let color = prompt('Podaj kolor');
  const colors = ['red', 'green', 'blue'];
  let elem;
  let style;
  if (colors.indexOf(color) === -1) {
    elem = <div>Nieprawidlowy kolor</div>;
  } else {
    style = {
      width: '100px',
      height: '100px',
      border: '5px solid ' + color
    };
    elem = <div style={style} />;
  }
  ReactDOM.render(
    <div>
      <img src={imageUrl} /> {elem}
    </div>,
    document.getElementById('app')
  );
});
