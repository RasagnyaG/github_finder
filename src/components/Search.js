import React, { Component, useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const Search = (props) => {
 
  const [text, setText] = useState("");

  const refresh = () => {
    setText("");
    props.searchUsers("");
  };

  const onChange = (e) => {
    setText(e.target.value);
  };
 
  const onSubmit = (e) => {
    e.preventDefault();
    props.searchUsers(text);
  };

  
    return (
      <Form onSubmit={onSubmit} className="d-flex">
        <Form.Control
          type="search"
          value={text}
          onChange={onChange}
          placeholder="Search Users"
          className="me-2"
          aria-label="Search"
        />
        <Button onClick={onSubmit} variant="outline-secondary">
          Search
        </Button>
      </Form>
    );
  }

export default Search;
