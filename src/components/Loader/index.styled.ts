import styled, { keyframes } from "styled-components";

const spin = keyframes`
  0% { 
    -webkit-transform: rotate(0deg); 
    transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
`;

export const LoaderContainer = styled.div`
  border: 8px solid #ccc;
  border-radius: 50%;
  border-top: 8px solid #777;
  width: 50px;
  height: 50px;
  -webkit-animation: ${spin} 1s linear infinite;
  animation: ${spin} 1s linear infinite;
`;