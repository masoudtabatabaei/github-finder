import axios from "axios";
import React, { useCallback, useEffect } from "react";
import Modal from "../../layouts/Modal";

interface IUserProfileProps {
    isOpen:boolean;
    setIsOpen:(isOpen:boolean)=>void;
}

export const UserProfile:React.FC<IUserProfileProps> = ({isOpen, setIsOpen}) => {

    const fetchUserInfo = async () => {
        try {
            const result = await axios.get("https://api.github.com/search/users/masoudtabatabaei");
            console.log(result);
        } catch(error) {
            console.log(error);
        }
    }

    useEffect(() => {
        fetchUserInfo();
    },[fetchUserInfo]);

    return <Modal title="User Profile" isOpen={isOpen} setIsOpen={setIsOpen}>
        User Profile
    </Modal>
}
