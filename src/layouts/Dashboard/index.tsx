import axios from "axios";
import React, { useState } from "react";
import { Navbar } from "../../components/Navbar";
import { Search } from "../../components/Search";
import { Users } from "../../components/Users";

export const Dashboard: React.FC = () => {
  const [users, setUsers] = useState<any>([]);

  const handleSearch = async (searchedTerm: string) => {
    console.log("search ->", searchedTerm);

    try {
      const result = await axios.get(
        `https://api.github.com/search/users?q=${searchedTerm}&in=name&type=user`
      );
      console.log(result.data.items);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <Navbar />
      <div className="main_container">
        <Search onSearch={handleSearch} />
        <Users />
      </div>
    </div>
  );
};
