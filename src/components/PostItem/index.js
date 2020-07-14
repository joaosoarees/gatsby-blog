import React from 'react';

import { 
  PostItemWrapper,
  PostItemTitle,
  PostItemTag,
  PostItemLink,
  PostItemInfo,
  PostItemDescription,
  PostItemDate
} from './styles';

export default function PostItem() {
  return (
    <PostItemLink to="/slug/">
      <PostItemWrapper>
        <PostItemTag background="#47650b">MISC</PostItemTag>
        <PostItemInfo>
          <PostItemDate>14 de Julho de 2020 - 1 min de leitura</PostItemDate>
          <PostItemTitle>Diga não ao Java</PostItemTitle>
          <PostItemDescription>
            Lorem Ipsum has been the industry's standard dummy text ever since the
            1500s, when an unknown printer took a galley of type and scrambled it 
            to make a type specimen book.
          </PostItemDescription>
        </PostItemInfo>
      </PostItemWrapper>
    </PostItemLink>
  );
};