import api from "./api/axiosConfig"
import "./App.css";
import {useState, useEffect} from "react"
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./components/home/Home.jsx";
import Trailer from "./components/trailer/Trailer.jsx";
import MovieDetails from "./components/movieDetails/MovieDetails.jsx";
import Login from "./components/security/Login.jsx";

function App() {

  const [movies, setMovies] = useState([]);
  const [movie, setMovie] = useState(null);
  const [reviews, setReviews] = useState();
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsAuthenticated(true);
      getMovies()
    }
  }, [])

  const getMovies = async () => {
    try {
      const token = localStorage.getItem("token")
      if (!token) return;

      const response = await api.get("/api/v1/movies", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        }
      });

      setMovies(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  const getMovieData = async (imdbId) => {
    try {
      const token = localStorage.getItem("token")
      if (!token) return;

      const response = await api.get(`api/v1/movies/${imdbId}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        }
      });

      const singleMovie = response.data;

      setMovie(singleMovie);

      setReviews(singleMovie.reviewIds);

    } catch (error) {
      console.log(error);
    }
  }

  const handleLoginSuccess = () => {
    setIsAuthenticated(true);
    getMovies()
  }

  // useEffect(() => {
  //   getMovies();
  // }, []);

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
        }, {
          path: "/login",
          element: <Login handleLoginSuccess={handleLoginSuccess} />
        },
      ],
    },
  ], {future: {v7_relativeSplatPath: true, v7_fetcherPersist: true, v7_normalizeFormMethod: true, v7_partialHydration: true,
    v7_skipActionErrorRevalidation: true}});

  return (
    <>
      <div className="App">
        <RouterProvider router={router} future={{v7_startTransition: true}} />
      </div>
    </>
  )
}

export default App
