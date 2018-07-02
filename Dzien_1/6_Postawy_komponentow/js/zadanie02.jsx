import React from 'react';
import ReactDOM from 'react-dom';

document.addEventListener('DOMContentLoaded', function() {
  class Menu extends React.Component {
    render() {
      return (
        <ul>
          <li>
            <a href="/">Strona glowna</a>
          </li>
          <li>
            <a href="/blog">Blog</a>
          </li>
          <li>
            <a href="/pricing">Cennik</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
        </ul>
      );
    }
  }
  ReactDOM.render(<Menu />, document.getElementById('app'));
});
