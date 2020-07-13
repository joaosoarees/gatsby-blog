import React from 'react';

import { Link } from 'gatsby';

export default function AboutPage() {
  return (
    <>
      <h1>About Page</h1>
      <ul>
        <li>
          <a href="/">Home Page</a>
        </li>
        <li>
          <Link to="/about" activeStyle={{ color: 'blue' }}>About</Link>
        </li>
        <li>
          <Link to="/">Home Page(Gatsby Link)</Link>
        </li>
      </ul>
    </>
  );
};