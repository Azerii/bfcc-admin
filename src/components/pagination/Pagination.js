import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Pagination from '@material-ui/lab/Pagination';
import styled  from 'styled-components';
const Wrapper = styled.div`
display:flex;
justify-content:center;
button{
  background:#003399;
  color:white;
}
 `

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      marginTop: theme.spacing(2),
    },
  },
}));

export default function PaginationButtons() {
    const classes = useStyles();
  
    return (
      <Wrapper>
      <div className={classes.root}>
        <Pagination count={10} color="red" showFirstButton showLastButton shape="rounded"/>
      </div>
      </Wrapper>
    );
  }
  