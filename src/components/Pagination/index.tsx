import { faChevronCircleLeft, faChevronCircleRight, faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { ChangeEvent, SetStateAction, useEffect } from "react";
import "./styles.css";


interface IPaginationProps {
  total: number;
  pageSize: number;
  setPageSize: React.Dispatch<SetStateAction<number>>;
  currentPage: number;
  setCurrentPage: React.Dispatch<SetStateAction<number>>;
  mustBeReset: boolean;
}

export const Pagination: React.FC<IPaginationProps> = ({ total, pageSize, setPageSize, currentPage, setCurrentPage, mustBeReset }) => {
  let pageSizeValues = [10, 20, 30, 40, 50];
  const numberOfShownPage = 3;

  useEffect(() => {
    setCurrentPage(1);
  }, [mustBeReset]);

  const renderPageSizeSelect = () => {
    let options: any[] = [];
    pageSizeValues.forEach(opt => {
      return options.push(<option value={opt}>{opt}</option>);
    });

    return <>
      view
      <select className="page_size" value={pageSize} onChange={handleTogglePageSize}>
        {options}
      </select>
      items per page
    </>
  }

  const handleTogglePageSize = (e: ChangeEvent<HTMLSelectElement>) => {
    setPageSize(+e.target.value);
  }

  const handlePaginate = (activePage: number) => {
    setCurrentPage(activePage);
  }

  const renderButtons = () => {
    let numberOfPages = total % pageSize === 0 ? total / pageSize : Math.ceil(total / pageSize) + 1;
    let buttons = [];
    // for(let i=0 ; i < numberOfPages ; i++) {
    //   buttons.push(<button key={i} className={(currentPage === i+1) ? "btn active" : "btn"} onClick={() => handlePaginate(i+1)}>{i+1}</button>);
    // }

    buttons.push(<button className="btn" disabled={currentPage === 1} onClick={() => handlePaginate(1)}><FontAwesomeIcon icon={faChevronCircleLeft}></FontAwesomeIcon></button>);
    buttons.push(<button className="btn" disabled={currentPage === 1} onClick={() => handlePaginate(currentPage - 1)}><FontAwesomeIcon icon={faChevronLeft}></FontAwesomeIcon></button>);

    if (currentPage + numberOfShownPage >= numberOfPages) {
      for (let i = numberOfPages - numberOfShownPage; i <= numberOfPages ; i++) {
        buttons.push(<button key={i} className={(currentPage === i) ? "btn active" : "btn"} onClick={() => handlePaginate(i)}>{i}</button>);
      }
    } else {
      for (let i = currentPage - 1; i <= currentPage - 1 + numberOfShownPage; i++) {
        buttons.push(<button key={i} className={(currentPage === i + 1) ? "btn active" : "btn"} onClick={() => handlePaginate(i + 1)}>{i + 1}</button>);
      }
    }

    buttons.push(<button className="btn" disabled={currentPage === numberOfPages} onClick={() => handlePaginate(currentPage + 1)}><FontAwesomeIcon icon={faChevronRight}></FontAwesomeIcon></button>);
    buttons.push(<button className="btn" disabled={currentPage === numberOfPages} onClick={() => handlePaginate(numberOfPages)}><FontAwesomeIcon icon={faChevronCircleRight}></FontAwesomeIcon></button>);

    return buttons;
  }

  return <div className="pagination">
    <div>
      {renderPageSizeSelect()}
    </div>
    <div className="toggleButtons">
      {renderButtons()}
    </div>
  </div>
}