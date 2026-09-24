function SearchForm({ value, onChange, placeholder = 'Search movies...' }) {
  return (
    <div className="search-box">
      <span aria-hidden="true">⌕</span>
      <input
        type="search"
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder={placeholder}
        aria-label="Search movies"
      />
    </div>
  )
}

export default SearchForm
