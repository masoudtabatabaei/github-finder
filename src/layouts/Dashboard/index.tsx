import axios from "axios";
import React, { useCallback, useEffect, useState } from "react";
import { HorizontalLoading } from "../../components/HorizontalLoading";
import { Navbar } from "../../components/Navbar";
import { NoResultFound } from "../../components/NoResultFound";
import { Search } from "../../components/Search";
import { Users } from "../../components/Users";
import { IUserItem } from "../../types/users";

export const Dashboard: React.FC = () => {
  const [users, setUsers] = useState<IUserItem[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [showNoResultFound, setShowNoResultFound] = useState<boolean>(false);

  const fetchUsers = useCallback(async () => {
    if (!searchTerm) {
      return;
    }

    try {
      setIsLoading(true);
      const result = await axios.get(
        `https://api.github.com/search/users?q=${searchTerm}&in=name&type=user&per_page=50&page=1`
      );
      console.log("api: ", result.data.items);
      result.data.items.length > 0
        ? setShowNoResultFound(false)
        : setShowNoResultFound(true);
      setUsers(result.data.items);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
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
        {isLoading ? (
          <HorizontalLoading />
        ) : users.length > 0 ? (
          <Users users={users} />
        ) : (
          <NoResultFound />
        )}
      </div>
    </div>
  );
};
