import styled from "styled-components";

export const ProfileContainer = styled.div`
    display: flex;
    align-items: flex-start;
    gap: 15px;

    img {
        width: 130px;
        border-radius: 50%;
    }

    .header {
        margin-bottom: 12px;
    }
`;

export const ProfileBody = styled.div`
    font-size: 1em;

    p {
        margin-bottom: 4px;
        font-size: 0.85rem;
    }

    .ml-4 {
        margin-left: 4px;
    }
`;

export const GitHubProfileBtn = styled.button`
    background-color: #444;
    color: #fff;
    padding: 6px 12px;
    border-radius: 4px;
    margin: 6px 0;
`;