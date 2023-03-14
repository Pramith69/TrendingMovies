import React, { useState, useEffect } from 'react';
import { Movie } from '../../types';
import Card from '../Card/Card';
import classes from './Upcoming.module.css';

type Props = {
  movies: Movie[];
};

const UpcomingMovies: React.FC<Props> = (props) => {
  const { movies } = props;
  const [movieIndex, setMovieIndex] = useState(0);

  // Define a state variable to keep track of the current slide index
  const [slideIndex, setSlideIndex] = useState(0);

  // Use useEffect to automatically advance the slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setSlideIndex((prev) => (prev + 1) % movies.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [movies]);

  // Define a function to handle clicking on a movie card
  const handleMovieClick = (index: number) => {
    setMovieIndex(index);
    setSlideIndex(index);
  };

  return (
    <div className={classes.main}>
      <div className={classes.img}>
        <img
          src={`https://image.tmdb.org/t/p/w500${movies[slideIndex].backdrop_path}`}
          width={500}
          height={500}
        />
      </div>
      <div className={classes.movies}>
        {movies.length > 0 &&
          movies.map((movie, index) => (
            <div
              className={classes.card}
              key={index}
              onClick={() => handleMovieClick(index)}
            >
              <Card imageUrl={movie.backdrop_path} />
            </div>
          ))}
      </div>
    </div>
  );
};

export default UpcomingMovies;
