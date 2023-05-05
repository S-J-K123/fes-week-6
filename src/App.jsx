import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './App.css';
import { faClapperboard } from "@fortawesome/free-solid-svg-icons";


function App() {
  return (
    <div>
       <section>
                <nav>
            <a href="">
              <div className="logo-img">
              <FontAwesomeIcon className="icon" icon={faClapperboard} />
                <h2 className="logo">movies</h2>
              </div>
            </a>
                   <ul>
                    <li className="lists"><a href=""><span className="home">Home</span> </a></li>
                    <li className="lists"><a href="">Browse Movies</a></li>
                    <li className="lists"><a href="">Favourites</a></li>
                   </ul>
                </nav>
            </section>
    </div>
  );
}

export default App;
