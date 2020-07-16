import React from 'react';
import propTypes from 'prop-types';

import ReactDisqusComments from 'react-disqus-comments';

import { CommentsWrapper, CommentsTitle } from './styles';

export default function Comments({ url, title }) {
  const completeUrl = `https://joaosoares.com${url}`

  return (
    <CommentsWrapper>
      <CommentsTitle>Comentários</CommentsTitle>
      <ReactDisqusComments
        shortname="joaosoares"
        identifier={completeUrl}
        title={title}
        url={completeUrl}
      />
    </CommentsWrapper>
  );
};

Comments.propTypes = {
  url: propTypes.string.isRequired,
  title: propTypes.string.isRequired
};