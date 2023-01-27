import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { FaUserTie } from 'react-icons/fa';

const Navbar = () => {
  const location = useLocation();
  const links = [
    {
      id: 1,
      path: '/books',
      text: 'Books',
    },
    {
      id: 2,
      path: '/categories',
      text: 'Categories',
    },
  ];
  const updateLink = (index) => {
    links[index] = { ...links[index], active: true };
  };
  return (
    <nav>
      <span className="nav-brand">
        Bookstore CMS
      </span>
      <ul className="nav-links">
        {links.map((link, index) => (
          <li key={link.id}>
            <NavLink
              to={link.path}
              className={`nav-link ${location.pathname === link.path ? 'active-link' : ''}`}
              onClick={updateLink(index)}
            >
              {link.text}
            </NavLink>
          </li>
        ))}
      </ul>
      <span className="icon-button">
        <FaUserTie className="primary-color" />
      </span>
    </nav>
  );
};
export default Navbar;
