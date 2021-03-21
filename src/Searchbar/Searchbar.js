import { Component } from 'react';

class Searchbar extends Component {
  state = {
    searchQuery: '',
  };

  handleChange = e => {
    this.setState({ searchQuery: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { searchQuery } = this.state;
    const { onSearch } = this.props;
    console.log(this.props);
    onSearch(searchQuery);
  };

  render() {
    return (
      <header className="Searchbar">
        <form className="SearchForm" onSubmit={this.handleSubmit}>
          <button type="submit" className="SearchForm-button">
            <span className="SearchForm-button-label">Search</span>
          </button>

          <input
            className="SearchForm-input"
            type="text"
            autocomplete="off"
            autofocus
            placeholder="Search images and photos"
            onChange={this.handleChange}
          />
          <p>{this.props.searchQuery}</p>
        </form>
      </header>
    );
  }
}

export default Searchbar;