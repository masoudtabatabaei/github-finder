import styled from "styled-components";

const online = {
    bg: "rgba(0,255,0,0.4)",
    border: "#00ff00"
}

const offline = {
    bg: "rgba(255,0,0,0.2)",
    border: "#ff0000"
}

export const ConnectionAlert = styled.div`
    padding: 8px 12px;
    border-radius: 5px;
    font-size: 0.875rem;
    margin-bottom: 6px;
    background-color: ${props => props.className === "online" ? online.bg : offline.bg };
    border: 1px solid ${props => props.className === "online" ? online.border : offline.border };
`;