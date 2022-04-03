import { Page, Searchbar } from '@components/index';
import { LatestPost } from '@components/home';
import { fetchService } from '@services/index';
import usePosts from '@hooks/usePosts';
import API_ROUTES from 'src/shared/api.routes';
import { Typography, Box, Pagination, CircularProgress } from '@imports/mui';

const Home = ({ data, totalPages }) => {
  const { posts, loading, page, setPage, count } = usePosts();

  return (
    <Page metas={data.metas}>
      <Box mb={2}>
        <Typography variant='h3' component='h1'>
          Mejor con salud
        </Typography>
      </Box>
      <Searchbar />
      {loading && (
        <Box style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }} mb={2}>
          <CircularProgress sx={{ marginRight: 1 }} />
          <p>Cargando...</p>
        </Box>
      )}

      {posts.length > 0 ? <LatestPost posts={posts} /> : <LatestPost posts={data.latest_posts} />}

      <Box style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} mt={3}>
        <Pagination component='div' count={count || totalPages} page={page} onChange={(e, value) => setPage(value)} />
      </Box>
    </Page>
  );
};

export const getStaticProps = async () => {
  const data = await fetchService.get(API_ROUTES.home);
  const posts = await fetchService.get(API_ROUTES.posts);
  return {
    props: { data, totalPages: posts.pages },
  };
};

export default Home;
