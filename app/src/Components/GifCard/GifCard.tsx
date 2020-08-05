import React from 'react';
import { CardMedia, Card, CardContent, Typography } from '@material-ui/core';
import './GifCard.css';

interface GifCardProps {
  url: string;
  title: string;
};

function GifCard(props: GifCardProps) {
  return (
    <div>
      <Card className='GifCardContainer'>
        <CardMedia
          className='GifCardImage'
          image={props.url}
        />
        <CardContent>
          <Typography variant='body2' color='textPrimary'>
            {props.title}
          </Typography>
        </CardContent>
      </Card>
    </div>
  )
}

export default GifCard;
