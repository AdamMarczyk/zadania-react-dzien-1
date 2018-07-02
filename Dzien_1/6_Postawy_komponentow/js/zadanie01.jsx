import React from 'react';
import ReactDOM from 'react-dom';

document.addEventListener('DOMContentLoaded', function() {
  class LikeBox extends React.Component {
    render() {
      return (
        <div>
          <span>100 likes</span>
          <button>Lubie to</button>
        </div>
      );
    }
  }
  ReactDOM.render(<LikeBox />, document.getElementById('app'));
});
