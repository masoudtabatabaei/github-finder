import { faHeart, faLink } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { IUserItem } from "../../types/users";
import "./styles.css";

interface IUserProps {
  user: IUserItem;
  view: string;
}

export const UserItem: React.FC<IUserProps> = (props) => {
  const { id, login, avatar_url, html_url } = props.user;

  const handleLiked = (id: number) => {
    console.log("id: ", id);
  }

  if (props.view === "grid") {
    return (
      <div className="userItem_container">
        <div className="actions">
          <span className="action like" onClick={() => handleLiked(id)}><FontAwesomeIcon icon={faHeart} /></span>
          <a className="action" href={html_url} target="_blank" rel="noreferrer noopener"><FontAwesomeIcon icon={faLink} /></a>
        </div>
        <img src={avatar_url} alt={login} />
        <div>{login}</div>
      </div>
    );
  }

  return (
    <tr>
      <td className="td_login">
        <img src={avatar_url} alt={login} />
        <span>{login}</span>
      </td>
      <td>{html_url}</td>
      <td className="td_actions">
        <a className="action" href={html_url} target="_blank" rel="noreferrer noopener">
          <FontAwesomeIcon icon={faLink} color="#222" />
        </a>
        <span className="action like" onClick={() => handleLiked(id)}><FontAwesomeIcon icon={faHeart} /></span>
      </td>
    </tr>
  );
};
