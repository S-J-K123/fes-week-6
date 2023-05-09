import { faClapperboard } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Favourites = () => {
    return (
        <div>
                  <nav>
            <a href="/">
              <div className="logo-img">
              <FontAwesomeIcon className="icon" icon={faClapperboard} />
                <h2 className="logo">movies</h2>
              </div>
            </a>
                   <ul>
                    <li className="lists"><a href="/"><span className="org-li">Home</span> </a></li>
                    <li className="lists"><a href="browse">Browse Movies</a></li>
                    <li className="lists"><a href="favourites">Favourites</a></li>
                   </ul>
                </nav>

                <h2 className='fav-title'>
                    Favourites
                </h2>
        </div>
    );
}

export default Favourites;
