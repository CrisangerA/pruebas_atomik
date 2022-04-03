import PropTypes from 'prop-types';
import { Grid } from '@imports/mui';
import { LatestPostItem } from '.';

const LatestPost = ({ posts }) => {
  if (posts.length === 0) return <p>Not found posts</p>;
  const noImage =
    'https://imgs.search.brave.com/tIOG_BtQylGDz0jCVaei_BZzTfg1MKqRDzLKjUhK0OI/rs:fit:760:460:1/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzAxLzdj/LzQ0LzAxN2M0NGM5/N2EzOGMxYzQ5OTk2/ODFlMjhjMzkyNzFk/LnBuZw';
  return (
    <Grid container spacing={4}>
      {posts.map((post) => (
        <LatestPostItem
          key={post.id}
          title={post.title}
          categories={post.categories}
          imageUrl={post.featured_media.large || noImage}
          link={`/posts/${post.id}`}
        />
      ))}
    </Grid>
  );
};
LatestPost.propTypes = {
  posts: PropTypes.array,
};

export default LatestPost;
