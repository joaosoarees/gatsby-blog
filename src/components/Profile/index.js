import React from 'react';
import { StaticQuery, graphql } from 'gatsby';

export default function Profile() {
  return (
    <StaticQuery 
      query={graphql`
        query MySitemetadata {
          site {
            siteMetadata {
              title
              position
              description
            }
          }
        }
      `}
      render={({site: {siteMetadata: { title, position, description }}}) => (
        <div className="Profile-wrapper">
          <h1>{title}</h1>
          <h2>{position}</h2>
          <p>{description}</p>
        </div>
      )}
    />
  );
};