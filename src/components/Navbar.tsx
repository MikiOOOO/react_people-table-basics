import { Link } from 'react-router-dom';

export const NavBar = () => (
  <nav
    data-cy="nav"
    className="navbar is-fixed-top has-shadow"
    role="navigation"
    aria-label="main navigation"
  >
    <div className="container">
      <div className="navbar-brand">
        <Link to="/" className="navbar-item">Home</Link>
        <Link to="/people" className="navbar-item">People</Link>
      </div>
    </div>
  </nav>
);