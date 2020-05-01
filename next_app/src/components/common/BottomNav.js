import React from "react";

class BottomNavbar extends React.Component {
  render() {
    return (
      <nav className="navbar nav-bottom">
        <a href="/docs.html" className="button"><i className="fas fa-book"></i></a>
        <a href="/explore.html" className="button"><i className="fas fa-laptop-code"></i></a>
        <a href="/dash.html" className="button"><i className="fas fa-store"></i></a>
      </nav>
    );
  }
}

export default BottomNavbar;
