import React, { useCallback, useEffect, useState } from "react";
import axios from "axios";
import { faBuilding, faCloud, faComputer } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Modal from "../../layouts/Modal";
import { IUserProfile } from "@interfaces/users";
import { Loader } from "../Loader";
import { ProfileContainer, ProfileBody, GitHubProfileBtn } from "./index.styled";

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
            <ProfileBody>
                <div className="header">
                    <h2>{profile?.name}</h2>
                    <p>{profile?.bio}</p>
                </div>
                { profile?.company && 
                    <p>
                        <FontAwesomeIcon icon={faBuilding} fontSize="16px" color="#888"/>
                        <span className="ml-4">{profile.company}</span>
                    </p>
                }
                { profile?.blog && 
                    <p>
                        <FontAwesomeIcon icon={faCloud} fontSize="16px" color="#888"/>
                        <span className="ml-4">{profile.blog}</span>
                    </p>
                }
                <GitHubProfileBtn href={profile?.html_url} target="_blank">Visit Github Profile</GitHubProfileBtn>
            </ProfileBody>
        </ProfileContainer>}
    </Modal>
}
