import api from "./api/axiosConfig"
import "./App.css";
import React, {useState, useEffect} from "react"
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./components/home/Home.jsx";
import Trailer from "./components/trailer/Trailer.jsx";
import MovieDetails from "./components/movieDetails/MovieDetails.jsx";

function App() {

  const [movies, setMovies] = useState([]);
  const [movie, setMovie] = useState(null);
  const [reviews, setReviews] = useState();

  const getMovies = async () => {
    try {
      const response = await api.get("/api/v1/movies");

      setMovies(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  const getMovieData = async (imdbId) => {
    try {
      
      const response = await api.get(`api/v1/movies/${imdbId}`);

      const singleMovie = response.data;

      setMovie(singleMovie);

      setReviews(singleMovie.reviewIds);

    } catch (error) {
      
    }
  }

  useEffect(() => {
    getMovies();
  }, []);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home movies={movies} />,
        },
        {
          path: "/trailer/:ytKey",
          element: <Trailer />
        },
        {
          path: "/details/:imdbId",
          element: <MovieDetails getMovieData={getMovieData} movie={movie} reviews={reviews} setReviews={setReviews} />
        }
      ],
    },
  ]);

  return (
    <>
      <div className="App">
        <RouterProvider router={router} />
      </div>
    </>
  )
}

export default App
