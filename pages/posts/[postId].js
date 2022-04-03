import { LatestPostItem } from '@components/home';
import { Page } from 'src/components';
import fetchService from 'src/services/fetch.service';
import API_ROUTES from 'src/shared/api.routes';

const PostDetail = ({ data }) => (
  <Page metas={data.metas}>
    <LatestPostItem
      key={data.id}
      title={data.title}
      categories={data.categories}
      imageUrl={data.featured_media.medium}
      link={`/posts/${data.id}`}
      published={new Date(data.published).toLocaleString()}
    />
  </Page>
);

export const getServerSideProps = async (context) => {
  const { postId } = context.params;
  const data = await fetchService.get(`${API_ROUTES.posts}/${postId}`);
  return {
    props: { data },
  };
};

export default PostDetail;
