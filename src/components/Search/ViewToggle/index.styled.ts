import styled from "styled-components";

export const ViewMethods = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const ViewMethodsItem = styled.span`
  cursor: pointer;
  
  .viewFilter {
    color: ${({theme}) => theme.colors.viewToggle.color._};
  }

  .viewFilter.active {
    color: ${({theme}) => theme.colors.viewToggle.color._active};
  }
`;