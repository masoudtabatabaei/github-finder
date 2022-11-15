import React from "react";
import noResultFoundIcon from "../../assets/img/no-result.svg";
import { NotFoundResult, NotFoundResultIcon } from "./index.styled";

export const NoResultFound: React.FC = () => {
  return (
    <NotFoundResult>
      <NotFoundResultIcon src={noResultFoundIcon} alt="not found result"/>
    </NotFoundResult>
  );
};
