import React from 'react';

const BackgroundImageDiv = ({ imageUrl, children }) => {
  const divStyle = {
    backgroundImage: `url(${imageUrl})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    width: '100%',
    height: '100%',
  };

  return (
    <div style={divStyle} className="absolute inset-0">
      {children}
    </div>
  );
};

export default BackgroundImageDiv;
