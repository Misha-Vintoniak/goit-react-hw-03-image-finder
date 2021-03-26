import s from './ImageGalleryItem.module.css';

const ImageGalleryItem = ({ image, toggleModal }) => {
  return (
    <li className={s.ImageGalleryItem}>
      <img
        className={s.ImageGalleryItemImage}
        src={image.webformatURL}
        alt={image.tags}
        onClick={toggleModal}
      />
    </li>
  );
};

export default ImageGalleryItem;
