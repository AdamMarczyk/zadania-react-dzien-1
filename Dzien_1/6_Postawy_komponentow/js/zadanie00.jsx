import React from 'react';
import ReactDOM from 'react-dom';

document.addEventListener('DOMContentLoaded', function() {
  class MyComponent extends React.Component {
    render() {
      return (
        <div>
          <input type="text" />
          <button>Wyszukaj</button>
        </div>
      );
    }
  }
  ReactDOM.render(<MyComponent />, document.getElementById('app'));
});
