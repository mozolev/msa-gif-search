import React from 'react';
import { Grid } from '@material-ui/core';
import GifCard from '../GifCard/GifCard';
import { GifItem } from '../../api/gifsearch';


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
    <div>
      <Grid container spacing={3} justify='space-evenly'>
        {Cards}
      </Grid>
    </div>
  )
}

export default GifCards;
