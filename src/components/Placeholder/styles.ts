import styled, { keyframes } from "styled-components";

const skeletonLoading = keyframes`
  0% {
    background-color: hsl(200, 20%, 80%);
  }

  100% {
    background-color: hsl(200, 20%, 95%);
  }
`;

export const Skeleton = styled.div`
  animation: ${skeletonLoading} 1s linear infinite alternate;
`;

export const GridPlaceholderContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3,1fr);
  column-gap: 10px;
  row-gap: 10px;
`;

export const GridPlaceholderItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 150px;
  border-radius: 6px;
  box-shadow: 0 1px 4px #cccccc;
`;

export const GridPlaceholderImg = styled(Skeleton)`
  width: 70px;
  height: 70px;
  border-radius: 50%;
  margin-bottom: 15px;
`;

export const TablePlaceholderRow = styled(Skeleton)`
  width: 80%;
  height: 25px;
  border-radius: 6px;
  margin: 3px auto;
`;

export const GridPlaceholderText = styled(Skeleton)`
  width: 60%;
  height: 40px;
  border-radius: 5px;
`;

export const Table = styled.table`
  tr:nth-child(even) {
    background-color: transparent;
  }
`;