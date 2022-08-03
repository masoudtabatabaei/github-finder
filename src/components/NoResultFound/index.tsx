import React from "react";
import noResultFoundIcon from "../../assets/img/no-result.png";
import "./styles.css";

export const NoResultFound: React.FC = () => {
  return (
    <div className="notFoundResult">
      <img src={noResultFoundIcon} alt="not found result" />
    </div>
  );
};
