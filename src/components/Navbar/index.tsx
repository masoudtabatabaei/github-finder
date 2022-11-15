import { faGear } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Setting from "../Setting";
import GithubLogo from "../../assets/img/mygithub.png";
import { Nav, Header, LinksContainer} from "./index.styled";

export const Navbar: React.FC = () => {
  const [openSettingModal, setOpenSettingModal] = useState<boolean>(false);

  return (
    <>
      <Nav>
        <Header className="main_container">
          <div>
            <Link to="/"><img src={GithubLogo} alt="github logo" style={{verticalAlign:"bottom",width:"22px",marginRight:"10px"}}/>Github Finder</Link>
          </div>
          <LinksContainer>
            <Link to="/">Home</Link>
            <Link to="/about" style={{ marginLeft: "30px" }}>About</Link>
            <a style={{cursor:"pointer"}} href="javascript:;" className="setting" onClick={() => setOpenSettingModal(true)}><FontAwesomeIcon icon={faGear} fontSize="18px" color="#fff" /></a>
          </LinksContainer>
        </Header>
      </Nav>
      {openSettingModal && <Setting isOpen={openSettingModal} setIsOpen={setOpenSettingModal}/>}
    </>
  );
};
