import s from './ImageGallery.module.css';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import PropTypes from 'prop-types';

function ImageGallery({ images }) {
  return (
    <ul className={s.ImageGallery}>
      {images.map(image => (
        <ImageGalleryItem
          key={image.id}
          className={s.ImageGalleryItem}
          image={image}
        />
      ))}
    </ul>
  );
}

ImageGallery.propTypes = {
  key: PropTypes.number.isRequired,
  image: PropTypes.object.isRequired,
};

export default ImageGallery;
