import React from "react";
import { IUserItem } from "../../types/users";
import { UserItem } from "../UserItem";
import "./styles.css";

interface IUsersProps {
  users: IUserItem[];
}

export const Users: React.FC<IUsersProps> = ({ users }) => {
  return (
    <div className="users_container">
      {users?.map((user) => {
        return <UserItem key={user.id} user={user} />;
      })}
    </div>
  );
};
