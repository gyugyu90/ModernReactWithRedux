import React from 'react';

const ImageList = (props) => {

  // key가 필요한 이유는 reload 될때 불필요한 rendering을 줄이기 위해서
  const images = props.images.map(({id, urls, description}) => {
    return (
      <img 
        key={id} 
        src={urls.small} 
        alt={description}
      />
    );
  })

  return (
    <div>{images}</div>
  );
};

export default ImageList;