import { Link, useParams } from 'react-router-dom'
import movies_data from '../data/movies'

function MovieDetails() {
  const { id } = useParams()
  const movie = movies_data.find((item) => item.id === Number(id))

  if (!movie) {
    return (
      <main className="page-shell empty-state">
        <span className="eyebrow">MOVIE NOT FOUND</span>
        <h1>Movie not found</h1>
        <p>There is no movie in the supplied dataset with ID {id}.</p>
        <Link to="/movies" className="button primary">Back to Movies</Link>
      </main>
    )
  }

  return (
    <main className="details-page">
      <div className="details-backdrop" style={{ backgroundImage: `linear-gradient(90deg, rgba(7,10,18,.98) 0%, rgba(7,10,18,.82) 45%, rgba(7,10,18,.25) 100%), url(${movie.bannerUrl})` }} />
      <div className="page-shell details-content">
        <Link to="/movies" className="back-link">← Back to Movies</Link>
        <div className="details-layout">
          <img className="details-poster" src={movie.bannerUrl} alt={movie.name} />
          <div className="details-copy">
            <span className="eyebrow">{movie.genre}</span>
            <h1>{movie.name}</h1>
            <div className="details-meta">
              <span>★ {movie.rating}</span>
              <span>{movie.releaseYear}</span>
              <span>{movie.duration}</span>
            </div>
            <p className="details-description">{movie.description}</p>
            <dl className="credits">
              <div><dt>Director</dt><dd>{movie.director}</dd></div>
              <div><dt>Cast</dt><dd>{movie.cast}</dd></div>
            </dl>
          </div>
        </div>

        <section className="trailer-section">
          <div className="section-heading"><h2>Trailer</h2></div>
          <div className="trailer-frame">
            <iframe
              src={movie.trailer}
              title={`${movie.name} trailer`}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
        </section>
      </div>
    </main>
  )
}

export default MovieDetails
