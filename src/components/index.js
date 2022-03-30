import dynamic from 'next/dynamic';

const Page = dynamic(() => import('./Page'));
const Searchbar = dynamic(() => import('./Searchbar'));

export { Page, Searchbar };
