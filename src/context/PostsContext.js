import useDebounce from '@hooks/useDebounce';
import postService from '@services/post.service';
import PropTypes from 'prop-types';
import { createContext, useEffect, useState } from 'react';

// ----------------------------------------------------------------------

const initialState = {
  posts: [],
  loading: false,
  searchText: '',
  filter: '',
  sort: 'asc',
  setPosts: () => {},
  setLoading: () => {},
  setSearchText: () => {},
  setFilter: () => {},
  setSort: () => {},
  count: 0,
  page: 1,
};

const PostsContext = createContext(initialState);

function PostsProvider({ children }) {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);

  const [value, setValue] = useState('');
  const [filter, setFilter] = useState('');
  const [sort, setSort] = useState('asc');
  const [count, setCount] = useState(0);
  const [page, setPage] = useState(1);

  const debounceValue = useDebounce(value, 500);

  const setSearchText = (data) => {
    setValue(data);
    if (data !== '' && data !== ' ') setLoading(true);
    if (data === '' || data === ' ') setLoading(false);
  };

  useEffect(() => {
    const handleSearchPosts = () => {
      setLoading(true);
      postService
        .searchPosts(debounceValue, { page: page, orderBy: filter, order: sort })
        .then((res) => {
          if (res.size === 0) {
            alert('No hay posts relacionados con la busqueda');
          }
          if (res.data) {
            setPosts(res.data);
            setCount(res.pages);
          }
        })
        .catch((err) => console.log('Error: ', err))
        .finally(() => setLoading(false));
    };
    if (debounceValue !== '' && debounceValue !== ' ') {
      handleSearchPosts();
    }
  }, [debounceValue, filter, sort, page]);

  return (
    <PostsContext.Provider
      value={{
        posts,
        loading,
        searchText: value,
        filter,
        sort,
        count,
        page,
        setPosts,
        setLoading,
        setSearchText,
        setFilter,
        setSort,
        setPage,
      }}
    >
      {children}
    </PostsContext.Provider>
  );
}
PostsProvider.propTypes = {
  children: PropTypes.node,
};

export { PostsProvider, PostsContext };
