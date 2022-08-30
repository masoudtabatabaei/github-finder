import React, { ReactNode, useEffect } from "react";
import ConnectionAlert from "../../components/ConnectionAlert";
import useNetworkState from "../../hooks/useNetworkState";

interface IPanelProps {
  children:ReactNode;
}

export const Dashboard: React.FC<IPanelProps> = ({children}) => {
  const isOnline = useNetworkState();

  return (
    <div className="main_container">
      <ConnectionAlert connectionState={isOnline}/>
      { children }
    </div>
  );
};
