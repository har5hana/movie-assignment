import { Link } from 'react-router-dom'
import movies_data from '../data/movies'
import MovieCard from '../components/MovieCard'
import Section from '../components/Section'

function Home() {
  const popularMovies = movies_data.filter((movie) => Number.parseFloat(movie.rating) >= 8.3)
  const latestMovies = [...movies_data].sort((a, b) => b.releaseYear - a.releaseYear).slice(0, 6)

  return (
    <main>
      <section className="hero">
        <div className="hero-content">
          <span className="eyebrow">MOVIE DISCOVERY</span>
          <h1>Find your next <span>great story.</span></h1>
          <p>
            Explore ratings, genres, casts and trailers in one simple React-powered movie hub.
          </p>
          <div className="hero-actions">
            <Link to="/movies" className="button primary">Browse Movies</Link>
            <Link to="/add-movie" className="button secondary">Add a Movie</Link>
          </div>
        </div>
        <div className="hero-stat-card">
          <strong>{movies_data.length}</strong>
          <span>movies in the supplied dataset</span>
          <div className="stat-divider" />
          <strong>{popularMovies.length}</strong>
          <span>rated 8.3 or higher</span>
        </div>
      </section>

      <div className="page-shell">
        <Section title="Popular Movies" action={<Link className="section-link" to="/movies">See all →</Link>}>
          <div className="movie-grid">
            {popularMovies.map((movie) => <MovieCard key={movie.id} movie={movie} />)}
          </div>
        </Section>

        <Section title="Latest Releases">
          <div className="movie-grid">
            {latestMovies.map((movie) => <MovieCard key={movie.id} movie={movie} />)}
          </div>
        </Section>
      </div>
    </main>
  )
}

export default Home
