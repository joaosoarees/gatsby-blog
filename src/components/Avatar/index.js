import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import { AvatarWrapper } from './styles';

export default function Avatar() {
  const { avatarImage } = useStaticQuery(
    graphql`
      query {
        avatarImage: file(relativePath: { eq: "avatar.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 60, maxHeight: 60) {
              ...GatsbyImageSharpFluid_tracedSVG
            }
          }
        }
      }
    `
  );

  return (
    <AvatarWrapper fluid={avatarImage.childImageSharp.fluid} />
  );
};