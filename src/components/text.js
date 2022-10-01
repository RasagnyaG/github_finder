import React from "react";

const Text = ({ text }) => {
  return text !== "" && <p className="search">results for "{text}"</p>;
};

export default Text;
