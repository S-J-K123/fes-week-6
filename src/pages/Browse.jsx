import {
  faClapperboard,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Switch from "../components/Switch";
import Modal from "../components/Modal";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Skeleton from "../UI/Skeleton";
import Pagination from "../components/Pagination";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

const Browse = () => {
  const [showModal, setShowModal] = useState(false);
  const [movies, setMovies] = useState([]);
  const [searchName, setSearchName] = useState("");
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(8);
  const [selectedYear, setSelectedYear] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const searchQuery = searchParams.get("search");

  function onSearch(event) {
    event.preventDefault();
    setLoading(false);
    fetchMovies(searchName);
    console.log(searchName);
  }

  console.log(selectedYear);

  async function fetchMovies(movieName) {
    try {
      setLoading(true);

      if (!movieName) {
        setMovies([]);
        return;
      }

      const { data } = await axios.get(
        `https://www.omdbapi.com/?i=tt3896198&apikey=8e3ddd4c&s=${movieName}`
      );

      setMovies(data.Search);
      setTimeout(() => {
        setLoading(false);
      }, 1000);
      console.log(data);
      // Store movies in local storage
      localStorage.setItem("movies", JSON.stringify(data.Search));
    } catch (error) {
      alert(error);
    }
  }

  useEffect(() => {
    const storedMovies = localStorage.getItem("movies");

    if (storedMovies) {
      setMovies(JSON.parse(storedMovies));
      setLoading(false);
    } else {
      fetchMovies(searchQuery);
    }
  }, []);

  //  fetching filtered movies
  async function filterMovies(movieName) {
    try {
      setLoading(true);

      if (!movieName) {
        setLoading(false);
        return;
      }

      const { data } = await axios.get(
        `https://www.omdbapi.com/?i=tt3896198&apikey=8e3ddd4c&s=${movieName}&y=${selectedYear}`
      );

      setMovies(data.Search);
      setTimeout(() => {
        setLoading(false);
      }, 1000);
      console.log(data);
      // Store filtered movies in local storage
      localStorage.setItem("movies", JSON.stringify(data.Search));
    } catch (error) {
      alert(error);
    }
  }

  // Get current posts
  let currentMovies

  if (movies && movies.length > 0) {
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    currentMovies = movies.slice(indexOfFirstPost, indexOfLastPost);
  }

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

 


  // navigation function
  const navigateToMovieDetails = (id) => {
    localStorage.setItem('searchTerm', searchName);
    navigate(`/movie/${id}`);
  };


// clearing the stored searchTerm





  return (
    <div>
      <div className="browse-background-color">
        <section className="bg-orange">
          <nav className="bg-orange">
            <a href="/">
              <div className="logo-img-browse bg-orange ">
                <FontAwesomeIcon
                  className="icon-browse bg-orange"
                  icon={faClapperboard}
                />
                <h2 className="logo-browse bg-orange">movies</h2>
              </div>
            </a>
            <ul>
              <li className="lists-browse bg-orange">
                <a className="bg-orange-list" href="/">
                  {" "}
                  Home{" "}
                </a>
              </li>
              <li className="lists-browse bg-orange">
                <a className="bg-orange-list" href="browse">
                  Browse Movies
                </a>
              </li>
              <li className="lists-browse bg-orange">
                <a className="bg-orange-list" href="favourites">
                  Favourites
                </a>
              </li>
            </ul>
          </nav>

          <h1 className="bm bg-orange">Browse Our Movies</h1>

          <div className="search-container-browse bg-orange">
            <form onSubmit={onSearch} className="bg-orange">
              <input
                value={searchName}
                onChange={(event) => setSearchName(event.target.value)}
                className="browse-input"
                type="text"
                placeholder="Search thousands of movies..."
                name="Search"
              />
              <button className="button-browse">
                <FontAwesomeIcon
                  className="magnify-browse"
                  icon={faMagnifyingGlass}
                />
              </button>
            </form>
          </div>
        </section>
      </div>

      {/* changed from swich-btn to switch-input */}

      <section className="btm-half">
        <h2 className="search-results">Search results</h2>
        <h2 className="filter">Filter by year</h2>
        <button className="switch-btn" onClick={() => setShowModal(!showModal)}>
          {" "}
          <Switch />{" "}
        </button>
      </section>

      {showModal ? (
        <Modal
          setSelectedYear={setSelectedYear}
          selectedYear={selectedYear}
          filterMovies={filterMovies}
        />
      ) : null}

      <div className="movies">
        {loading ? (
          <div>Loading...</div>
        ) : movies && movies.length > 0 ? (
          currentMovies.map((movie) => (
            <div key={movie.imdbID}>
              <div className="user-list">
                <div
                  onClick={() => navigateToMovieDetails(movie.imdbID)}
                  className="user"
                >
                  <div className="user-card">
                    <div className="user-card__container">
                      <img className="images" src={movie.Poster} alt="" />
                      <p>
                        Title: <b>{movie.Title}</b>
                      </p>
                      <p>
                        Type: <b>{movie.Type}</b>
                      </p>
                      <p>
                        Year: <b>{movie.Year}</b>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div>No search results found.</div>
        )}

        <Pagination
          postsPerPage={postsPerPage}
          totalPosts={movies ? movies.length : 0}
          paginate={paginate}
          currentPage={currentPage}
        />
      </div>
    </div>
  );
};

export default Browse;