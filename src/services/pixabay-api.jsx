export default async function fetchImages(searchKey, page) {
    const axios = require('axios');
  
    const API_KEY = '30340007-842316b9a374c4f32c2774f09';
  
    const URL = `https://pixabay.com/api/?key=${API_KEY}&q=${searchKey}&image_type=photo&orientation=horizontal&safesearch=true&per_page=12&page=${page}`;
  
    const images = await axios.get(URL);
  
    const returnedImages = images.data.hits.map(
      ({ id, largeImageURL, tags, webformatURL }) => {
        return {
          id,
          largeImageURL,
          tags,
          webformatURL,
        };
      }
    );
    return returnedImages;
  }