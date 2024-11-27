import "./MovieCard.css"
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function Hero({movies}) {

    const navigate = useNavigate();
    const [search, setSearch] = useState("");

    function details(imdbId) {
        navigate(`/details/${imdbId}`);
    }

    const filteredMovies = movies.filter((movie) =>
        movie.title.toLowerCase().includes(search.toLowerCase())
    );

    return(
        <div className="home-container">
            <div className="search-section">
                <input
                    type="text"
                    placeholder="Search movies..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
                <button className="search-btn">Search</button>
            </div>
    
            <div className="movie-grid">
                {filteredMovies.map((movie) => (
                    <div
                    key={movie._id}
                    className="movie-card"
                    onClick={() => details(movie.imdbId)} >
                        <img src={movie.poster} alt={movie.title} />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Hero