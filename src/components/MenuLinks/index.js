import React from 'react';

import links from './content';

import { 
  MenuLinksWrapper,
  MenuLinksList,
  MenuLinksLink,
  MenuLinksItem
 } from './styles';

export default function MenuLinks() {
  return (
    <MenuLinksWrapper>
      <MenuLinksList>
        {links.map((link, index) => (
          <MenuLinksItem key={index}>
            <MenuLinksLink to={link.url} activeClassName="active">{link.label}</MenuLinksLink>
          </MenuLinksItem>
        ))}
      </MenuLinksList>
    </MenuLinksWrapper>
  );
};