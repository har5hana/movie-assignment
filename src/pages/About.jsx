function About() {
  return (
    <main className="page-shell narrow-page">
      <div className="page-header">
        <div>
          <span className="eyebrow">ABOUT MOVIEHUB</span>
          <h1>One app, many React concepts.</h1>
          <p>MovieHub is a small Netflix-style discovery SPA built as an integrated React learning exercise.</p>
        </div>
      </div>

      <div className="concept-grid">
        {[
          ['JSX', 'Markup and JavaScript expressions build the UI.'],
          ['Props', 'Movie data moves from parent pages into reusable MovieCard components.'],
          ['State', 'Search and form inputs are controlled by React state.'],
          ['Validation', 'The Add Movie form checks required fields, year and rating ranges.'],
          ['children', 'Section demonstrates composition by accepting nested content.'],
          ['React Router', 'Routes connect URLs to Home, Movies, Add Movie, Details and About.'],
        ].map(([title, description]) => (
          <article className="concept-card" key={title}>
            <h2>{title}</h2>
            <p>{description}</p>
          </article>
        ))}
      </div>
    </main>
  )
}

export default About
