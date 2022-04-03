import Head from 'next/head';
import PropTypes from 'prop-types';
import { Box } from '@imports/mui';

const linkTags = ['canonical'];
const ogTags = ['og:locale', 'og:site_name', 'og:type'];
const noTags = ['title', 'schema', 'article:tag', 'yandex-verification', 'robots'];

const Page = ({ metas, children }) => (
  <>
    <Head>
      <title>{metas.title}</title>

      {Object.keys(metas).map((meta, i) => {
        if (noTags.includes(meta)) return null;
        if (linkTags.includes(meta)) return <link key={`Meta-${i}`} rel={meta} href={metas[meta]} />;
        if (ogTags.includes(meta)) return <meta key={`Meta-${i}`} property={meta} content={metas[meta]} />;
        return <meta key={`Meta-${i}`} name={meta} content={metas[meta]} />;
      })}

      {!Object.keys(metas).includes('description') && <meta name='description' content='detalle de post mejor salud' />}
    </Head>
    <Box p={4}>{children}</Box>
  </>
);
Page.propTypes = {
  metas: PropTypes.object,
  children: PropTypes.node,
};

export default Page;
