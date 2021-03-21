import s from './ImageGalleryItem.module.css';

export default function ImageGalleryItem({ imageSrc, imageUrl }) {
  return (
    <li className={s.ImageGalleryItem}>
      <img
        src={imageSrc}
        alt=""
        data-url={imageUrl}
        // onClick={handler}
        className={s.ImageGalleryItem_image}
      />
    </li>
  );
}
