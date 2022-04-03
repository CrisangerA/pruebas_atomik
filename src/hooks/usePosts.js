import { useContext } from 'react';
import { PostsContext } from '../context/PostsContext';

// ----------------------------------------------------------------------

const usePosts = () => useContext(PostsContext);

export default usePosts;
