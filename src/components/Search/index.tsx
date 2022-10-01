import React, { useEffect, useState } from "react";
import ViewToggle from "./ViewToggle";
import { SearchContainer, SearchInput, SearchBtn } from "./styles";

interface ISearchProps {
  onSearch: (searchTerm: string) => void;
  view: string;
  changeView: (activeView: string) => void;
  keyword:string;
}

export const Search: React.FC<ISearchProps> = ({ onSearch, view, changeView , keyword }) => {
  const [searchTerm, setSearchTerm] = useState<string>("");

  useEffect(() => {
    if(keyword){
      setSearchTerm(keyword);
    }
  } , [keyword]);

  const handleSearch = async () => {
    const searchTermInput = searchTerm.toLowerCase().trim();
    if (searchTermInput === "") {
      console.log("Enter something");
      return;
    }

    onSearch(searchTermInput);
  };

  return (
    <SearchContainer>
      <div>
        <SearchInput
          type="text"
          placeholder="Enter something"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <SearchBtn onClick={handleSearch}>Search</SearchBtn>
      </div>
      <ViewToggle view={view} changeView={changeView}/>
    </SearchContainer>
  );
};
