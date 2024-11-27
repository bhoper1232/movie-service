import Header from "../header/Header.jsx";
import MovieCard from "../movieCard/MovieCard.jsx"

function Home(props) {

    return(
        <>
        <Header/>
        <MovieCard movies={props.movies} />
        </>
    );
}

export default Home