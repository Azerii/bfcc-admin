import React, { useMemo, useState } from "react";
import {
  useTable,
  useSortBy,
  useGlobalFilter,
  useFilters,
  usePagination,
} from "react-table";
import Button from "../Button/Button";
import Form from "../Form/Form";
import {
  arrow_left_blue,
  arrow_left_grey,
  arrow_right_blue,
  arrow_right_grey,
} from "../../assets";
import MOCK_DATA from "./MOCK_DATA.json";
import { COLUMNS } from "./columns";
import GlobalFilter from "./GlobalFilter";
import "./BasicTable.css";
import styled from "styled-components";
import Pagination from "../Pagination/Pagination";
import ColumnFilter from "./ColumnFilter";
import Context from "../../components/Context/Context";

const Wrapper = styled.div`
  .screen {
    height: 90vh;
    overflow: scroll;
  }
  table th {
    background-color: red;
    height: 0;
    padding: 0;
  }
  .pgContain {
    display: flex;
    justify-content: space-between;
    margin: 0 24px;
    margin-top: 24px;
  }
  .findPage {
    display: flex;
    & > div {
      width: 100px;
      margin-right: 24px;
    }
    & > p {
      width: 222px;
      display: flex;
      align-items: center;
    }
  }
  .pagination {
    display: flex;
    width: fit-content;
    li {
      width: 32px;
      height: 32px;
      border-radius: 5px;
      color: black;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    li + li {
      margin-left: 3px;
    }
    .wh-bg {
      background-color: white;
    }
    .featured {
      background-color: var(--primary);
      color: white;
    }
  }
`;

const PaginationTable = () => {
  const columns = useMemo(() => COLUMNS, []);
  const data = useMemo(() => MOCK_DATA, []);

  const defaultColumn = useMemo(() => {
    return {
      Filter: ColumnFilter,
    };
  }, []);

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    nextPage,
    previousPage,
    canNextPage,
    canPreviousPage,
    pageOptions,
    gotoPage,
    pageCount,
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
    useSortBy,
    usePagination
  );
  const { pageIndex, globalFilter } = state;

  const [searchValue, setSearchValue] = useState(pageIndex + 1);

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
            {page.map((row) => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()}>
                  {row.cells.map((cell, index) => {
                    if (index > 1) {
                      return null;
                    } else if (index === 1) {
                      return (
                        <td
                          style={{
                            marginLeft: "auto",
                            width: "144px",
                            padding: "0",
                          }}
                          {...cell.getCellProps()}
                        >
                          <Context.Consumer>
                            {(context) => (
                              <Button
                                text="Remove"
                                color="#FBFBFB"
                                borderColor="transparent"
                                textColor="#404040"
                                onClick={() =>
                                  context.setToggleModal(!context.willModalShow)
                                }
                              />
                            )}
                          </Context.Consumer>
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
        </table>
        <div className="pgContain">
          <ul className="pagination">
            <li className="pagination-item wh-bg " onClick={() => gotoPage(0)}>
              <img
                src={canPreviousPage ? arrow_left_blue : arrow_left_grey}
                alt="arrow_left"
              />
              <img
                src={canPreviousPage ? arrow_left_blue : arrow_left_grey}
                alt="arrow_left"
              />
            </li>
            <li className="pagination-item wh-bg " onClick={previousPage}>
              <img
                src={canPreviousPage ? arrow_left_blue : arrow_left_grey}
                alt="arrow_left"
              />
            </li>
            {pageOptions
              .filter((num) => {
                if (pageIndex <= 2) {
                  return num <= 3;
                } else if (pageIndex >= pageCount - 2) {
                  return num >= pageCount - 4;
                } else return num >= pageIndex - 2 && num <= pageIndex + 2;
              })
              .map((pageNumber) => {
                // if (pageNumber === DOTS) {
                //   return <li className="pagination-item dots">&#8230;</li>;
                // }
                if (pageNumber === pageIndex) {
                  return <li className="featured">{pageNumber + 1}</li>;
                }
                return (
                  <li onClick={() => gotoPage(pageNumber)}>{pageNumber + 1}</li>
                );
              })}
            <li className=" wh-bg " onClick={nextPage}>
              {/* <div className="arrow right" >right</div> */}
              <img
                src={canNextPage ? arrow_right_blue : arrow_right_grey}
                alt="arrow_right"
              />
            </li>
            <li className=" wh-bg " onClick={() => gotoPage(pageCount - 1)}>
              <img
                src={canNextPage ? arrow_right_blue : arrow_right_grey}
                alt="arrow_right"
              />
              <img
                src={canNextPage ? arrow_right_blue : arrow_right_grey}
                alt="arrow_right"
              />
            </li>
          </ul>
          <div className="findPage">
            <Form
              name=""
              inputType="number"
              fieldStyle="shortText"
              value={searchValue}
              changeFunc={(e) => {
                setSearchValue(e);
                gotoPage(e);
              }}
            />
            <p>
              Displaying {(pageIndex + 1) * 10} of {pageCount * 10} records
            </p>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};
export default PaginationTable;
