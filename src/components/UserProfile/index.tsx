import React from "react";
import Modal from "../../layouts/Modal";

interface IUserProfileProps {
    isOpen:boolean;
    setIsOpen:(isOpen:boolean)=>void;
}

export const UserProfile:React.FC<IUserProfileProps> = ({isOpen, setIsOpen}) => {
    return <Modal title="User Profile" isOpen={isOpen} setIsOpen={setIsOpen}>
        User Profile
    </Modal>
}
