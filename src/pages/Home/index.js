import { Container, MovieList, Movie } from "./style";
import { useState, useEffect} from "react";
import { Link } from "react-router-dom";

function Home() {

    const [movies, setMovies] = useState([])
    const image_path = 'http://image.tmdb.org/t/p/w185/'
    const API_KEY = process.env.REACT_APP_API_KEY

    useEffect(() => {

        fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}&language=pt-BR&page=1`)
         .then(response => response.json())
         .then(data => setMovies(data.results))

    })

    return (
        <Container>
        <h1>Catálogo de Filmes</h1>
        <h2>Lançamentos</h2>
        <MovieList>
                 {movies.map(movie => {
            return (
                <Movie key={movie.id}>

                <Link to={`/details/${movie.id}`}><img src={`${image_path}${movie.poster_path}`} alt={movie.title}/></Link>

                <span>{movie.title}</span>
                </Movie>
            )
        })}
        </MovieList>
        </Container>
    )
}

export default Home;