import { Component } from 'react';
import getImages from './services/pixabayAPI';

import Searchbar from './components/Searchbar/Searchbar';
import ImageCallery from './components/ImageGallery/ImageGallery';
import Button from './components/Button/Button';
import Loader from './components/Loader/Loader';

class App extends Component {
  state = {
    searchQuery: null,
    page: 1,
    isLoading: false,
    images: [],
    error: false,
    status: 'idle',
    showModal: false,
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.searchQuery !== this.state.searchQuery) {
      this.setState({ status: 'pending' });
      this.fetchImages();
    }
    if (
      this.state.images.length === 0 &&
      prevState.images.length !== this.state.images
    ) {
      new Error(
        `${this.state.searchQuery} not found, please enter a new search`,
      );
    }

    if (prevState.page !== this.state.page) {
      this.fetchImages();
    }
  }

  onSearch = query => {
    this.setState({
      searchQuery: query,
      page: 1,
      images: [],
      error: false,
      status: 'pending',
    });
  };

  fetchImages = async () => {
    const { searchQuery, page } = this.state;
    this.setState({ isLoading: true });
    try {
      const data = await getImages({ searchQuery, page });
      this.setState(prevState => ({
        images: [...prevState.images, ...data],
        status: 'resolved',
      }));
    } catch (error) {
      this.setState({ status: 'rejected' });
      return Promise.reject(new Error('Something wrong ... refresh search'));
    }
  };
  loadMore = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
    console.log(this.toggleModal);
  };

  render() {
    const { images, status, error, showModal } = this.state;

    <Searchbar onSearch={this.onSearch} />;
    if (status === 'idle') {
      return <Searchbar onSearch={this.onSearch} />;
    }
    if (status === 'pending') {
      return <Loader />;
    }
    if (status === 'rejected') {
      <p>{error.message}</p>;
    }
    if (status === 'resolved') {
      return (
        <>
          <Searchbar onSearch={this.onSearch} />
          <ImageCallery images={images} onClose={showModal} />

          <Button onHandleClick={this.loadMore} />
        </>
      );
    }
  }
}
export default App;
