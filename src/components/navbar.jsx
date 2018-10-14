import React, { Component } from "react";
class Navbar extends Component {
  state = {};
  render() {
    return (
      <nav className="navbar navbar-light bg-light">
        <a>
          <span>Total Numbers of Items </span>
          <span className="badge badge-pill badge-primary">
            {this.props.totalcounter}
          </span>
        </a>
      </nav>
    );
  }
}

export default Navbar;
