import React, { useEffect, useState } from 'react';
import { Grid } from '@material-ui/core';
import GifCard from '../GifCard/GifCard';

const API_KEY: string = process.env.REACT_APP_API_KEY || '';

interface GifCardsProps {
  userInput: string;
}

interface GifItem {
  url: string;
  title: string;
}

function parseGif(item: any):GifItem {
  return {
    url: item['images']['fixed_height']['url'],
    title: item['title'],
  }
};

function GifCards(props: GifCardsProps) {
  const [GifItems, setGifItems] = useState<GifItem[]>([]);

  useEffect(() => {
    if (props.userInput.trim().length < 3) {
      return;
    }
    const url = new URL('https://api.giphy.com/v1/gifs/search');
    url.searchParams.append('api_key', API_KEY);
    url.searchParams.append('q', props.userInput);
    url.searchParams.append('limit', '20');
    url.searchParams.append('offset', '0');
    url.searchParams.append('rating', 'g');
    url.searchParams.append('lang', 'en');

    fetch(url.toString())
      .then(response => response.json())
      .then(rawData => rawData['data'].map((item: any) => parseGif(item)))
      .then(gifItems => setGifItems(gifItems))
      .catch(err => console.error(err));
  }, [props.userInput])

  const Cards: JSX.Element[] = [];

  GifItems.forEach((item: GifItem, i: number) => {
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
