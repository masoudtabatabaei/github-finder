import React from "react";
import { IUserItem } from "../../types/users";
import { UserItem } from "../UserItem";
import "./styles.css";

interface IUsersProps {
  users: IUserItem[];
  viewMethod: string;
}

export const Users: React.FC<IUsersProps> = ({ users, viewMethod }) => {
  if (viewMethod === "grid") {
    return (
      <div className="users_container">
        {users?.map((user) => {
          return <UserItem key={user.id} user={user} view={viewMethod} />;
        })}
      </div>
    );
  }

  return (
    <div className="table_container">
      <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Github Link</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {users?.map((user) => {
          return <UserItem key={user.id} user={user} view={viewMethod} />;
        })}
      </tbody>
    </table>
    </div>
  );
};
