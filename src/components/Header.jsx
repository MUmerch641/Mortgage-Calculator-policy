import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <header className="header">
      <div className="container header-inner">
        <Link to="/" className="logo">Mortgage Eligibility</Link>
        <nav className="nav-links">
          <Link to="/" className={`nav-link ${isActive('/') ? 'active' : ''}`}>Home</Link>
          <Link to="/privacy-policy" className={`nav-link ${isActive('/privacy-policy') ? 'active' : ''}`}>Privacy</Link>
          <Link to="/delete-account" className={`nav-link ${isActive('/delete-account') ? 'active' : ''}`}>Delete Account</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
