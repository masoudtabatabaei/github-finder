import { faHeart, faLink, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { IUserItem } from "../../types/users";
import { UserProfile } from "../UserProfile";
import {UserItemContainer, UserItemContainerActions, TDActions, TDLogin} from "./index.styled";

interface IUserProps {
  user: IUserItem;
  view: string;
}

export const UserItem: React.FC<IUserProps> = (props) => {
  const { id, login, avatar_url, html_url } = props.user;
  const [likedItems, setLikedItems] = useState<number[]>(JSON.parse(localStorage.getItem("liked")!) || []);
  const [openProfileModal, setOpenPofileModal] = useState<boolean>(false);

  const handleLiked = (id: number) => {
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
    setLikedItems(updatedLikes);
  }

  const handleLikedClassName = (id:number) => {
    return likedItems.find(item => item === id) ? "action like liked" : "action like";
  }

  const handleOpenProfleModal = (id:number) => {
    setOpenPofileModal(true)
  }

  if (props.view === "grid") {
    return (<>
      <UserItemContainer>
        <UserItemContainerActions>
          <span className={handleLikedClassName(id)} onClick={() => handleLiked(id)}><FontAwesomeIcon icon={faHeart} /></span>
          <span className="action" onClick={() => handleOpenProfleModal(id)}><FontAwesomeIcon icon={faUser}/></span>
          <a className="action" href={html_url} target="_blank" rel="noreferrer noopener"><FontAwesomeIcon icon={faLink} /></a>
        </UserItemContainerActions>
        <img src={avatar_url} alt={login} />
        <div>{login}</div>
      </UserItemContainer>
      {openProfileModal && <UserProfile isOpen={openProfileModal} setIsOpen={setOpenPofileModal} username={login}/>}
    </>);
  }

  return (
    <tr>
      <TDLogin>
        <img src={avatar_url} alt={login} />
        <span>{login}</span>
      </TDLogin>
      <td>{html_url}</td>
      <TDActions>
        <a className="action" href={html_url} target="_blank" rel="noreferrer noopener">
          <FontAwesomeIcon icon={faLink} color="#222" />
        </a>
        <span className="action" onClick={() => handleOpenProfleModal(id)}><FontAwesomeIcon icon={faUser}/></span>
        <span className={handleLikedClassName(id)} onClick={() => handleLiked(id)}><FontAwesomeIcon icon={faHeart} /></span>
      </TDActions>
      {openProfileModal && <UserProfile isOpen={openProfileModal} setIsOpen={setOpenPofileModal} username={login}/>}
    </tr>
  );
};
