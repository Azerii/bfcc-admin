import React,{useMemo,useState} from 'react'
import { useTable,useSortBy,useGlobalFilter,useFilters,usePagination } from 'react-table'
import Button  from '../Button/Button'
import {arrow_left_blue,arrow_left_grey,arrow_right_blue,arrow_right_grey} from '../../assets'
import MOCK_DATA from './MOCK_DATA.json'
import { COLUMNS } from './columns'
import  GlobalFilter  from "./GlobalFilter";
import './BasicTable.css';
import styled from 'styled-components';
import Pagination from '../Pagination/Pagination';
import ColumnFilter from './ColumnFilter';
const Wrapper = styled.div`

.screen{
  height:90vh;
  overflow:scroll;
}

.pagination{
  display:flex;
align-items:center;
background:white;
margin:auto;
li{
  width: 32px;
  height: 32px;
  border-radius: 5px;
  color:black;
  display:flex;
  justify-content:center;
  align-items:center;
}
.featured{
  background-color:var(--primary);
  color: white;
}
}


`


const PaginationTable = () => {

  const columns = useMemo(()=> COLUMNS,[])
  const data = useMemo(()=> MOCK_DATA,[])

  const defaultColumn = useMemo(()=>{
    return{
      Filter:ColumnFilter
    }
  },[])


  

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
    prepareRow
} = useTable({
    columns,
    data,
    defaultColumn,
},
useFilters,
useGlobalFilter,
useSortBy,
usePagination
  )
  const {pageIndex,globalFilter} = state




  return (
    <Wrapper>
      <div className='screen'>
    <GlobalFilter filter={globalFilter} setFilter={setGlobalFilter}/>
    <table {...getTableProps()}>
      <thead>
        {headerGroups.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                  {column.render('Header')}
                <span>{column.isSorted ? (column.isSortedDesc ? <img src={arrow_left_blue} alt={arrow_left_blue}/>: <img src={arrow_right_blue} alt={arrow_right_blue}/>) : '' }</span>
                <div>{column.canFilter ? column.render('Filter') : null}</div>
                </th>
              ))}
          </tr>
        )
        )}
      </thead>

      <tbody {...getTableBodyProps()}>
      {page.map((row) => {
          prepareRow(row)
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map((cell,index) => {
                if(index > 1){
                  return null
                }
                else if(index === 1){
                  return <td style={{marginLeft:'auto',width:'144px',padding:'0'}} {...cell.getCellProps()}>
                  <Button text='Remove' color='#FBFBFB' borderColor='transparent' textColor='#404040'/>
                </td>
                }
                else {return <td {...cell.getCellProps()}>
                {cell.render('Cell')}
              </td>}
             }
             )}
            </tr>
          )
       })}
      </tbody>
     
    </table>
    <ul className='pagination'
    >
         <li
         className='pagination-item' 
         onClick={()=>gotoPage(0)}
      >
    <img src={canPreviousPage ?
       arrow_left_blue
       : arrow_left_grey
      } 
       alt="arrow_left" 
       />
    <img src={canPreviousPage ?
       arrow_left_blue
       : arrow_left_grey
      } 
       alt="arrow_left" 
       />
      </li>
         <li
         className='pagination-item' 
        onClick={previousPage}
      >
    <img src={canPreviousPage ?
       arrow_left_blue
       : arrow_left_grey
      } 
       alt="arrow_left" 
       />
      </li>
      {pageOptions.map(pageNumber => {
        // if (pageNumber === DOTS) {
        //   return <li className="pagination-item dots">&#8230;</li>;
        // }
        if(pageNumber === pageIndex ){
          return <li className="featured">
            {pageNumber + 1 }
          </li>;

        }
        return (
          <li
            onClick={() => gotoPage(pageNumber)}
          >
            {pageNumber + 1}
          </li>
        );
      })}
      <li
        onClick={nextPage}
      >
        {/* <div className="arrow right" >right</div> */}
        <img 
        src={ canNextPage?
          arrow_right_blue
          :arrow_right_grey} 
        alt="arrow_right" />
      </li>
      <li
        onClick={()=>gotoPage(pageCount - 1)}
      >
        <img 
        src={ 
          canNextPage
          ?
          arrow_right_blue
          :arrow_right_grey} 
        alt="arrow_right" />
        <img 
        src={
          canNextPage
           ?
          arrow_right_blue
          :arrow_right_grey} 
        alt="arrow_right" />
      </li>
    </ul>
    </div>
    
    </Wrapper>
  )
}
export default PaginationTable;