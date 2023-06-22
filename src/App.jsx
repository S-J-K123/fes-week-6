
import './App.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from "./pages/Home";
import Browse from "./pages/Browse";
import Favourites from './pages/Favourites';
import MovieDetails from './pages/MovieDetails';



function App() {
  return (
    <div>
  <Router>
    <Routes>
     <Route path="/" element={<Home/>} />
     <Route path ="/browse" element={<Browse/>} />
     <Route path="/favourites" element={<Favourites/>} />
     <Route path="/movie/:id" element={<MovieDetails/>} />
    </Routes>
  </Router>

    </div>
  );
}

export default App;
