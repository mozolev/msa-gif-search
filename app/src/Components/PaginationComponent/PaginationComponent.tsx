import React from 'react';
import { Pagination } from '@material-ui/lab';
import { Grid } from '@material-ui/core';


interface PaginationComponentProps {
  page: number;
  pages: number;
  onChange: (page:number) => void;
};

function PaginationComponent(props: PaginationComponentProps) {
  return (
    <div>
      <Grid container justify='center'>
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
