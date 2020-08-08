import React from 'react';
import { Grid, CircularProgress } from '@material-ui/core';
import GifCard from '../GifCard/GifCard';
import { GifItem } from '../../api/gifsearch';
import './GifCards.css';


interface GifCardsProps {
  items: Array<GifItem>;
}

function GifCards(props: GifCardsProps) {
  const Cards: JSX.Element[] = [];

  props.items.forEach((item: GifItem, i: number) => {
    Cards.push(
      <Grid key={'card_' + i} item xs={12} sm={6} md={4} lg={3}>
        <GifCard url={item.url} title={item.title}/>
      </Grid>
    )
  });

  return (
    <React.Fragment>
      <Grid container spacing={3} justify='space-evenly'>
        {props.items.length === 0 && <div className='loader'><CircularProgress /></div>}
        {props.items.length > 0 && Cards}
      </Grid>
    </React.Fragment>
  )
}

export default GifCards;
