import React from 'react';

import { Link } from 'gatsby';

import SEO from "../components/seo";
import Layout from '../components/layout';

export default function ProfilePage() {
  return (
    <Layout>
      <SEO title="About"/>
      <h1>About Page</h1>

      <ul>
        <li>
          <Link to="/about" activeStyle={{ color: 'blue' }}>About Page</Link>
        </li>
        <li>
          <Link to="/">Home Page(gatsby link)</Link>
        </li>
      </ul>
    </Layout>
  );
};