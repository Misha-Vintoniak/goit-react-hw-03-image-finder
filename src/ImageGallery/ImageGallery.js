// import { Component } from 'react';
import s from './ImageGallery.module.css';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';

function ImageGallery({ images }) {
  return (
    <ul className={s.ImageGallery}>
      {images.map(image => {
        const { webformatURL, largeImageURL, id } = image;
        return (
          <ImageGalleryItem
            className={s.ImageGalleryItem}
            key={id}
            imageSrc={webformatURL}
            imageUrl={largeImageURL}
            // handler={onImageClick}
          />
        );
      })}
    </ul>
  );
}
export default ImageGallery;
