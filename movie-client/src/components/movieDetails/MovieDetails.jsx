import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "../../api/axiosConfig";
import "./MovieDetails.css";

function MovieDetails({getMovieData, movie, reviews, setReviews}) {
  const { imdbId } = useParams();
  const navigate = useNavigate();
  const [newReview, setNewReview] = useState("");

  useEffect(() => {
    getMovieData(imdbId);
  },[imdbId]);

  const handleReviewSubmit = () => {
    if (newReview.trim()) {
      const reviewData = { reviewBody: newReview, imdbId: imdbId };
      axios.post(`/api/v1/reviews`, reviewData)
        .then(response => {
          setReviews([...reviews, response.data]);
          setNewReview("");
        })
        .catch(error => console.error("Error submitting review:", error));
    }
  };

  if (!movie) {
      return <div>Loading...</div>;
  }

  return (
    <div className="movie-details">
    
    <div className="left-section">
      <img
        src={movie.poster}
        alt={`${movie.title} Poster`}
        className="movie-poster"
      />
      <div className="trailer-link">
        <button onClick={() => navigate(`/trailer/${movie.trailerLink.substring(movie.trailerLink.length - 11)}`)}>
          🎥 Watch Trailer
        </button>
      </div>
    </div>

    <div className="right-section">
      <h1>{movie.title}</h1>
      <p>{movie.releaseDate}</p>
      <p className="movie-overview">{movie.overview}</p>
      <div className="movie-details-grid">
        <div>
          <b>Language:</b> EN
        </div>
        <div>
          <b>Runtime:</b> {movie.runtime} min
        </div>
        <div>
          <b>Genres:</b> {movie.genres.join(", ")}
        </div>
        <div>
          <b>Rating:</b> {movie.rating}/10
        </div>
        <div>
          <b>Budget:</b> {movie.revenue ? `${movie.budget.toLocaleString()}` : "Unknown"}
        </div>
        <div>
          <b>Revenue:</b>{" "}
          {movie.revenue ? `${movie.revenue.toLocaleString()}` : "Unknown"}
        </div>
        <div>
          <b>Popularity:</b> {movie.popularity}
        </div>
      </div>

      <h3>Primary Cast</h3>
      <div className="cast">
        {movie.cast.map((actor, index) => (
          <div className="cast-member" key={index}>
            <p>{actor}</p>
          </div>
        ))}
      </div>

      <h3>Reviews</h3>

      <div className="add-review">
        <textarea
          placeholder="Write your review..."
          value={newReview}
          onChange={(e) => setNewReview(e.target.value)}
        ></textarea>
        <button onClick={handleReviewSubmit}>Add Review</button>
      </div>
      
      <div className="reviews">
        {reviews.map((review, index) => (
          <div className="review" key={index}>
            <p>{review.body}</p>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
}

export default MovieDetails;