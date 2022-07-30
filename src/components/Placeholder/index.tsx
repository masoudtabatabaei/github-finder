import React from "react";
import "./styles.css";

interface IPlaceholderProps {
  view: string;
  itemNumbers: number;
}

export const Placeholder: React.FC<IPlaceholderProps> = ({ view, itemNumbers }) => {
  const renderGridPlaceholder = () => {
    let gridPlaceholder = [];
    for (let i = 0; i < itemNumbers; i++) {
      gridPlaceholder.push(<div className="gridPlaceholerItem">
        <div className="skeleton gridPlaceholder_img"></div>
        <div className="skeleton gridPlaceholder_text"></div>
      </div>);
    }

    return <div className="gridPlaceholer_container">{gridPlaceholder}</div>;
  }

  const renderTablePlaceholder = () => {
    let tableRows = [];
    for (let i = 0; i < itemNumbers; i++) {
      tableRows.push(<tr>
        <td><div className="skeleton tablePlaceholder_row"></div></td>  
        <td><div className="skeleton tablePlaceholder_row"></div></td>  
        <td><div className="skeleton tablePlaceholder_row"></div></td>  
      </tr>);
    }

    return <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Github Link</th>
          <th></th>
        </tr>
      </thead>
      <tbody>{tableRows}</tbody>
    </table>
  }

  return <>
    {view === "grid" ? renderGridPlaceholder() : renderTablePlaceholder()}
  </>
}