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
      <img src="https://img.icons8.com/external-anggara-outline-color-anggara-putra/32/000000/external-avatar-interface-anggara-outline-color-anggara-putra.png" alt="profile" />
    </nav>
  );
}
