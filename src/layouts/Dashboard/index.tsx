import axios from "axios";
import React, { useCallback, useEffect, useState } from "react";
import { Navbar } from "../../components/Navbar";
import { Search } from "../../components/Search";
import { Users } from "../../components/Users";
import { IUserItem } from "../../types/users";

export const Dashboard: React.FC = () => {
  const [users, setUsers] = useState<IUserItem[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>();

  const fetchUsers = useCallback(async () => {
    try {
      const result = await axios.get(
        `https://api.github.com/search/users?q=${searchTerm}&in=name&type=user&per_page=50&page=1`
      );
      console.log("api: ", result.data.items);
      setUsers(result.data.items);
    } catch (error) {
      console.log(error);
    }
  }, [searchTerm]);

  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);

  const handleSearch = (searchedTerm: string) => {
    setSearchTerm(searchedTerm);
  };

  return (
    <div>
      <Navbar />
      <div className="main_container">
        <Search onSearch={handleSearch} />
        {users.length > 0 && <Users users={users} />}
      </div>
    </div>
  );
};
