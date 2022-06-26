import React, { useState } from "react";
import { Navbar } from "../../components/Navbar";
import { Search } from "../../components/Search";

interface IDashboardProps {
  children: React.ReactNode;
}

export const Dashboard: React.FC<IDashboardProps> = (props) => {
  const { children } = props;
  const [users, setUsers] = useState<any>([]);

  return (
    <div>
      <Navbar />
      <div className="main_container">
        <Search />
        {children}
      </div>
    </div>
  );
};
