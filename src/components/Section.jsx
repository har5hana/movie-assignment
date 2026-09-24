function Section({ title, children, action }) {
  return (
    <section className="section-block">
      <div className="section-heading">
        <h2>{title}</h2>
        {action}
      </div>
      {children}
    </section>
  )
}

export default Section
