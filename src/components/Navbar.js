import React from 'react';
import { Link } from 'react-router-dom';

export default function NavBar() {
  return (
    <nav>
      <div className="mainNav">
        <h2>Bookstore CMS</h2>
        <ul className="navMenu">
          <li><Link to="/">Books</Link></li>
          <span>|</span>
          <li><Link to="/categories">Categories</Link></li>
        </ul>
      </div>
    </nav>
  );
}
