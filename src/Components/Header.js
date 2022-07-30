import React from 'react';
import { Link } from 'react-router-dom';
import { ImUser } from 'react-icons/im';

class Header extends React.Component {
  render() {
    return (

      <nav className="navigation">
        <Link to="/" className="logoStyle">Bookstore CMS</Link>

        <ul className="nav-header">
          <li className="nav-link">
            <Link className="nav-link active" to="/Home">Books</Link>
          </li>
          <li className="nav-link">
            <Link className="nav-link" to="/Catogeries">Categories</Link>
          </li>
          <ImUser className="nav-image" style={{ color: '#0290ff', fontSize: '16px', marginLeft:'500px', borderRadius:'50%', border:'0.5px solid blue', padding:'5px 5px' }} />
          

        </ul>

      </nav>
    );
  }
}

export default Header;