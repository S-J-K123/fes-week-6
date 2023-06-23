import axios from "axios";
import { useState, useEffect } from "react";
import { Link, Navigate, useNavigate, useParams } from "react-router-dom";
import './movie-details.css'

const MovieDetails = () => {
  const [movie, setMovie] = useState({});
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate()

  useEffect(() => {
    async function fetchMovieDetails() {
      try {
        setLoading(true);
        const { data } = await axios.get(
          `https://www.omdbapi.com/?i=${id}&apikey=8e3ddd4c`
        );
        console.log(data);
        setMovie(data);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    }

    fetchMovieDetails();
  }, [id]);

/* Change classnames to not change browse movies css */

  return (
    <div>
   <Link to={`/browse?search=${movie.Title}`}>Movies</Link>

      {loading ? (
        <div>Loading...</div>
      ) : (
        <div className="user-card">
          <div className="user-card__container">
            <img className="images" src={movie.Poster} alt={movie.Title} />
            <p className="title">
              <b>{movie.Title}</b>
            </p>
            <p>
              Type: <b>{movie.Type}</b>
            </p>
            <p>
              Overview: <b>{movie.Plot}</b>
            </p>
            <p>
              Year: <b>{movie.Year}</b>
            </p>
            <p>
              Rated: <b>{movie.Rated}</b>
            </p>
            <p>
              Released: <b>{movie.Released}</b>
            </p>
            <p>
              Metascore: <b>{movie.Metascore}</b>
            </p>
            <p>
              Box Office: <b>{movie.BoxOffice}</b>
            </p>
            <p>
              Genre: <b>{movie.Genre}</b>
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default MovieDetails;
