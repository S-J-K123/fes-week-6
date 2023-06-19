import {
  faClapperboard,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { navigate, useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

const Home = () => {
  let navigate = useNavigate();
  const [searchName, setSearchName] = useState("");
  const [loading, setLoading] = useState(false)

  function onSearch() {
    setLoading(true)
    navigate(`/browse?search=${searchName}`);
    console.log(searchName);
    
  }

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div>
      <section className="home-page">
        <nav>
          <a href="/">
            <div className="logo-img">
              <FontAwesomeIcon className="icon" icon={faClapperboard} />
              <h2 className="logo">movies</h2>
            </div>
          </a>
          <ul>
            <li className="lists">
              <a href="/">
                <span className="org-li">Home</span>{" "}
              </a>
            </li>
            <li className="lists">
              <a href="browse">Browse Movies</a>
            </li>
            <li className="lists">
              <a href="favourites">Favourites</a>
            </li>
          </ul>
        </nav>

        <h1
          data-aos="fade-up"
          data-aos-delay="50"
          data-aos-duration="1000"
          className="big-text"
        >
          Britain's most awarded <br />
          free movie platform
        </h1>

        <h2
          data-aos="fade-up"
          data-aos-delay="50"
          data-aos-duration="1500"
          className="fav"
        >
          find your Favourite <span className="shows">movies and shows</span>
        </h2>

        <div className="search-container">
          <form action="" onSubmit={onSearch}>
            <input
              data-aos="fade-up"
              data-aos-delay="50"
              data-aos-duration="2000"
              className="home-input"
              onChange={(event) => setSearchName(event.target.value)}
              value={searchName}
              type="text"
              placeholder="Search thousands of movies..."
              name="Search"
            />
            <button
              data-aos="fade-up"
              data-aos-delay="50"
              data-aos-duration="2500"
              className="button"
            >
              <FontAwesomeIcon className="magnify" icon={faMagnifyingGlass} />
            </button>
          </form>
        </div>

        <div
          data-aos="fade-up"
          data-aos-delay="50"
          data-aos-duration="2500"
          className="footer-img"
        >
          <img
            className="btm-img"
            src="https://movies-au-react.vercel.app/static/media/undraw_explore_re_8l4v.0e6b1c627148e0f0c295c8c3dbfde077.svg"
            alt=""
          />
        </div>
      </section>
    </div>
  );
};

export default Home;
