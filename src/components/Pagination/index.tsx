import { faChevronCircleLeft, faChevronCircleRight, faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { ChangeEvent, SetStateAction, useEffect } from "react";
import {PaginationContainer, TogglePageSize, TogglePageButtons, PageSize, Button} from "./index.styled";


interface IPaginationProps {
  total: number;
  pageSize: number;
  setPageSize: React.Dispatch<SetStateAction<number>>;
  currentPage: number;
  setCurrentPage: React.Dispatch<SetStateAction<number>>;
  mustBeReset: boolean;
  setSearchParams:any;
}

export const Pagination: React.FC<IPaginationProps> = ({ total, pageSize, setPageSize, currentPage, setCurrentPage, mustBeReset , setSearchParams }) => {
  let pageSizeValues = [10, 20, 30, 40, 50];
  const numberOfShownPage = 3;

  const renderPageSizeSelect = () => {
    let options: any[] = [];
    pageSizeValues.forEach((opt , ind) => {
      return options.push(<option key={ind} value={opt}>{opt}</option>);
    });

    return <>
      view
      <PageSize value={pageSize} onChange={handleTogglePageSize}>
        {options}
      </PageSize>
      items per page
    </>
  }

  const handleTogglePageSize = (e: ChangeEvent<HTMLSelectElement>) => {
    setPageSize(+e.target.value);
    setCurrentPage(1);
    setSearchParams({"page":1 , "per_page": +e.target.value});
  }

  const handlePaginate = (activePage: number) => {
    setCurrentPage(activePage);
    setSearchParams({"page":activePage , "per_page": +pageSize});
  }

  const renderButtons = () => {
    let numberOfPages = total % pageSize === 0 ? total / pageSize : Math.floor(total / pageSize) + 1;
    let buttons = [];
  
    buttons.push(<Button key="a" className="btn" disabled={currentPage === 1} onClick={() => handlePaginate(1)}><FontAwesomeIcon icon={faChevronCircleLeft}></FontAwesomeIcon></Button>);
    buttons.push(<Button key="b" className="btn" disabled={currentPage === 1} onClick={() => handlePaginate(currentPage - 1)}><FontAwesomeIcon icon={faChevronLeft}></FontAwesomeIcon></Button>);

    if(numberOfPages < numberOfShownPage) {
      for (let i = 0; i < numberOfPages ; i++) {
        buttons.push(<Button key={i} className={(currentPage === i+1) ? "btn active" : "btn"} onClick={() => handlePaginate(i+1)}>{i+1}</Button>);
      }
    } else {
      if (currentPage + numberOfShownPage >= numberOfPages) {
        for (let i = numberOfPages - numberOfShownPage; i <= numberOfPages ; i++) {
          buttons.push(<Button key={i} className={(currentPage === i) ? "btn active" : "btn"} onClick={() => handlePaginate(i)}>{i}</Button>);
        }
      } else {
        for (let i = currentPage - 1; i <= currentPage - 1 + numberOfShownPage; i++) {
          buttons.push(<Button key={i} className={(currentPage === i + 1) ? "btn active" : "btn"} onClick={() => handlePaginate(i + 1)}>{i + 1}</Button>);
        }
      }
    }

    buttons.push(<Button key="c" className="btn" disabled={currentPage === numberOfPages} onClick={() => handlePaginate(currentPage + 1)}><FontAwesomeIcon icon={faChevronRight}></FontAwesomeIcon></Button>);
    buttons.push(<Button key="d" className="btn" disabled={currentPage === numberOfPages} onClick={() => handlePaginate(numberOfPages)}><FontAwesomeIcon icon={faChevronCircleRight}></FontAwesomeIcon></Button>);

    let pageEndIndex = pageSize * (currentPage-1) + pageSize > total ? total : pageSize * (currentPage-1) + pageSize;
    return <>
      Showing {pageSize * (currentPage-1) + 1} to {pageEndIndex} of {total} records
      {buttons}
    </>;
  }

  return <PaginationContainer>
    <TogglePageSize>
      {renderPageSizeSelect()}
    </TogglePageSize>
    <TogglePageButtons>
      {renderButtons()}
    </TogglePageButtons>
  </PaginationContainer>
}