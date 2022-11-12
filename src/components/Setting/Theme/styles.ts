import styled from "styled-components";


export const ThemeItem = styled.div`
    height: 120px;
    border-radius: 8px;
    margin-bottom: 6px;
    cursor: pointer;

    &.classic {
        background-color: rgba(135, 234, 135, 0.5);
    }

    &.thinted {
        background-color: rgb(1 1 91 / 99%)
    }

    &.dark {
        background-color: rgb(6 5 5 / 93%);
    }
`;

export const ThemeItemContainer = styled.div`
    flex: 1;
    margin: 0 4px;
    text-align: center;

    &.active ${ThemeItem} {
            border: 5px solid rgb(255, 208, 0);
            border-radius: 8px;
        }
    }
`;



export const ThemeContainer = styled.div`
    padding: 8px;
    display: flex;
    align-items: center;
    justify-content: space-around;
`;