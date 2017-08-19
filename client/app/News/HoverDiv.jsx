import React from 'react';

const HoverDiv = ({newsentry}) => {
  return (
      <div className="hover-div">
        <img src={newsentry.urlToImage} className="newsimage"/>
        <br/>
        <br/>
        <div className="newsdesc">
          {newsentry.description}
        </div>
      </div>
  );
};

export default HoverDiv;