import React, { useCallback, useEffect, useState } from "react";
import axios from "axios";
import { IUserItem } from "../../types/users";
import { Navbar } from "../../components/Navbar";
import { NoResultFound } from "../../components/NoResultFound";
import { Pagination } from "../../components/Pagination";
import { Search } from "../../components/Search";
import { Users } from "../../components/Users";
import { Placeholder } from "../../components/Placeholder";

export const Dashboard: React.FC = () => {
  const [users, setUsers] = useState<IUserItem[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [showNoResultFound, setShowNoResultFound] = useState<boolean>(false);
  const [viweMethod, setViewMethod] = useState<string>("grid");

  const [totalItems , setTotalItems] = useState<number>(0);
  const [pageSize , setPageSize] = useState<number>(20);
  const [currentPage , setCurrentPage] = useState<number>(1);
  const [mustBeResetPaginate , setMustBeResetPaginate] = useState<boolean>(false);

  const fetchUsers = useCallback(async () => {
    if (!searchTerm) {
      return;
    }

    try {
      setIsLoading(true);
      const result = await axios.get(
        `https://api.github.com/search/users?q=${searchTerm}&in=name&type=user&per_page=${pageSize}&page=${currentPage}`
      );
      console.log("api: ", result.data.items);
      setTotalItems(result.data.total_count);
      result.data.items.length > 0
        ? setShowNoResultFound(false)
        : setShowNoResultFound(true);
      setUsers(result.data.items);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
      setMustBeResetPaginate(false);
    }
  }, [searchTerm , pageSize , currentPage]);

  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);

  const handleSearch = (searchedTerm: string) => {
    setSearchTerm(searchedTerm);
    setMustBeResetPaginate(true);
  };

  const handleChangeView = (activeView: string) => {
    console.log("active view: " + activeView);
    setViewMethod(activeView);
  };

  return (
    <div>
      <Navbar />
      <div className="main_container">
        <Search onSearch={handleSearch} view={viweMethod} changeView={handleChangeView} />
        {isLoading ? (
          <>
            <Placeholder view={viweMethod} itemNumbers={pageSize}/>
          </>
        ) : users.length > 0 ? (
          <Users users={users} viewMethod={viweMethod} />
        ) : showNoResultFound ? (
          <NoResultFound />
        ) : (
          <></>
        )
        }
        {
          users.length > 0 && 
          <Pagination 
            total={totalItems} 
            pageSize={pageSize}
            setPageSize={setPageSize}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            mustBeReset={mustBeResetPaginate}/>
        }
      </div>
    </div>
  );
};
