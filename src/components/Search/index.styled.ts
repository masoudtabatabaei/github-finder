import styled from "styled-components";

export const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 6px 0 16px;
  padding: 8px;
  background-color: ${({theme}) => theme.colors.searchContainer};
  border-radius: 3px;
`;

export const SearchInput = styled.input`
  flex: 1;
  min-width: 400px;
`;

export const SearchBtn = styled.button`
  margin-left: 8px;
  height: 45px;
  min-width: 100px;
  color: ${({theme}) => theme.colors.searchButton.color};
  background-color: ${({theme}) => theme.colors.searchButton.background};

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;