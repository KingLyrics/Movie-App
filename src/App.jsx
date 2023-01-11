import { useEffect, useState } from "react";
import "./App.css";
import SearchIcon from "./search.svg";
import MovieCard from "./MovieCard";

function App() {
  // 198897ed

  const [movies, setmovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('')

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    setmovies(data.Search);
  };

  useEffect(() => {
    searchMovies("Batman");
  }, []);

  const API_URL = "http://www.omdbapi.com?apikey=198897ed";

  const movie1 = {
    Title: "Green Lantern: The Animated Series",
    Year: "2011–2013",
    imdbID: "tt1724587",
    Type: "series",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTk5NzA0ODA5Ml5BMl5BanBnXkFtZTcwNzU2MTg0Nw@@._V1_SX300.jpg",
  };

  return (
    <div className="app">
      <h1>MovieLand</h1>
      <div className="search">
        <input
          type="text"
          placeholder="Search for movies..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <img src={SearchIcon} alt="search" onClick={() => searchMovies(searchTerm)} />
      </div>

      {movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie) => (
            <MovieCard movie={movie} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No movies found</h2>
        </div>
      )}
    </div>
  );
}

export default App;
