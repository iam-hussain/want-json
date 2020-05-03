import React from 'react';

class BottomNavbar extends React.Component {
  render() {
    return (
      <nav className="navbar nav-bottom">
        <a href="/docs.html" className="button"><i className="fas fa-book" /></a>
        <a href="/explore.html" className="button"><i className="fas fa-laptop-code" /></a>
        <a href="/dash.html" className="button"><i className="fas fa-store" /></a>
      </nav>
    );
  }
}

export default BottomNavbar;
