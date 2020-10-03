import './ImageList.css';
import React from 'react';
import ImageCard from './ImageCard';

const ImageList = (props) => {

  // key가 필요한 이유는 reload 될때 불필요한 rendering을 줄이기 위해서
  const images = props.images.map((image) => {
    return (
      <ImageCard key={image.id} image={image}/>
    );
  })

  return (
    <div className="image-list">{images}</div>
  );
};

export default ImageList;