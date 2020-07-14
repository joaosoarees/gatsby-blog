import React from 'react';
import PropTypes from 'prop-types';

import { 
  PostItemWrapper,
  PostItemTitle,
  PostItemTag,
  PostItemLink,
  PostItemInfo,
  PostItemDescription,
  PostItemDate
} from './styles';

export default function PostItem({
  slug, 
  category, 
  date, 
  timeToRead, 
  title, 
  description, 
  background 
  }) {
  return (
    <PostItemLink to={slug}>
      <PostItemWrapper>
        <PostItemTag background={background}>{category}</PostItemTag>
        <PostItemInfo>
          <PostItemDate>
            {date} - {timeToRead} min de leitura
          </PostItemDate>
          <PostItemTitle>{title}</PostItemTitle>
          <PostItemDescription>{description}</PostItemDescription>
        </PostItemInfo>
      </PostItemWrapper>
    </PostItemLink>
  );
};

PostItem.propTypes = {
  slug: PropTypes.string.isRequired,
  background: PropTypes.string,
  category: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  timeToRead: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
}