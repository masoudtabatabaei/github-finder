import React from "react";
import { IUserItem } from "../../types/users";
import "./styles.css";

interface IUserProps {
  user: IUserItem;
}

export const UserItem: React.FC<IUserProps> = (props) => {
  const { login, avatar_url } = props.user;
  return (
    <div className="userItem_container">
      <img src={avatar_url} alt={login} />
      <div>{login}</div>
    </div>
  );
};
