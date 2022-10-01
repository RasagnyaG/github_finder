import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export class Search extends Component {
  state = {
    text: "",
  };

  refresh = () => {
    this.setState({ text: "" });
    this.props.searchUsers("");
  };

  onChange = (e) => {
    this.setState({ text: e.target.value });
  };

  onSubmit = (e) => {
    e.preventDefault();
    this.props.searchUsers(this.state.text);
  };

  render() {
    return (
      <Form onSubmit={this.onSubmit} className="d-flex">
        <Form.Control
          type="search"
          value={this.state.text}
          onChange={this.onChange}
          placeholder="Search Users"
          className="me-2"
          aria-label="Search"
        />
        <Button onClick={this.onSubmit} variant="outline-secondary">
          Search
        </Button>
      </Form>
    );
  }
}

export default Search;
