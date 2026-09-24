import { useState } from 'react'

const initialForm = {
  name: '',
  genre: '',
  releaseYear: '',
  rating: '',
}

function AddMovie() {
  const [form, setForm] = useState(initialForm)
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)

  function handleChange(event) {
    const { name, value } = event.target
    setForm((current) => ({ ...current, [name]: value }))
    setSubmitted(false)
    setErrors((current) => ({ ...current, [name]: '' }))
  }

  function validate() {
    const nextErrors = {}
    if (!form.name.trim()) nextErrors.name = 'Movie name is required.'
    if (!form.genre.trim()) nextErrors.genre = 'Genre is required.'

    const year = Number(form.releaseYear)
    if (!form.releaseYear || !Number.isInteger(year) || year < 1900 || year > 2026) {
      nextErrors.releaseYear = 'Release year must be between 1900 and 2026.'
    }

    const rating = Number(form.rating)
    if (form.rating === '' || Number.isNaN(rating) || rating < 0 || rating > 10) {
      nextErrors.rating = 'Rating must be between 0 and 10.'
    }

    return nextErrors
  }

  function handleSubmit(event) {
    event.preventDefault()
    const validationErrors = validate()
    setErrors(validationErrors)
    if (Object.keys(validationErrors).length === 0) {
      setSubmitted(true)
    }
  }

  return (
    <main className="page-shell narrow-page">
      <div className="page-header">
        <div>
          <span className="eyebrow">CONTROLLED FORM</span>
          <h1>Add a Movie</h1>
          <p>Every input is controlled by React state and validated before submission.</p>
        </div>
      </div>

      <form className="movie-form card-surface" onSubmit={handleSubmit} noValidate>
        <div className="form-grid">
          <label>
            Movie Name
            <input name="name" value={form.name} onChange={handleChange} placeholder="e.g. Interstellar" />
            {errors.name && <span className="error">{errors.name}</span>}
          </label>

          <label>
            Genre
            <input name="genre" value={form.genre} onChange={handleChange} placeholder="e.g. Science Fiction" />
            {errors.genre && <span className="error">{errors.genre}</span>}
          </label>

          <label>
            Release Year
            <input name="releaseYear" type="number" value={form.releaseYear} onChange={handleChange} placeholder="2026" />
            {errors.releaseYear && <span className="error">{errors.releaseYear}</span>}
          </label>

          <label>
            Rating / 10
            <input name="rating" type="number" min="0" max="10" step="0.1" value={form.rating} onChange={handleChange} placeholder="8.5" />
            {errors.rating && <span className="error">{errors.rating}</span>}
          </label>
        </div>

        <button className="button primary submit-button" type="submit">Validate Movie</button>

        {submitted && (
          <div className="success-message" role="status">
            Movie data is valid. In this learning exercise, the form validates the data but does not persist it to the dataset.
          </div>
        )}
      </form>
    </main>
  )
}

export default AddMovie
