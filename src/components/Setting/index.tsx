import React from "react";
import Modal from "../../layouts/Modal";
import Theme from "./Theme";

interface ISettingProps {
    isOpen:boolean;
    setIsOpen:(isOpen:boolean)=>void;
}

const Setting:React.FC<ISettingProps> = ({isOpen , setIsOpen}) => {
    return <Modal title="Setting" isOpen={isOpen} setIsOpen={setIsOpen}>
        <Theme/>
    </Modal>
}

export default Setting;