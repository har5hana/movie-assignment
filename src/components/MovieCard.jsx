import { Link } from 'react-router-dom'

function MovieCard({ movie }) {
  return (
    <article className="movie-card">
      <Link to={`/movies/${movie.id}`} className="poster-link" aria-label={`View ${movie.name}`}>
        <img src={movie.bannerUrl} alt={movie.name} loading="lazy" />
        <span className="rating-badge">★ {movie.rating}</span>
      </Link>
      <div className="movie-card-body">
        <div className="movie-meta">
          <span>{movie.releaseYear}</span>
          <span>•</span>
          <span>{movie.duration}</span>
        </div>
        <h3>{movie.name}</h3>
        <p className="genre">{movie.genre}</p>
        <Link className="details-link" to={`/movies/${movie.id}`}>
          View Details →
        </Link>
      </div>
    </article>
  )
}

export default MovieCard
