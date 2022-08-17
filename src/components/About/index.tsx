import React from "react";
import MyGithub from "../../assets/img/mygithub.png";
import useTitle from "../../hooks/useTitle";
import "./styles.css"

export const About: React.FC = () => {
    useTitle("Github Finder - About");

    return <div className="about_container">
        <h2 className="title">About Github Finder</h2>
        <p> 
            Github Finder is an open source project that by use them you
            can search a username that exist in github and view list of
            users to see a list of users who have this username
        </p>
        <p>This project developed by <a href="https://github.com/masoudtabatabaei"><img src={MyGithub} alt="my Github link"/></a></p>
    </div>;
}