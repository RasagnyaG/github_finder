import axios from "axios";
import { React, Component } from "react";
import NavBar from "./components/Navbar";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./components/pages/About"
import Home from "./components/pages/Home";

class App extends Component {
  state = {
    users: [],
    loading: false,
    search: "",
    const: [],
  };

  searchUsers = async (text) => {
    this.setState({ loading: true });
    if (text === "" || this.state.home === true) {
      const res = await axios.get(
        `https://api.github.com/users?client_id=${process.env.GITHUB_CLIENT_ID}&client_secret=${process.env.GITHUB_CLIENT_SECRET}`
      );
      this.setState({
        users: res.data,
        loading: false,
        search: "",
      });
    } else {
      const res = await axios.get(
        `https://api.github.com/search/users?q=${text}&client_id=${process.env.GITHUB_CLIENT_ID}&client_secret=${process.env.GITHUB_CLIENT_SECRET}`
      );
      this.setState({ users: res.data.items, loading: false, search: text });
    }
  };
  async componentDidMount() {
    this.searchUsers("");
  }
  render() {
    return (
      <Router>
        <NavBar
          searchUsers={this.searchUsers}
          home={this.home}
          goToHome={this.goToHome}
        />
        <Routes>
          <Route
            path="/"
            element={
              <Home
                search={this.state.search}
                users={this.state.users}
                loading={this.state.loading}
              />
            }
          />

          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
    );
  }
}

export default App;
