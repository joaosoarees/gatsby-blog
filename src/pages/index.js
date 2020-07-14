import React from "react";
import { useStaticQuery, graphql } from 'gatsby';

import Layout from "../components/Layout";
import SEO from "../components/seo";
import PostItem from "../components/PostItem";

export default function IndexPage() {
  const { allMarkdownRemark } = useStaticQuery(
    graphql`
      query PostList {
        allMarkdownRemark {
          edges {
            node {
              id
              frontmatter {
                background
                category
                date
                description
                title
              }
              timeToRead
            }
          }
        }
      }
    `
  );

  const postList = allMarkdownRemark.edges;

  return (
    <Layout>
      <SEO title="Home" />
      {postList.map(({
        node: { 
          frontmatter: { background, category, date, description, title },
          timeToRead
        },
      }) => (
        <PostItem
          slug="/about/"
          background={background}
          category={category}
          date={date}
          timeToRead={timeToRead}
          title={title}
          description={description}
        />
      ))}
    </Layout>
  );
}
