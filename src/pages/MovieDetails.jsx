import React, { useEffect, useState } from 'react';
import axios from 'axios';




const MovieDetails = () => {
const [getMovie, setGetMovie] = useState([])

useEffect(() => {
async function fetchMovieDetails() {
    const { data } = await axios.get("https://www.omdbapi.com/?i=tt3896198&apikey=8e3ddd4c&s=fast")
    setGetMovie(data.Search)
    console.log(data)
}
fetchMovieDetails()
}, [])

    return (
        <div>
            {
                getMovie && getMovie.map((item) => (
                     <div key={item.imdbID} className="user-card">
                      <div className="user-card__container">
                        <img className="images" src={item.Poster}/>
                        <p>
                          Title: <b>{item.Title}</b>
                        </p>
                        <p>
                          Type: <b>{item.Type}e</b>
                        </p>
                        <p>
                          Year: <b>{item.year}</b>
                        </p>
                      </div>
                    </div>
                ))
            }
                 
        </div>
    );
}

export default MovieDetails;
