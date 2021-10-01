import React, { useMemo } from "react";
import { useTable, useSortBy ,useGlobalFilter} from "react-table";
import Button from "../Button/Button";
import MOCK_DATA from "./MOCK_DATA.json";
import { COLUMNS } from "./columns";
import "./BasicTable.css";
import  GlobalFilter  from "./GlobalFilter";
import { arrow_left_blue, arrow_right_blue } from "../../assets";

const BasicTable = () => {
  const columns = useMemo(() => COLUMNS, []);
  const data = useMemo(() => MOCK_DATA, []);

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    footerGroups,
    rows,
    state,
    setGlobalFilter,
    prepareRow,
  } = useTable(
    {
      columns,
      data,
    },
    useGlobalFilter
  );

  const {globalFilter} = state

  return (
    <>
    <GlobalFilter filter={globalFilter} setFilter={setGlobalFilter}/>
    <table {...getTableProps()}>
      <thead>
        {headerGroups.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <th {...column.getHeaderProps()}>
                {column.render("Header")}
                {/* <span>{column.isSorted ? (column.isSortedDesc ? <img src={arrow_left_blue} alt={arrow_left_blue}/>: <img src={arrow_right_blue} alt={arrow_right_blue}/>) : '' }</span> */}
              </th>
            ))}
          </tr>
        ))}
      </thead>

      <tbody {...getTableBodyProps()}>
        {rows.map((row) => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map((cell, index) => {
                // if(index > 1){
                //   return null
                // }
                // if(index === 1){
                  //   return <td {...cell.getCellProps()}>
                //   <Button text={cell.render('Cell')}/>
                // </td>
                // }
                return <td {...cell.getCellProps()}>{cell.render("Cell")}</td>;
              })}
            </tr>
          );
        })}
      </tbody>
      <tfoot>
        {footerGroups.map((footerGroup) => (
          <tr {...footerGroup.getFooterGroupProps()}>
            {footerGroup.headers.map((column) => (
              <td {...column.getFooterProps}>{column.render("Footer")}</td>
              ))}
          </tr>
        ))}
      </tfoot>
    </table>
    </>
  );
};
export default BasicTable;
