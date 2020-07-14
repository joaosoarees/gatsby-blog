import React from "react";
import { useStaticQuery, graphql } from 'gatsby';

import Layout from "../components/Layout";
import SEO from "../components/seo";
import PostItem from "../components/PostItem";

export default function IndexPage() {
  const { allMarkdownRemark } = useStaticQuery(
    graphql`
      query MyQuery {
        allMarkdownRemark {
          edges {
            node {
              frontmatter {
                background
                category
                date(locale: "pt-br", formatString: "DD/MMMM")
                description
                title
              }
              timeToRead
              fields {
                slug
              }
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
          timeToRead,
          fields: { slug }
        },
      }) => (
        <PostItem
          slug={slug}
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
