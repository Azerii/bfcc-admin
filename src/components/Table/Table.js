import React, { useMemo, useState } from "react";
import { useTable, useSortBy, useGlobalFilter, useFilters } from "react-table";
import Button from "../Button/Button";
import { arrow_left_blue, arrow_right_blue } from "../../assets";
import MOCK_DATA from "./MOCK_DATA.json";
import { COLUMNS } from "./columns";
import GlobalFilter from "./GlobalFilter";
import "./BasicTable.css";
import styled from "styled-components";
import ColumnFilter from "./ColumnFilter";

const Wrapper = styled.div`
  .screen {
    height: 100vh;
    overflow: scroll;
  }
`;

const BasicTable = () => {
  const columns = useMemo(() => COLUMNS, []);
  const data = useMemo(() => MOCK_DATA, []);

  const defaultColumn = useMemo(() => {
    return {
      Filter: ColumnFilter,
    };
  }, []);
  let PageSize = 10;

  const [currentPage, setCurrentPage] = useState(1);

  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    return MOCK_DATA.slice(firstPageIndex, lastPageIndex);
  }, [currentPage]);

  // console.log(currentTableData)

  // console.log(data)
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    footerGroups,
    rows,
    state,
    //  useFilters,
    setGlobalFilter,
    prepareRow,
  } = useTable(
    {
      columns,
      data,
      defaultColumn,
    },
    useFilters,
    useGlobalFilter,
    useSortBy
  );
  const { globalFilter } = state;

  return (
    <Wrapper>
      <div className="screen">
        <GlobalFilter filter={globalFilter} setFilter={setGlobalFilter} />
        <table {...getTableProps()}>
          <thead>
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                    {column.render("Header")}
                    <span>
                      {column.isSorted ? (
                        column.isSortedDesc ? (
                          <img src={arrow_left_blue} alt={arrow_left_blue} />
                        ) : (
                          <img src={arrow_right_blue} alt={arrow_right_blue} />
                        )
                      ) : (
                        ""
                      )}
                    </span>
                    <div>
                      {column.canFilter ? column.render("Filter") : null}
                    </div>
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
                    if (index > 1) {
                      return null;
                    } else if (index === 1) {
                      return (
                        <td {...cell.getCellProps()}>
                          <Button text={cell.render("Cell")} />
                        </td>
                      );
                    } else {
                      return (
                        <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                      );
                    }
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
      </div>
    </Wrapper>
  );
};
export default BasicTable;
