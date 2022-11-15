import React from "react";
import MyGithub from "../../assets/img/mygithub.png";
import useTitle from "../../hooks/useTitle";
import {AboutTitle , P , GithubLogo} from "./index.styled";

export const About: React.FC = () => {
    useTitle("Github Finder - About");

    return <div className="about_container">
        <AboutTitle>About Github Finder</AboutTitle>
        <P>
            Github Finder is an open source project that by use them you
            can search a username that exist in github and view list of
            users to see a list of users who have this username
        </P> 
        <P>This project developed by <a href="https://github.com/masoudtabatabaei">
            <GithubLogo src={MyGithub} alt="my Github link"/></a>
        </P>
    </div>;
}