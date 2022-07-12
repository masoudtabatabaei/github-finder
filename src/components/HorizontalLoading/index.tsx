import React from "react";
import "./styles.css";

export const HorizontalLoading: React.FC = () => {
  return (
    <div className="horizontal_loading_container">
      <div className="indeterminate"></div>
    </div>
  );
};
