import { NavLink } from 'react-router-dom'

function Navbar() {
  const links = [
    ['/', 'Home'],
    ['/movies', 'Movies'],
    ['/add-movie', 'Add Movie'],
    ['/about', 'About'],
  ]

  return (
    <nav className="navbar">
      <NavLink to="/" className="brand">
        <span className="brand-mark">M</span>
        MovieHub
      </NavLink>
      <div className="nav-links">
        {links.map(([path, label]) => (
          <NavLink
            key={path}
            to={path}
            className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
          >
            {label}
          </NavLink>
        ))}
      </div>
    </nav>
  )
}

export default Navbar
