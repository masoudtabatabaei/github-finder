import styled from "styled-components";

export const ConnectionAlert = styled.div`
    padding: 8px 12px;
    border-radius: 5px;
    font-size: 0.875rem;
    margin-bottom: 6px;
    backgroundColor: ${props => props.className}
    border: ${props => props.className === "online" ? "1px solid " : "1px solid"}
`;

const bg = {
    online: "rgba(0,255,0,0.4)",
    offline: "rgba(255,0,0,0.2)"
}

const border = {
    online: "#00ff00",
    offline: " #ff0000"
}