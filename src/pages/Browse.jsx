import {
  faClapperboard,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import Switch from "../components/Switch";
import Modal from "../components/Modal";

const Browse = () => {
  const [showModal, setShowModal] = useState(false);



  
  return (
    <div>
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
          <form action="" className="bg-orange">
            <input
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

      <section className="btm-half">
        <h2 className="search-results">Search results</h2>
        <h2 className="filter">Filter by year</h2>
       <button className="switch-btn"   onClick={()=>setShowModal(!showModal)}> <Switch/> </button> 
       
      </section>

      <div className="row">
        <div className="user-list">
          <div className="user">
            <div className="user-card">
              <div className="user-card__container">
                <h3>
                  Poster: <b>Poster</b>{" "}
                </h3>
                <p>
                  Title: <b>Title</b>{" "}
                </p>
                <p>
                  Type: <b>Type</b>
                </p>
                <p>
                  Year: <b>Year</b>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {showModal ? <Modal /> : null}
    
    </div>
  );
};

export default Browse;
