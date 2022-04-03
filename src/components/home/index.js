import dynamic from 'next/dynamic';

const LatestPost = dynamic(() => import('./LatestPost'));
const LatestPostItem = dynamic(() => import('./LatestPostItem'));

export { LatestPost, LatestPostItem };
