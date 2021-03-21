import { Component } from 'react';
import getImages from './services/pixabayAPI';

import Searchbar from './Searchbar/Searchbar';
import ImageCallery from './ImageGallery/ImageGallery';

class App extends Component {
  state = {
    searchQuery: null,
    page: 1,
    isLoading: false,
    images: [],
    error: false,
  };

  componentDidMount() {
    console.log('component Did Mount');
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('component Did Update !!!');

    console.log('Попередній пропс ' + prevProps.searchQuery);
    console.log('Попередній стейт ' + prevState.searchQuery);
    console.log(`'State : '` + this.state.searchQuery);
    console.log(prevState.searchQuery === this.state.searchQuery);

    if (prevState.searchQuery !== this.state.searchQuery) {
      this.fetchImages();
    }
  }

  onSearch = query => {
    this.setState({
      searchQuery: query,
      page: 1,
      isloading: false,
      images: [],
      error: false,
    });
  };

  handleFormSubmit = searchQuery => {
    this.setState(searchQuery);
  };

  fetchImages = async () => {
    const { searchQuery, page } = this.state;
    this.setState({ isLoading: true });
    try {
      const data = await getImages({ searchQuery, page });
      this.setState(prevState => ({
        images: [...prevState.images, ...data],
      }));
    } catch (error) {
      console.log({ error });
      this.setState({ isLoading: false });
    }
  };

  render() {
    const { images } = this.state;
    return (
      <>
        <Searchbar onSearch={this.onSearch} />
        <ImageCallery images={images} />
        <p1>моя робота</p1>
      </>
    );
  }
}
export default App;
