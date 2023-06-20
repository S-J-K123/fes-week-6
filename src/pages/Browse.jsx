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

const Browse = () => {
  const [showModal, setShowModal] = useState(false);
  const [users, setUsers] = useState([]);
  const [searchName, setSearchName] = useState("");
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1)
  const [postsPerPage, setPostsPerPage] = useState(8)

  function onSearch(event) {
    event.preventDefault();
    setLoading(false)
    fetchUsers(searchName);
    console.log(searchName);
  }

  async function fetchUsers(movieName) {
    setLoading(true)
  
    if (!movieName) {
      setUsers([]);
      return;
    }

    const { data } = await axios.get(
      `https://www.omdbapi.com/?i=tt3896198&apikey=8e3ddd4c&s=${movieName}`
    );

    setUsers(data.Search);
    setTimeout(() => {
      setLoading(false);
    }, 1500);
    console.log(data);
  }

  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);
    const movieName = searchParams.get("search");
    fetchUsers(movieName);
  }, []);





// Get current posts
const indexOfLastPost =  currentPage * postsPerPage
const indexOfFirstPost = indexOfLastPost - postsPerPage
const currentPosts = users.slice(indexOfFirstPost, indexOfLastPost)


// Change page
const paginate = (pageNumber) => setCurrentPage(pageNumber)




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

      {showModal ? <Modal /> : null}
<div className="movies">
{currentPosts.map((user, id) => {
        return (
  
          <div key={id}>
            <div className="user-list">
             
                  <div className="user">
                    {
                      loading
                      ? (
                        <Skeleton width={'300px'} height={'300px'}/>
                      ) :
                      (
                        <div className="user-card">
                        <div className="user-card__container">
                          <img className="images" src={user.Poster} alt="" />{" "}
                          <p>
                            Title: <b>{user.Title}</b>{" "}
                          </p>
                          <p>
                            Type: <b>{user.Type}</b>
                          </p>
                          <p>
                            Year: <b>{user.Year}</b>
                          </p>
                        </div>
                      </div>
                      )
                    }
                
                </div>
             
            </div>
          </div>
        );
      })}
</div>
     
      <Pagination
  postsPerPage={postsPerPage}
  totalPosts={users.length}
  paginate={paginate}
  currentPage={currentPage}
/>
    </div>
  );
};

export default Browse;