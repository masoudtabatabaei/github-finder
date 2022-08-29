import React, { ReactNode } from "react";

interface IPanelProps {
  children:ReactNode;
}

export const Dashboard: React.FC<IPanelProps> = ({children}) => {
  return (
    <div className="main_container">
      { children }
    </div>
  );
};
