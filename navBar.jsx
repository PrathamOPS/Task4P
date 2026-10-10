import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/" className="nav-logo">
        DEV@Deakin
      </Link>

      <form
        className="nav-search"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          type="search"
          placeholder="Search..."
          aria-label="Search"
        />
      </form>

      <div className="nav-auth">
        <button
          type="button"
          onClick={() => window.alert('Post feature coming soon.')}
        >
          Post
        </button>

        <Link to="/login">Login</Link>
      </div>
    </nav>
  )
}

export default Navbar