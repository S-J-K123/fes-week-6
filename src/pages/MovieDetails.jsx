
import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";


const MovieDetails = () => {
    const [getMovie, setGetMovie] = useState({});
    const { imdbID } = useParams();
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      async function fetchMovieDetails() {
        try {
          setLoading(true)
          const { data } = await axios.get(`https://www.omdbapi.com/?i=${imdbID}&apikey=8e3ddd4c`);
          if (data.Response === "True") {
            setGetMovie(data.Search);
            setLoading(false);
            console.log(data);
          } else {
            console.log("Error: ", data.Error);
          }
        setLoading(false);
        } catch (error) {
          console.log(error);
        }
      }
      console.log(imdbID)
  
      fetchMovieDetails();
    }, [imdbID]);
  
    return (
      <div>
        {loading ? (
          <div>Loading...</div>
        ) : (
          <div  className="user-card">
            <div className="user-card__container">
              <img className="images" src={getMovie.Poster} alt={getMovie.Title} />
              <p>
                Title: <b>{getMovie.Title}</b>
              </p>
              <p>
                Type: <b>{getMovie.Type}</b>
              </p>
              <p>
                Year: <b>{getMovie.Year}</b>
              </p>
            </div>
          </div>
        )}
      </div>
    );
  };
  
  export default MovieDetails;