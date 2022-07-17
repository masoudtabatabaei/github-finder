import React from "react";
import "./styles.css";
import noResultFoundIcon from "src/assets/no-result.png";

export const NoResultFound: React.FC = () => {
  return (
    <div className="notFoundResult">
      <img src={noResultFoundIcon} alt="not found result" />
    </div>
  );
};
