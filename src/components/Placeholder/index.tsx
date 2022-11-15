import React from "react";
import { GridPlaceholderContainer, GridPlaceholderItem, GridPlaceholderText, GridPlaceholderImg, TablePlaceholderRow, Table } from "./index.styled";

interface IPlaceholderProps {
  view: string;
  itemNumbers: number;
}

export const Placeholder: React.FC<IPlaceholderProps> = ({ view, itemNumbers }) => {
  const renderGridPlaceholder = () => {
    let gridPlaceholder = [];
    for (let i = 0; i < itemNumbers; i++) {
      gridPlaceholder.push(<GridPlaceholderItem key={i}>
        <GridPlaceholderImg></GridPlaceholderImg>
        <GridPlaceholderText></GridPlaceholderText>
      </GridPlaceholderItem>);
    }

    return <GridPlaceholderContainer>{gridPlaceholder}</GridPlaceholderContainer>;
  }

  const renderTablePlaceholder = () => {
    let tableRows = [];
    for (let i = 0; i < itemNumbers; i++) {
      tableRows.push(<tr key={i}>
        <td><TablePlaceholderRow></TablePlaceholderRow></td>  
        <td><TablePlaceholderRow></TablePlaceholderRow></td>  
        <td><TablePlaceholderRow></TablePlaceholderRow></td>  
      </tr>);
    }

    return <>
      <Table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Github Link</th>
          <th></th>
        </tr>
      </thead>
      <tbody>{tableRows}</tbody>
    </Table>
    </>
  }

  return <>
    {view === "grid" ? renderGridPlaceholder() : renderTablePlaceholder()}
  </>
}