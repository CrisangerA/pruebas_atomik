import Link from 'next/link';
import PropTypes from 'prop-types';
import { Card, CardContent, CardMedia, Grid, Typography } from '@imports/mui';
import styles from './post.module.css';

const LatestPostItem = ({ title, categories, imageUrl, link, published }) => (
  <Grid item xs={12} md={6} lg={4}>
    <Card>
      <CardMedia component='img' height='240' image={imageUrl} alt={title} className={styles.image} />
      <CardContent>
        <Link href={link} passHref>
          <Typography gutterBottom variant='h5' component='h1'>
            {title}
          </Typography>
        </Link>
        <Typography variant='body2' color='text.secondary'>
          Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents
          except Antarctica
        </Typography>

        {categories.map((category) => (
          <Typography key={category.id} variant='small'>
            {category.name}
          </Typography>
        ))}

        <Typography variant='body2' color='text.secondary'>
          {' Publicado: '}
          {published}
        </Typography>
      </CardContent>
    </Card>
  </Grid>
);
LatestPostItem.propTypes = {
  title: PropTypes.string.isRequired,
  categories: PropTypes.array,
  imageUrl: PropTypes.string,
  link: PropTypes.string,
};

export default LatestPostItem;
