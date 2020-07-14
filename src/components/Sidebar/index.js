import React from 'react';

import { SidebarWrapper } from './styles';

import Profile from '../Profile';
import SocialLinks from '../SocialLinks';

export default function Sidebar() {
  return (
    <SidebarWrapper>
      <Profile />
      <SocialLinks />
    </SidebarWrapper>
  );
};