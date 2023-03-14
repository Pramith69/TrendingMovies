import { Options } from '../types';

export const getMovies = async (
  type: Options
): Promise<{
  success: boolean;
  data?: { results: [] };
}> => {
  const specificPart = {
    upcoming: 'movie/upcoming',
    trending: 'trending/all/day',
  };

  try {
    const trendingMovies = await fetch(
      `https://api.themoviedb.org/3/${specificPart[type]}?api_key=f5baf8c74c7d5f00a242c165979d0913`
    );
    const jsonTrendingMovies = await trendingMovies.json();
    return { success: true, data: jsonTrendingMovies };
  } catch (error) {
    return { success: false };
  }
};
