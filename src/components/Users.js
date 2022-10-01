import React from "react";
import User from "./User";

function Users({ users, loading }) {
  if (loading === true) {
    return <loader />;
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
