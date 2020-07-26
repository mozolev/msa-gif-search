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

  const submitHandler = () => {
    props.setUserInput(searchValue);
  };

  return (
    <div>
      <Grid container justify='center' spacing={3} alignItems='center' className='SearchBarContainer'>
        <Grid item>
          <TextField
            variant='outlined'
            onChange={(evt) => inputChangeHandler(evt.target.value)}
            value={searchValue}
            size='medium'
          />
        </Grid>
        <Grid item>
          <Button
            variant='outlined'
            color='primary'
            onClick={submitHandler}
            size='medium'
          >
            Search
          </Button>
        </Grid>
      </Grid>
    </div>
  )
};

export default SearchBar;
