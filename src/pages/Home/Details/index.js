import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import { Container } from "./styles"
import { formatDate } from "./utils"

function Details(){

const { id } = useParams()

const [movie, setMovie] = useState ({})
const image_path = 'http://image.tmdb.org/t/p/w185/'
const API_KEY = process.env.REACT_APP_API_KEY

useEffect (() => {
    fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=pt-BR&page=1`)
    .then(response => response.json())
    .then(data => {
        const {title, poster_path, overview, release_date} = data
        const movie = {
            id,
            title,
            sinopse: overview,
            image: `${image_path}${poster_path}`,
            releaseDate: formatDate(release_date)
        }
        setMovie(movie)
})

})

    return (
        <Container>
            <div className="movie">
                <img src={movie.image} alt={movie.sinopse}/>
                <div className="details">
                    <h1>{movie.title}</h1>
                    <h2>Sinopse</h2>
                    <span> {movie.sinopse}</span>
                    <span className="release-date">Data de lançamento: {movie.releaseDate}</span>
                    <Link to="/"><button>Voltar para a página principal</button></Link>
                </div>
            </div>

        </Container>
)}

export default Details