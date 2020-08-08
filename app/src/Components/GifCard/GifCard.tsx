import React, { useState } from 'react';
import { CardMedia, Card, CardHeader, IconButton, Tooltip } from '@material-ui/core';
import LinkIcon from '@material-ui/icons/Link';
import './GifCard.css';

interface GifCardProps {
  url: string;
  title: string;
};

function GifCard(props: GifCardProps) {
  const TIP_TIME = 2000; // 2s
  const [isCopied, setIsCopied] = useState<boolean>(false);

  const copyToClipboard = () => {
    const el = document.createElement('textarea');
    el.value = props.url;
    el.setAttribute('readonly', '');
    el.style.position = 'absolute';
    el.style.left = '-9999px';
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);

    setIsCopied(true);
    setTimeout(() => {
      setIsCopied(false);
    }, TIP_TIME);
  };

  return (
    <React.Fragment>
      <Card className='GifCardContainer'>
        <CardMedia
          className='GifCardImage'
          image={props.url}
          src='picture'
        />
        <CardHeader
          title={props.title}
          titleTypographyProps={{
            variant: 'body2',
          }}
          action={
            <Tooltip open={isCopied} title='Copied!' placement='bottom'>
              <IconButton
                color="primary"
                size="medium"
                onClick={copyToClipboard}
              >
                <LinkIcon />
              </IconButton>
            </Tooltip>
          }
        />
      </Card>
    </React.Fragment>
  )
}

export default GifCard;
