import React from "react";
import { Navbar } from "../../components/Navbar";

interface IDashboardProps {
  children:React.ReactNode;
}

export const Dashboard:React.FC<IDashboardProps> = (props) => {
  const { children } = props;

  return <div>
    <Navbar/>
    {children}
  </div>
}