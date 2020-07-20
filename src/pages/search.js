import React from 'react';

import SEO from "../components/seo";
import Layout from '../components/Layout';
import Search from '../components/Search';

export default function SearchPage() {
  return (
    <Layout>
      <SEO title="Search"/>
      <Search />
    </Layout>
  );
};