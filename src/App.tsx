import { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header/Header';
import TrendingMovies from './components/Trending/Trending';
import { Movie, Options } from './types';
import Details from './components/DetailsPage/Details';
import { useSelector, useDispatch, Provider } from 'react-redux';
import { movies } from './store';
import { getMovies } from './http/http';
import UpcomingMovies from './components/Upcoming/Upcoming';

function App() {
  const [count, setCount] = useState(0);
  const [option, setOption] = useState<Options>(Options.trending);
  const [isDetailsPage, setDetailsPage] = useState<boolean>(false);
  const [selectedMovie, setSelectedMovie] = useState<Movie | undefined>(
    undefined
  );

  const trendingMv = useSelector((state: any) => state.movies.trendingMovies);
  const upcomingMv = useSelector((state: any) => state.movies.upcomingMovies);
  const dispatch = useDispatch();

  useEffect(() => {
    getTrendingMovieHandler();
    getUpcomingMoviesHandler();
    setDetailsPage(false);
  }, []);

  useEffect(() => {
    setDetailsPage(false);
  }, [option]);

  const getTrendingMovieHandler = async () => {
    const { success, data } = await getMovies(Options.trending);
    if (success && data?.results) {
      const { results } = data;
      dispatch(movies.addTrendingMovies({ trendingMovies: [...results] }));
    }
  };

  const getUpcomingMoviesHandler = async () => {
    const { success, data } = await getMovies(Options.upcoming);
    if (success && data?.results) {
      const { results } = data;
      dispatch(movies.addUpcomingMovies({ upcomingMovies: [...results] }));
    }
  };

  const selectedMovieHandler = (index: number) => {
    setDetailsPage(true);

    const movies = [...trendingMv];
    const movie = movies[index];
    setSelectedMovie(movie);
  };

  const setOptionHandler = (option: Options) => {
    setDetailsPage(false);
    setSelectedMovie(undefined);
    setOption(option);
  };

  return (
    <div className='App'>
      <Header option={option} setOption={setOptionHandler} />

      {/* Trending Movies */}
      {!isDetailsPage && option === Options.trending && (
        <TrendingMovies
          selectedMovieHandler={selectedMovieHandler}
          movies={trendingMv}
        />
      )}

      {/* Upcoming Movies */}
      {!isDetailsPage && option === Options.upcoming && (
        <UpcomingMovies movies={upcomingMv} />
      )}

      {/* Movie Detils */}
      {isDetailsPage && selectedMovie && <Details movie={selectedMovie} />}
    </div>
  );
}

export default App;
