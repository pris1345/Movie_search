import MovieCard from "./components/MovieCard";
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";
import Navbar from "./components/NavBar";
import { MovieProvider } from "./contexts/MovieContext";
import { Routes, Route } from "react-router-dom";
function App() {
  const movienumber = 1;

  return (
    <div>
      <MovieProvider>
        <Navbar />
        <main className="">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Favorites" element={<Favorites />} />
          </Routes>
        </main>
      </MovieProvider>
    </div>
  );
}

export default App;
