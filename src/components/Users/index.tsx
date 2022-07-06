import React, { useEffect, useState } from "react";
import { IUserItem, IUsersSearchResponse } from "../../types/users";
import { UserItem } from "../UserItem";
import "./styles.css";

interface IUsersProps {
  users: IUserItem[];
}

export const Users: React.FC<IUsersProps> = ({ users }) => {
  const [usersList, setUsersList] = useState<any>(users);

  // useEffect(() => {
  //   console.log("users list", usersList);
  // }, []);

  return (
    <div className="users_container">
      {users?.map((user) => {
        return <UserItem user={user} />;
      })}
    </div>
  );
};
