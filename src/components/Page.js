import Head from 'next/head';

const Page = ({ title, children }) => (
  <>
    <Head>
      <title>{title}</title>
    </Head>
    {children}
  </>
);

export default Page;
