import styled from "styled-components";

export const PaginationContainer = styled.div`
  margin: 12px 0 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const TogglePageSize = styled.div`
  color: #999;

  select {
    border-radius: 6px;
    border: 1px solid #999;
    min-width: 50px;
  }
`;

export const TogglePageButtons = styled.div`
  color: #999;
  font-size: 0.875rem;
`;

export const PageSize = styled.select`
  margin: 0 4px;
  min-width: 30px;
  height: 30px;
  padding: 0 2px;
`;

export const Button = styled.button`
  height: 30px;
  padding: 0 8px;
  border-radius: 3px;
  margin: 0 2px;
  color: #999;
  text-align: center;
  background-color: transparent;
  font-size: 16px;

  &:last-child {
    margin-right: 0;
    padding-right: 0;
  }

  &.active {
    color: #000;
    font-weight: 600;
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.4;
  }
`;