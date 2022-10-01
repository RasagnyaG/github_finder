import { Component } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Search } from "./Search";
import React from "react";
import { Link } from "react-router-dom";

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.refreshRef = React.createRef();
  }

  handleClick = () => {
    this.refreshRef.current.refresh();
  };
  render() {
    return (
      <Navbar bg="dark" variant="dark">
        <Container fluid className="cont">
          <Link className="navbar-brand" to="/" onClick={this.handleClick}>
            Github Finder
          </Link>
          <Nav clasName="me-auto">
            <Link className="nav-link" to="/">
              Home
            </Link>

            <Link className="nav-link" to="/about">
              About
            </Link>
          </Nav>

          <Search searchUsers={this.props.searchUsers} ref={this.Reference} />
        </Container>
      </Navbar>
    );
  }
}
export default NavBar;
