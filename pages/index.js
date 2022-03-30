function Page() {
  return null;
}

export default Page;

export const getServerSideProps = () => {
  return {
    redirect: {
      destination: '/posts',
      permanent: false,
    },
  };
};
