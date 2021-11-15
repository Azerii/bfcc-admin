import React, { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import {
  useTable,
  useSortBy,
  useGlobalFilter,
  useFilters,
  usePagination,
} from "react-table";
// import Button from "../Button/Button";
// import Form from "../Form/Form";
import {
  arrow_left_blue,
  arrow_left_grey,
  arrow_right_blue,
  arrow_right_grey,
} from "../../assets";
import styled from "styled-components";
import ColumnFilter from "./ColumnFilter";
import FormGroup from "../FormGroup";

const Wrapper = styled.div`
background:white;
  .header {
    margin-bottom: 3.6rem;
  }
`;

const TableWrapper = styled.table`
  border-collapse: collapse;
  width: 100%;
  background-color: #ffffff;
  border-radius: 0.25rem;

  a{

  }
  td {
    border: 1px solid #efefef;
    border-left: none;
    border-right: none;
    padding: 38.5px 1rem;
    color: var(--text);
    font-size: 16px;
    line-height: 18px;
    max-width: 14rem;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;

     &:nth-child(2){
      width: 150px;
       white-space: unset;
    text-overflow: unset;
    
    }

    a{
      display:block;
      margin:0;
      height:100%
      width:100%
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

  tr.header: hover {
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

    &:nth-child(2){
      margin-right:173px;
    }
    &:nth-child(3){
      width: 250px;
    }

  }
`;

const Grid = styled.div`
display: flex;
flex-direction:column;
justify-content:center;
position: relative;
margin:auto 0;

.title{
  display:flex;
  flex-direction:column;
  justify-content:center;
}
.grid{

  position:absolute;
  display:flex;
  justify-content:space-between;
  transform:translateY(4rem);
  width:100%;

  span{
    color:var(--grey_1);
    font-size:12px;
  }
}
`
const grid =
  <Grid >
    <div className="title">
      Performance
    </div>
      <div className="grid">
        <span>0%</span>
        <span>20%</span>
        <span>40%</span>
        <span>60%</span>
        <span>80%</span>
        <span>100%</span>
      </div>
  </Grid>

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

const TableFunction = ({
  COLUMNS,
  DATA,
  children,
  title,
}) => {
  const columns = useMemo(() => COLUMNS, []);
  const data = useMemo(() => DATA, []);

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

  // const [searchValue, setSearchValue] = useState(pageIndex + 1);

  return (
    <Wrapper>
      {children}
      <div className="flexRow alignCenter wh justifySpaceBetween header">
        <h4 className="title">{title}</h4>
        {/* <GlobalFilter filter={globalFilter} setFilter={setGlobalFilter} /> */}
        <FormGroup
          fieldStyle="shortText"
          name="search"
          placeholder="Search"
          setValue={setGlobalFilter}
          outline={false}
          labelBg="var(--background)"
        />
      </div>
      <div className="screen">
        <TableWrapper {...getTableProps()}>

          <thead>
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()} className="header">
                <th width="24"></th>
                {headerGroup.headers.map((column) => (
                  <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                    {column.Header === 'Performance' ? grid : column.render("Header")}

                  </th>
                ))}
              </tr>
            ))}
          </thead>

          <tbody {...getTableBodyProps()}>
            {page.map((row) => {
              prepareRow(row);
              { console.log(row) }
              return (
                <tr {...row.getRowProps()}>
                  <td width="24">
                  </td>
                  {row.cells.map((cell, index) => (
                    <td {...cell.getCellProps()}>
                      {cell.render("Cell")}
                      {/* {console.log(cell)} */}
                    </td>
                  ))}
                </tr>

              );
            })}
          </tbody>
        </TableWrapper>



      </div>
    </Wrapper>
  );
};
export default TableFunction;
