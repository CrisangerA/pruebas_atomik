import API_ROUTES from 'src/shared/api.routes';
import fetchService from './fetch.service';

class PostService {
  getPosts() {}

  searchPosts = async (value, options = '') => {
    const getParams = () => {
      if (options === '') return '';
      return Object.keys(options)
        .map((option) => (options[option] !== '' ? `&${option}=${options[option]}` : ''))
        .join('');
    };
    const url = `${API_ROUTES.posts}?search=${value}${getParams(options)}`;
    const data = await fetchService.get(url);
    return data;
  };
}

const postService = new PostService();
export default postService;
