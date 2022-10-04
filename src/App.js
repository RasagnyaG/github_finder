import axios from "axios";
import React, { useEffect, useState } from "react";
import NavBar from "./components/Navbar";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./components/pages/About";
import Home from "./components/pages/Home";

const App = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");

  const searchUsers = async (text) => {
    setLoading(true);
    if (text === "") {
      const res = await axios.get(
        `https://api.github.com/users?client_id=${process.env.GITHUB_CLIENT_ID}&client_secret=${process.env.GITHUB_CLIENT_SECRET}`
      );
      setLoading(false);
      setSearch("");
      setUsers(res.data);
    } else {
      const res = await axios.get(
        `https://api.github.com/search/users?q=${text}&client_id=${process.env.GITHUB_CLIENT_ID}&client_secret=${process.env.GITHUB_CLIENT_SECRET}`
      );

      setLoading(false);
      setSearch(text);
      setUsers(res.data.items);
    }
  };

  useEffect(() => {
    searchUsers("");
  }, []);

  return (
    <Router>
      <NavBar searchUsers={searchUsers} />
      <Routes>
        <Route
          path="/"
          element={<Home search={search} users={users} loading={loading} />}
        />

        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
};

export default App;
