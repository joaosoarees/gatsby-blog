import React from 'react';

import { SidebarWrapper } from './styles';

import Profile from '../Profile';

export default function Sidebar() {
  return (
    <SidebarWrapper>
      <Profile />
    </SidebarWrapper>
  );
};