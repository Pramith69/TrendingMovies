import React from 'react';
import { Movie } from '../../types';
import Card from '../Card/Card';
import classes from './Trending.module.css';

type Props = {
  movies: Movie[];
  selectedMovieHandler: Function;
};

const TrendingMovies: React.FC<Props> = (props) => {
  const { movies, selectedMovieHandler } = props;

  return (
    <div className={classes.main}>
      <h1>Trending Movies</h1>
      <div className={classes.movies}>
        {movies.length > 0 &&
          movies.map((movie, index) => (
            <div key={index} onClick={() => selectedMovieHandler(index)}>
              <Card
                title={movie.title ? movie.title : movie.name}
                imageUrl={movie.backdrop_path}
              />
            </div>
          ))}
      </div>
    </div>
  );
};

export default TrendingMovies;
