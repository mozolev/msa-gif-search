import React from 'react';
import giphyLogo from '../../images/giphy_logo.png';
import './Copyright.css';


const Copyright = () => {
  return (
    <div className='Copyright'>
      <a href='https://giphy.com' rel='noopener noreferrer' target='_blank'>
        <img src={giphyLogo} alt='giphy logo'></img>
      </a>
    </div>
  )
};

export default Copyright;
