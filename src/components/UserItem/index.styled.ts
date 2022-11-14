import styled from "styled-components";

export const UserItemContainerActions = styled.div`
    position: absolute;
    top: 15px;
    left: 15px;
    display: flex;
    flex-direction: column;

    .action {
        cursor: pointer;
        color: #ccc;
        margin-bottom: 10px;
        display: none;

        &:hover {
            color: #666;
        }
    }
`;

export const UserItemContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 150px;
    border-radius: 6px;
    box-shadow: 0 1px 4px #cccccc;
    position: relative;
    background-color: ${({theme}) => theme.colors.userItem.background._};
    color: ${({theme}) => theme.colors.userItem.color};

    &:hover {
        box-shadow: 0 2px 5px #aaaaaa;
        background-color: ${({theme}) => theme.colors.userItem.background._hover};
    }

    &:hover ${UserItemContainerActions} .action {
        display: block;
    }

    img {
        width: 70px;
        height: 70px;
        border-radius: 50%;
        margin-bottom: 15px;
    }

    .like.liked {
        display: block;
        color: #c70000;
    }
`;

export const TDLogin = styled.td`
    display: flex;
    align-items: center;

    img {
        max-width: 30px;
        border-radius: 50%;
        margin-right: 10px;
    }
`;

export const TDActions = styled.td`
    text-align: center;

    .action {
        margin-right: 10px;
        opacity: 0.3;
        cursor: pointer;

        &:hover {
            opacity: 0.8;
        }
    }

    .like.liked {
        color: #c70000;
        opacity: 1;
    }
`;