import { Movie } from '../../types';
import classes from './Details.module.css';

type Props = {
  movie: Movie;
};

const Details: React.FC<Props> = (props) => {
  const { movie } = props;

  return (
    <div className={classes.main}>
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
        width='100%'
        height={500}
      />
      <div className={classes.sub}>
        <h1 className={classes.h2}>{movie.title ? movie.title : movie.name}</h1>
        <h3>{movie.release_date}</h3>
        <h3 className={classes.overview}> {movie.overview}</h3>
        <h4 className={classes.vote}>{movie.vote_average}</h4>
      </div>
    </div>
  );
};

export default Details;
