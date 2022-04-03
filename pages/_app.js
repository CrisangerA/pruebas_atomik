import { PostsProvider } from 'src/context/PostsContext';
import '../styles/globals.css';

const MyApp = ({ Component, pageProps }) => (
  <PostsProvider>
    <Component {...pageProps} />
  </PostsProvider>
);
export default MyApp;
