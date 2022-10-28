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
  const [disabledBtn, setDisabledBtn] = useState<boolean>(true);

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

  const handleChangeInput = (e:any) => {
    let searched = e.target.value;
    setSearchTerm(searched);
    searched.trim().length > 0 ? setDisabledBtn(false) : setDisabledBtn(true);
  }

  return (
    <SearchContainer>
      <div>
        <SearchInput
          type="text"
          placeholder="Enter something"
          value={searchTerm}
          onChange={(e) => handleChangeInput(e)}
        />
        <SearchBtn onClick={handleSearch} disabled={disabledBtn}>Search</SearchBtn>
      </div>
      <ViewToggle view={view} changeView={changeView}/>
    </SearchContainer>
  );
};
