import { faClapperboard, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Browse = () => {
  return (
    <div>
        <div className="overlay">
 <section>
        <nav>
          <a href="">
            <div className="logo-img-browse">
              <FontAwesomeIcon className="icon-browse" icon={faClapperboard} />
              <h2 className="logo-browse">movies</h2>
            </div>
          </a>
          <ul>
            <li className="lists">
              <a href="/home"> Home </a>
            </li>
            <li className="lists">
              <a href="browse">
                Browse Movies
              </a>
            </li>
            <li className="lists">
              <a href="favourites">Favourites</a>
            </li>
          </ul>
        </nav>

        <h1 className="bm">Browse Our Movies</h1>

        <div className="search-container">
          <form action="">
            <input
              type="text"
              placeholder="Search thousands of movies..."
              name="Search"
            />
            <button className="button">
              <FontAwesomeIcon className="magnify" icon={faMagnifyingGlass} />
            </button>
          </form>
        </div>
      </section>
        </div>
     

      <section className="btm-half">
          <h2 className="search-results">
            Search results
          </h2>
          <h2 className="filter">
            Filter by year
          </h2>
      </section>
    </div>
  );
};

export default Browse;
