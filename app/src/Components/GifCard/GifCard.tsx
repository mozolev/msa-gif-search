import React, { useState } from 'react';
import { CardMedia, Card, CardHeader, IconButton, Tooltip } from '@material-ui/core';
import LinkIcon from '@material-ui/icons/Link';
import './GifCard.css';
import copyToClipboard from '../../helpers/copyToClipboard';
import { GifItem } from '../../api/gifsearch';


interface GifCardProps {
  item: GifItem;
};

function GifCard(props: GifCardProps) {
  const TIP_TIME = 2000; // 2s
  const [isCopied, setIsCopied] = useState<boolean>(false);

  return (
    <React.Fragment>
      <Card className='GifCardContainer'>
        <CardMedia
          className='GifCardImage'
          image={props.item.url}
          src='picture'
        />
        <CardHeader
          title={props.item.title}
          titleTypographyProps={{
            variant: 'body2',
          }}
          action={
            <Tooltip open={isCopied} title='Url copied!' placement='bottom'>
              <IconButton
                color="primary"
                size="medium"
                onClick={() => copyToClipboard(props.item.sourcelUrl, () => {
                  setIsCopied(true);
                  setTimeout(() => {
                    setIsCopied(false);
                  }, TIP_TIME);
                })}
              >
                <LinkIcon />
              </IconButton>
            </Tooltip>
          }
        />
      </Card>
    </React.Fragment>
  );
};

export default GifCard;
