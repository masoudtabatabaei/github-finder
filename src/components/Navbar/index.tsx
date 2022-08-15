import { faGear } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Setting from "../Setting";
import "./styles.css";

export const Navbar: React.FC = () => {
  const [openSettingModal, setOpenSettingModal] = useState<boolean>(false);

  return (
    <>
      <nav>
        <div className="main_container header">
          <div>
            <Link to="/">Github Finder</Link>
          </div>
          <div className="links">
            <Link to="/">Home</Link>
            <Link to="/about" style={{ marginLeft: "30px" }}>About</Link>
            <span className="setting" onClick={() => setOpenSettingModal(true)}><FontAwesomeIcon icon={faGear} fontSize="18px" color="#fff" /></span>
          </div>
        </div>
      </nav>
      {openSettingModal && <Setting isOpen={openSettingModal} setIsOpen={setOpenSettingModal}/>}
    </>
  );
};
