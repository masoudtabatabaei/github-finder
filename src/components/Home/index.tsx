import axios from "axios";
import React, { useCallback, useEffect, useState } from "react";
import { useNavigate , useLocation } from "react-router-dom";
import useTitle from "../../hooks/useTitle";
import { IUserItem } from "../../types/users";
import { NoResultFound } from "../NoResultFound";
import { Pagination } from "../Pagination";
import { Placeholder } from "../Placeholder";
import { Search } from "../Search";
import { Users } from "../Users";

export const Home: React.FC = () => {
  useTitle("Github Finder - Home");
  const navigate = useNavigate();
  
  const [users, setUsers] = useState<IUserItem[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [showNoResultFound, setShowNoResultFound] = useState<boolean>(false);
  const [viweMethod, setViewMethod] = useState<string>("grid");
  const [searchTerm, setSearchTerm] = useState<string>();

  const [totalItems, setTotalItems] = useState<number>(0);
  const [pageSize, setPageSize] = useState<number>(20);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [mustBeResetPaginate, setMustBeResetPaginate] = useState<boolean>(false);

  const fetchUsers = useCallback(async () => {
    if (!searchTerm) {
      return;
    }

    navigate({pathname: "/",search: `?keyword=${searchTerm}`});

    try {
      setIsLoading(true);
      const result = await axios.get(
        `https://api.github.com/search/users?q=${searchTerm}&in=name&type=user&per_page=${pageSize}&page=${currentPage}`
      );
      console.log("api: ", result.data.items);
      result.data.total_count >= 1000 ? setTotalItems(1000) : setTotalItems(result.data.total_count);
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
  }, [searchTerm, pageSize, currentPage]);

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

  return <div className="main_container">
    <Search onSearch={handleSearch} view={viweMethod} changeView={handleChangeView} />
    {isLoading ? (
      <>
        <Placeholder view={viweMethod} itemNumbers={pageSize} />
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
        mustBeReset={mustBeResetPaginate} />
    }
  </div>
}