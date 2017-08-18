import React from 'react';
import NewsEntry from './NewsEntry.jsx';

const NewsList = ({ news }) => {
  return (
    <div className="newslist">
     {news.map((newsentry, i) => (
      <NewsEntry newsentry={newsentry} i={i} />
    ))}
    </div>
  );
};

export default NewsList;