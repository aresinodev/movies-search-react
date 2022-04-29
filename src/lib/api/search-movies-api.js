import { API_HOST } from '../../constants/api';

const SEARCH_MOVIES_PATH = '/search/movie';
const TRENDING_MOVIES_PATH = '/trending/movie/day';

export const searchMoviesApi = async (query, page) => {
  const endpoint = query
    ? `${API_HOST}${SEARCH_MOVIES_PATH}?api_key=${
        import.meta.env.API_KEY
      }&query=${query}&page=${page}`
    : `${API_HOST}${TRENDING_MOVIES_PATH}?api_key=${
        import.meta.env.API_KEY
      }&page=${page}`;

  try {
    const response = await fetch(endpoint);

    if (response.ok) {
      const data = await response.json();

      return {
        movies: data.results,
        totalPages: data.total_pages
      };
    }

    return { movies: null, totalPages: null };
  } catch (error) {
    return { movies: null, totalPages: null };
  }
};
