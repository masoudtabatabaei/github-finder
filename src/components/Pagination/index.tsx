import React from "react";
import "./styles.css";


interface IPaginationProps {
  total: number;
  pageSize: number;
  currentPage: number;
}

export const Pagination:React.FC<IPaginationProps> = ({total , pageSize , currentPage}) => {
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
      view
      <select className="page_size">
        <option value="10">10</option>
        <option value="20">20</option>
        <option value="30">30</option>
        <option value="40">40</option>
      </select>
      items per page
    </div>
    <div>
      {renderButtons()}
    </div>
  </div>
}