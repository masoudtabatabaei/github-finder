import { faLink } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { IUserItem } from "../../types/users";
import "./styles.css";

interface IUserProps {
  user: IUserItem;
  view: string;
}

export const UserItem: React.FC<IUserProps> = (props) => {
  const { login, avatar_url, html_url } = props.user;

  if (props.view === "grid") {
    return (
      <a href={html_url} target="_blank" rel="noreferrer noopener">
        <div className="userItem_container">
          <img src={avatar_url} alt={login} />
          <div>{login}</div>
        </div>
      </a>
    );
  }

  return (
    <tr>
      <td className="tr_login">
        <img src={avatar_url} alt={login} />
        <span>{login}</span>
      </td>
      <td>{html_url}</td>
      <td>
        <a href={html_url} target="_blank"  rel="noreferrer noopener" className="view_button">
          <FontAwesomeIcon icon={faLink} color="#222" />
        </a>
      </td>
    </tr>
  );
};
