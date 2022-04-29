import MovieList from '../components/MovieList';
import Pagination from '../components/Pagination';

const HomePage = () => {
  return <div className="container mx-auto">
    <p>Buscador</p>

    <MovieList />

    <Pagination />
  </div>
};

export default HomePage;
