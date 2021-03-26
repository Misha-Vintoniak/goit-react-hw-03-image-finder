import Loader from 'react-loader-spinner';
import { Component } from 'react';

export default class Load extends Component {
  render() {
    return <Loader type="Circles" color="#3f51b5" height={200} width={200} />;
  }
}
