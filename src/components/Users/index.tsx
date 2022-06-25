import React from "react";
import { UserItem } from "../UserItem";
import "./styles.css";

export const Users: React.FC = () => {
  return (
    <div className="users_container">
      <UserItem />
      <UserItem />
      <UserItem />
      <UserItem />
      <UserItem />
    </div>
  );
};
