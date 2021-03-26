// import { Component } from 'react';
import s from './ImageGallery.module.css';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
// import PropTypes from 'prop-types';

function ImageGallery({ images, toggleModal }) {
  return (
    <ul className={s.ImageGallery}>
      {images.map(image => (
        <ImageGalleryItem
          key={image.id}
          className={s.ImageGalleryItem}
          image={image}
          toggleModal={toggleModal}
        />
      ))}
    </ul>
  );
}

export default ImageGallery;