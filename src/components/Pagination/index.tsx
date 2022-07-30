import React from "react";
import "./styles.css";


interface IPaginationProps {
  total: number;
  pageSize: number;
  currentPage: number;
}

export const Pagination:React.FC<IPaginationProps> = ({total , pageSize , currentPage}) => {
  let pageSizeValues = [10,20,30,40,50];
  const renderPageSizeSelect = () => {
    let options:any[] = [];
    let o = pageSizeValues.forEach(opt => {
      return options.push(<option value={opt}>{opt}</option>);
    });
    
    return <>
      view
      <select className="page_size" value={pageSize}>
        {options}
      </select>
      items per page
    </>
  }

  const renderButtons = () => {
    let numberOfPages = total % pageSize === 0 ? total / pageSize : Math.ceil(total / pageSize) + 1;
    let buttons = [];
    for(let i=0 ; i < numberOfPages ; i++) {
      buttons.push(<button key={i} className={(currentPage === i+1) ? "btn active" : "btn"}>{i+1}</button>);
    }

    return buttons;
  }

  return <div className="pagination">
    <div>
      {renderPageSizeSelect()}
    </div>
    <div>
      {renderButtons()}
    </div>
  </div>
}