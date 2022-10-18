import axios from "axios";
import React, { useCallback, useEffect } from "react";
import Modal from "../../layouts/Modal";

interface IUserProfileProps {
    isOpen:boolean;
    setIsOpen:(isOpen:boolean)=>void;
    username: string;
}

export const UserProfile:React.FC<IUserProfileProps> = ({isOpen, setIsOpen, username}) => {

    const fetchUserInfo = useCallback(async () => {
        try {
            const result = await axios.get(`https://api.github.com/users/${username}`);
            console.log(result);
        } catch(error) {
            console.log(error);
        }
    },[username]);

    useEffect(() => {
        fetchUserInfo();
    },[fetchUserInfo]);

    return <Modal title="User Profile" isOpen={isOpen} setIsOpen={setIsOpen}>
        User Profile
    </Modal>
}
