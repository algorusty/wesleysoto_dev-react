import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [navItems, setNavItems] = useState([]);

  useEffect(() => {
    // Fetch the navigation data from the backend
    fetch('https://backend.wesleysoto.dev/navbar')
      .then(response => response.json())
      .then(data => {
        // Assuming the data is an array of items
        setNavItems(data);
      })
      .catch(error => console.error('Error fetching navbar data:', error));
  }, []);

  return (
    <div className="navbar">
      <ul className="navbar-list">
        {navItems.map((item, index) => (
          <li key={index} className="navbar-item">
            <span className="icon">
              {/* Replace 'material-icons' with the actual icon if needed */}
              <span className="material-icons">{item.icon}</span>
            </span>
            <span className="text">{item.text}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;
