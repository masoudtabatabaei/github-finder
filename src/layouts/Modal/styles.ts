import styled from "styled-components";

export const ModalOverly = styled.div`
    background-color: rgba(0,0,0,0.65);
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 2;
`;

export const ModalDialog = styled.div`
    background-color: #eee;
    width: 600px;
    border-radius: 10px;
    position: relative;
`;

export const ModalBody = styled.div`
   margin: 6px 0;
   font-size: 0.9em;
   padding: 16px;
`;

export const ModalHeader = styled.div`
    text-align: center;
    padding: 8px 0;
    border-bottom: 1px solid #aaa;
`;

export const ModalClose = styled.a`
    position: absolute;
    right: 25px;
    top: 10px;
    cursor: pointer;
`;