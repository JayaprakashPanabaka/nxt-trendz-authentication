// Write your JS code here
import {Link} from 'react-router-dom'
import './index.css'

const Header = () => (
  <nav className="nav-bar">
    {/* <h1>Header</h1> */}
    <img
      src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png "
      className="nav-logo"
      alt="website logo"
    />
    <div className="menu-items">
      <ul className="nav-items">
        <Link to="/" className="nav-link">
          <li>Home</li>
        </Link>

        <Link to="/products" className="nav-link">
          <li>Products</li>
        </Link>

        <Link to="/cart" className="nav-link">
          <li>Cart</li>
        </Link>
      </ul>

      <button type="button" className="logout-btn">
        Logout
      </button>
    </div>
  </nav>
)

export default Header
