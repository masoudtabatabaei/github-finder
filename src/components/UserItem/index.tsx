import { faHeart, faLink, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { IUserItem } from "../../types/users";
import { UserProfile } from "../UserProfile";
import "./styles.css";

interface IUserProps {
  user: IUserItem;
  view: string;
}

export const UserItem: React.FC<IUserProps> = (props) => {
  const { id, login, avatar_url, html_url } = props.user;
  const [likedItems, setLikedItems] = useState<number[]>(JSON.parse(localStorage.getItem("liked")!) || []);
  const [openProfileModal, setOpenPofileModal] = useState<boolean>(false);

  const handleLiked = (id: number) => {
    //TODO: Is this user already liked then dislike and if already not liked , this must be liked :)
    if (!localStorage.getItem("liked")) {
      localStorage.setItem('liked', JSON.stringify([id]));
    }

    const itemsStorage: number[] = JSON.parse(localStorage.getItem("liked")!);

    let updatedLikes;
    if (itemsStorage.includes(id)) {
      updatedLikes = itemsStorage.filter(item => item !== id);
    } else {
      updatedLikes = Array.from(new Set([...itemsStorage, id]));
    }

    localStorage.setItem('liked', JSON.stringify(updatedLikes));
    console.log("updated likes storage: ", updatedLikes);
    setLikedItems(updatedLikes);
  }

  const handleLikedClassName = (id:number) => {
    return likedItems.find(item => item === id) ? "action like liked" : "action like";
  }

  const handleOpenProfleModal = (id:number) => {
    setOpenPofileModal(true)
    console.log("User Profile Opened!");
  }

  if (props.view === "grid") {
    return (<>
      <div className="userItem_container">
        <div className="actions">
          <span className={handleLikedClassName(id)} onClick={() => handleLiked(id)}><FontAwesomeIcon icon={faHeart} /></span>
          <span className="action" onClick={() => handleOpenProfleModal(id)}><FontAwesomeIcon icon={faUser}/></span>
          <a className="action" href={html_url} target="_blank" rel="noreferrer noopener"><FontAwesomeIcon icon={faLink} /></a>
        </div>
        <img src={avatar_url} alt={login} />
        <div>{login}</div>
      </div>
      {openProfileModal && <UserProfile isOpen={openProfileModal} setIsOpen={setOpenPofileModal}/>}
    </>);
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
        <span className="action" onClick={() => handleOpenProfleModal(id)}><FontAwesomeIcon icon={faUser}/></span>
        <span className={handleLikedClassName(id)} onClick={() => handleLiked(id)}><FontAwesomeIcon icon={faHeart} /></span>
      </td>
      {openProfileModal && <UserProfile isOpen={openProfileModal} setIsOpen={setOpenPofileModal}/>}
    </tr>
  );
};
