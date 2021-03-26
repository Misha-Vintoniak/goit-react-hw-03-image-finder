import axios from 'axios';

const API_KEY = '19212472-91085f93384c895bec44df301';
const BASE_URL = 'https://pixabay.com/api/';

const getImages = ({ searchQuery = '', page = 1 }) => {
  return axios
    .get(
      `${BASE_URL}?q=${searchQuery}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`,
    )
    .then(res => res.data.hits)
    .catch(console.error());
};

/*axios.defaults.baseURL = BASE_URL;
axios.defaults.params = {
  key: API_KEY,
  image_type: 'photo',
  orientation: 'horizontal',
  per_page: 12,
};
const getImages = async ({ searchQuery, page = 1 }) => {
  try {
    const { data } = await axios.get('', {
      params: {
        searchQuery,
        page,
      },
    });
    console.log(data.hits);
    return data.hits;
  } catch (error) {
    console.log('error : '(error));
    return [];
  }
};*/
export default getImages;
