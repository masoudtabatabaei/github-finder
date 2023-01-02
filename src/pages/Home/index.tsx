import axios from "axios";
import React, { useCallback, useEffect, useState } from "react";
import { useNavigate , useSearchParams } from "react-router-dom";
import useTitle from "@hooks/useTitle";
import { IUserItem } from "@interfaces/users";
import { NoResultFound } from "@components/NoResultFound";
import { Pagination } from "@components/Pagination";
import { Placeholder } from "@components/Placeholder";
import { Search } from "@components/Search";
import { Users } from "@components/Users";

export const Home: React.FC = () => {
  useTitle("Github Finder - Home");
  const navigate = useNavigate();
  const [searchParams , setSearchParams] = useSearchParams();
  
  const [users, setUsers] = useState<IUserItem[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [showNoResultFound, setShowNoResultFound] = useState<boolean>(false);
  const [viweMethod, setViewMethod] = useState<string>("grid");
  const [searchTerm, setSearchTerm] = useState<string>("");

  const [totalItems, setTotalItems] = useState<number>(0);
  const [pageSize, setPageSize] = useState<number>(20);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [mustBeResetPaginate, setMustBeResetPaginate] = useState<boolean>(false);

  useEffect(() => {
    if(searchParams.get("keyword")){
      setSearchTerm(searchParams.get("keyword")!);
    }

    if(searchParams.get("page")) {
      setCurrentPage(+searchParams.get("page")!);
    }

    if(searchParams.get("per_page")) {
      setPageSize(+searchParams.get("per_page")!);
    }
  } , [searchParams]);

  const fetchUsers = useCallback(async () => {
    if (!searchTerm) {
      return;
    }

    try {
      setIsLoading(true);
      let page = searchParams.get("page") ? `&page=${searchParams.get("page")}` : `&page=${currentPage}`;
      let perPage = searchParams.get("per_page") ? `&per_page=${searchParams.get("per_page")}` : `&per_page=${pageSize}`;
      navigate({pathname: "/",search: `?keyword=${searchTerm}${page}${perPage}`});

      const result = await axios.get(
        `https://api.github.com/search/users?q=${searchTerm}&in=name&type=user${perPage}${page}`
      );
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
  };

  const handleChangeView = (activeView: string) => {
    setViewMethod(activeView);
  };

  return <div className="main_container">
    <Search onSearch={handleSearch} view={viweMethod} changeView={handleChangeView} keyword={searchTerm}/>
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
        mustBeReset={mustBeResetPaginate} 
        setSearchParams={setSearchParams}/>
    }
  </div>
}