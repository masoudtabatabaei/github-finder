import axios from "axios";
import React, { useCallback, useEffect, useState } from "react";
import Modal from "../../layouts/Modal";
import { IUserProfile } from "../../types/users";
import { Loader } from "../Loader";
import { ProfileContainer } from "./styles";

interface IUserProfileProps {
    isOpen:boolean;
    setIsOpen:(isOpen:boolean)=>void;
    username: string;
}

export const UserProfile:React.FC<IUserProfileProps> = ({isOpen, setIsOpen, username}) => {
    const [profile, setProfile] = useState<IUserProfile>();
    const [loading, setLoading] = useState<boolean>(true);

    const fetchUserInfo = useCallback(async () => {
        try {
            const result = await axios.get(`https://api.github.com/users/${username}`);
            setProfile(result.data);
        } catch(error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
    },[username]);

    useEffect(() => {
        fetchUserInfo();
    },[fetchUserInfo]);

    return <Modal title="User Profile" isOpen={isOpen} setIsOpen={setIsOpen}>
        {loading && <div style={{display:"flex", justifyContent:"center", alignItems: "center"}}><Loader/></div>}
        {!loading && <ProfileContainer>
            <div>
                <img src={profile?.avatar_url} alt="user profile"/>
            </div>
            <div>
                <h2>{profile?.name}</h2>
                <p>{profile?.bio}</p>
            </div>
        </ProfileContainer>}
    </Modal>
}
