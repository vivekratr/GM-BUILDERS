import React from 'react';

const BackgroundImageDiv = ({ imageUrl }) => {
  const divStyle = {
    backgroundImage: `url(${imageUrl})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    width: '100%',
    height: '400px', // Set your desired height
  };

  return <div style={divStyle}></div>;
};

export default BackgroundImageDiv;
