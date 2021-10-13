import React from 'react';
// import classnames from 'classnames';
import { usePagination, DOTS } from './usePagination';
import styled from 'styled-components';
import {arrow_left_blue,arrow_left_grey,arrow_right_blue,arrow_right_grey} from '../../assets'
const Wrapper = styled.ul`
display:flex;
align-items:center;
li{
  width: 32px;
  height: 32px;
  border-radius: 5px;
  color: white;
  display:flex;
  justify-content:center;
  align-items:center;
}
.featured{
  background-color:var(--primary);
}
` 
const Pagination = props => {
  const {
    onPageChange,
    totalCount,
    siblingCount = 1,
    currentPage,
    pageSize,
    className
  } = props;

  const paginationRange = usePagination({
    currentPage,
    totalCount,
    siblingCount,
    pageSize
  });

  if (currentPage === 0 || paginationRange.length < 2) {
    return null;
  }
const finalPage = Math.ceil(totalCount / pageSize)
  const onNext = () => {
    if(finalPage > currentPage ) onPageChange(currentPage + 1);
  };

  const onPrevious = () => {
    if(currentPage > 1) onPageChange(currentPage - 1);
  }; 
  const onFirstPage = ()=>onPageChange(1);
  const onLastPage = ()=>onPageChange(finalPage)

  let lastPage = paginationRange[paginationRange.length - 1];
  return (
    <Wrapper
    >
         <li
         className='pagination-item' 
        onClick={onFirstPage}
      >
    <img src={currentPage > 1 ?
       arrow_left_blue
       : arrow_left_grey
      } 
       alt="arrow_left" 
       />
    <img src={currentPage > 1 ?
       arrow_left_blue
       : arrow_left_grey
      } 
       alt="arrow_left" 
       />
      </li>
         <li
         className='pagination-item' 
        onClick={onPrevious}
      >
    <img src={currentPage > 1 ?
       arrow_left_blue
       : arrow_left_grey
      } 
       alt="arrow_left" 
       />
      </li>
      {paginationRange.map(pageNumber => {
        if (pageNumber === DOTS) {
          return <li className="pagination-item dots">&#8230;</li>;
        }
        if(pageNumber === currentPage){
          return <li className="featured">
            {pageNumber}
          </li>;

        }
        return (
          <li
            onClick={() => onPageChange(pageNumber)}
          >
            {pageNumber}
          </li>
        );
      })}
      <li
        onClick={onNext}
      >
        {/* <div className="arrow right" >right</div> */}
        <img 
        src={ finalPage > currentPage ?
          arrow_right_blue
          :arrow_right_grey} 
        alt="arrow_right" />
      </li>
      <li
        onClick={onLastPage}
      >
        <img 
        src={ finalPage > currentPage ?
          arrow_right_blue
          :arrow_right_grey} 
        alt="arrow_right" />
        <img 
        src={ finalPage > currentPage ?
          arrow_right_blue
          :arrow_right_grey} 
        alt="arrow_right" />
      </li>
    </Wrapper>
  );
};

export default Pagination;
