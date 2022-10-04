import React from "react";
import User from "./User";
import Spinner from "react-bootstrap/Spinner";

const Users = ({ users, loading }) => {
  if (loading === true) {
    return (
      <div className="spinnerdiv">
        <Spinner animation="border" className="spinner" />
      </div>
    );
  } else {
    return (
      <div className="users">
        {users.map((user) => (
          <User key={user.id} user={user} />
        ))}
      </div>
    );
  }
}
export default Users;
