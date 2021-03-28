import { Component } from 'react';
import Modal from '../Modal/Modal';
import s from './ImageGalleryItem.module.css';
import PropTypes from 'prop-types';

class ImageGalleryItem extends Component {
  state = {
    showModal: false,
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  render() {
    const { image } = this.props;
    const { showModal } = this.state;
    return (
      <li className={s.ImageGalleryItem}>
        <img
          onClick={this.toggleModal}
          src={image.webformatURL}
          alt={image.tags}
          className={s.ImageGalleryItemImage}
        />
        {showModal && (
          <Modal
            onClose={this.toggleModal}
            src={image.largeImageURL}
            alt={image.tags}
          />
        )}
      </li>
    );
  }
}

ImageGalleryItem.propTypes = {
  image: PropTypes.shape({
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    largeImageUrl: PropTypes.string.isRequired,
  }).isRequired,
};

export default ImageGalleryItem;
