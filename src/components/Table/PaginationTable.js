import React, { useMemo } from "react";
import { Link } from "react-router-dom";
import {
  useTable,
  useSortBy,
  useGlobalFilter,
  useFilters,
  usePagination,
} from "react-table";
import {
  arrow_left_blue,
  arrow_left_grey,
  arrow_right_blue,
  arrow_right_grey,
  remove as remove_icon,
} from "../../assets";
import { MOCK_COLUMNS } from "./columns";
import styled from "styled-components";
import ColumnFilter from "./ColumnFilter";
import FormGroup from "../FormGroup";
import Button from "../Button/Button";

const Wrapper = styled.div`
  .header {
    margin-bottom: 3.6rem;
  }
  .btn {
    margin-left: auto;
    margin-right: 1.5rem;
    display: block;
    width: fit-content;
    flex:1;
    /* justify-self:right; */
    button{
      margin: auto 0 auto auto;
    }
  }
  #filter .header{
    margin-bottom:0;
  }

  .align{
    margin-left:auto;
    width:fit-content;
  }
`;

const TableWrapper = styled.table`
  border-collapse: collapse;
  width: 100%;
  background-color: #ffffff;
  border-radius: 0.25rem;

  a {
  }
  td {
    border: 1px solid #efefef;
    border-left: none;
    border-right: none;
    padding: 1.8rem 1rem;
    color: var(--text);
    font-size: 16px;
    line-height: 18px;
    max-width: 14rem;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;

    a {
      display: block;
      margin: 0;
      height: 100%;
      width: 100%;
    }
  }

  tr {
    transition: all 0.2s ease-out;
  }

  tr:hover {
    background-color: var(--background);
    cursor: pointer;
  }

  tr.header {
    cursor: default;
  }

  tr.header:hover {
    background-color: transparent;
  }

  th {
    padding: 1.8rem 1rem;
    text-align: left;
    color: var(--text);
    font-size: 14px;
    font-weight: 700;
    line-height: 18px;
    white-space: nowrap;
  }
`;

const PaginationWrapper = styled.div`
  margin-top: 2.4rem;

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

const PaginationTable = ({
  COLUMNS = MOCK_COLUMNS,
  DATA,
  title,
  clickFunc,
}) => {
  const columns = COLUMNS;
  const data = DATA;

  // const clickFunc = () => {};

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
  const { pageIndex } = state;

  const removeHandler = (id) => {
    if (title === "Questions") {
      return (
        <td
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderBottom: "0",
          }}
          onClick={() => clickFunc(id)}
        >
          <img
            src={remove_icon}
            alt="remove"
            style={{ height: "16px", marginRight: "15px" }}
          />
          <p
            style={{
              display: "flex",
              alignItems: "center",
              fontSize: "16px",
              margin: "8px 0  0",
            }}
          >
            Remove
          </p>
        </td>
      );
    } else return "";
  };

  return (
    <Wrapper>
      <div className="flexRow alignCenter  header">
        <h4 className="title">{title}</h4>
        {/* <GlobalFilter filter={globalFilter} setFilter={setGlobalFilter} /> */}
        
        {title === "Questions" && <Link className="btn" to="/questions/add-question">
          <Button text={"Add question"} />
        </Link>}

        <FormGroup
          fieldStyle="search"
          name="filter"
          placeholder="Filter by"
          setValue={setGlobalFilter}
          outline={false}
          labelBg="var(--background)" 
          className='align'
        />
      </div>
      <div className="screen">
        <TableWrapper {...getTableProps()}>
          <thead>
            {headerGroups.map((headerGroup, index) => (
              <tr
                key={index + headerGroup}
                {...headerGroup.getHeaderGroupProps()}
                className="header"
              >
                <th width="24"></th>
                {headerGroup.headers.map((column) => (
                  <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                    {column.render("Header")}
                  </th>
                ))}
              </tr>
            ))}
          </thead>

          <tbody {...getTableBodyProps()}>
            {page.map((row, index) => {
              prepareRow(row);
              return (
                <tr key={row + index} {...row.getRowProps()}>
                  <td width="24">
                    <Link
                      to={`/${row.cells[0].value}_${row.cells[1].value}`}
                    ></Link>
                  </td>
                  {row.cells.map((cell, index) => (
                    <td key={cell + index} {...cell.getCellProps()}>
                      <Link to={`/${row.cells[0].value}_${row.cells[1].value}`}>
                        {cell.render("Cell")}
                      </Link>
                    </td>
                  ))}

                  {/* {console.log(row.original.id)} */}
                  {removeHandler(row.original.id)}
                </tr>
              );
            })}
          </tbody>
        </TableWrapper>

        <PaginationWrapper className="flexRow alignCenter justifySpaceBetween">
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
                if (pageNumber === pageIndex) {
                  return (
                    <li key={pageNumber} className="featured">
                      {pageNumber + 1}
                    </li>
                  );
                }
                return (
                  <li key={pageNumber} onClick={() => gotoPage(pageNumber)}>
                    {pageNumber + 1}
                  </li>
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
            <p>
              Displaying {(pageIndex + 1) * 10} of {pageCount * 10} records
            </p>
          </div>
        </PaginationWrapper>
      </div>
    </Wrapper>
  );
};
export default PaginationTable;
