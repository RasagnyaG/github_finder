import React from "react";
import Text from "../text";
import Users from "../Users";
const Home = (props) => {
  return (
    <div className="parent">
      <Text text={props.search} />
      <Users users={props.users} loading={props.loading} />
    </div>
  );
};

export default Home;
