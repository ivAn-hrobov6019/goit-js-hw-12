import axios from 'axios';

const API_KEY = '56206542-d30ce4b763db5e6ca8fe7f09b';
axios.defaults.baseURL = 'https://pixabay.com/api/';

export async function getImagesByQuery(query, page) {
  const searchParams = {
    key: API_KEY,
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    page: page,
    per_page: 15,
  };

  const response = await axios.get('', { params: searchParams });
  return response.data;
}
