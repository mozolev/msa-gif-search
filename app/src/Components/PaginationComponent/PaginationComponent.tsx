import React from 'react';
import { Pagination } from '@material-ui/lab';
import { Grid } from '@material-ui/core';
import './PaginationComponent.css';


interface PaginationComponentProps {
  page: number;
  pages: number;
  onChange: (page:number) => void;
};

function PaginationComponent(props: PaginationComponentProps) {
  return (
    <div>
      <Grid className='PaginationComponent' container justify='center'>
        <Pagination
          page={props.page}
          count={props.pages}
          onChange={(_, page: number) => { props.onChange(page) }}
        />
      </Grid>
    </div>
  )
};

export default PaginationComponent;
