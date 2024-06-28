import React from "react";

function UserItem({ user }) {
  return (
    <li>
      <span>{user.name}</span>
      <span>{user.email}</span>
    </li>
  );
}

export default UserItem;
