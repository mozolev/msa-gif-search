import React, { useState } from 'react';
import { Grid, TextField, Button } from '@material-ui/core';
import './SearchBar.css';

interface SearchBarProps {
  setUserInput: (value: string) => void;
}

function SearchBar(props: SearchBarProps) {
  const [searchValue, setSearchValue] = useState<string>('');

  const inputChangeHandler = (value: string) => {
    setSearchValue(value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    props.setUserInput(searchValue);
  };

  return (
    <form noValidate autoComplete='off' onSubmit={submitHandler}>
      <Grid container justify='center' spacing={3} alignItems='center' className='SearchBarContainer'>
        <Grid item xs={12} sm={6} md={6} lg={3}>
          <TextField
            variant='outlined'
            onChange={(evt) => inputChangeHandler(evt.target.value)}
            value={searchValue}
            autoFocus
            size='small'
            fullWidth
            placeholder='cat'
          />
        </Grid>
        <Grid item sm={2} md={2} lg={1}>
          <Button
            variant='outlined'
            color='primary'
            size='large'
            type='submit'
          >
            Search
          </Button>
        </Grid>
      </Grid>
    </form>
  )
};

export default SearchBar;
