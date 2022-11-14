import styled from "styled-components";

export const Nav = styled.nav`
  background-color: #333333;
  margin-bottom: 12px;

  a {
    color: #ffffff;
  }
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 50px;
`;

export const LinksContainer = styled.div`
  *:not(:first-child) {
    margin-left: 16px;
  }
`;