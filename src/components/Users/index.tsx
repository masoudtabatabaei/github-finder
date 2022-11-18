import React from "react";
import { IUserItem } from "../../types/users";
import { UserItem } from "../UserItem";
import { UsersContainer } from "./index.styled";

interface IUsersProps {
  users: IUserItem[];
  viewMethod: string;
}

export const Users: React.FC<IUsersProps> = ({ users, viewMethod }) => {
  if (viewMethod === "grid") {
    return (
      <UsersContainer>
        {users?.map((user) => {
          return <UserItem key={user.id} user={user} view={viewMethod}/>;
        })}
      </UsersContainer>
    );
  }

  return (
    <div className="table_container">
      <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Github Page</th>
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
