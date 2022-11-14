import styled from "styled-components";

export const P = styled.p`
    color: ${({theme}) => theme.colors.about};
    font-size: 1.1rem;
`;

export const AboutTitle = styled.h2`
    padding-bottom: 10px;
    margin-bottom: 10px;
    border-bottom: 1px solid #aaa;
`;

export const GithubLogo = styled.img`
    max-width: 25px;
    vertical-align: middle;
`;