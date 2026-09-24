import { useMemo, useState } from 'react'
import movies_data from '../data/movies'
import MovieCard from '../components/MovieCard'
import SearchForm from '../components/SearchForm'
import Section from '../components/Section'

const genres = ['All Genres', 'Action', 'Drama', 'Comedy', 'Romance', 'Science Fiction']

function Movies() {
  const [search, setSearch] = useState('')
  const [selectedGenre, setSelectedGenre] = useState('All Genres')

  const filteredMovies = useMemo(() => {
    const query = search.trim().toLowerCase()
    return movies_data.filter((movie) => {
      const matchesSearch =
        !query ||
        movie.name.toLowerCase().includes(query) ||
        movie.director.toLowerCase().includes(query) ||
        movie.cast.toLowerCase().includes(query)

      const matchesGenre =
        selectedGenre === 'All Genres' || movie.genre.toLowerCase().includes(selectedGenre.toLowerCase())

      return matchesSearch && matchesGenre
    })
  }, [search, selectedGenre])

  return (
    <main className="page-shell">
      <div className="page-header">
        <div>
          <span className="eyebrow">CATALOG</span>
          <h1>Browse Movies</h1>
          <p>Search by movie, director or cast and filter by genre.</p>
        </div>
        <span className="result-count">{filteredMovies.length} results</span>
      </div>

      <div className="filters-panel">
        <SearchForm value={search} onChange={setSearch} />
        <div className="genre-filters" role="group" aria-label="Movie genres">
          {genres.map((genre) => (
            <button
              key={genre}
              type="button"
              className={selectedGenre === genre ? 'filter-button selected' : 'filter-button'}
              onClick={() => setSelectedGenre(genre)}
            >
              {genre}
            </button>
          ))}
        </div>
      </div>

      <Section title={selectedGenre === 'All Genres' ? 'All Movies' : selectedGenre}>
        {filteredMovies.length ? (
          <div className="movie-grid">
            {filteredMovies.map((movie) => <MovieCard key={movie.id} movie={movie} />)}
          </div>
        ) : (
          <div className="empty-state card-surface">
            <h2>No movies found</h2>
            <p>Try another search term or reset the genre filter.</p>
          </div>
        )}
      </Section>
    </main>
  )
}

export default Movies
