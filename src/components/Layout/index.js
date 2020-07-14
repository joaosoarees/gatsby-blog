import React from "react";
import PropTypes from "prop-types";

import GlobalStyles from '../../styles/GlobalStyles';
import { LayoutWrapper, LayoutMain } from './styles';

import Sidebar from '../Sidebar';

const Layout = ({ children }) => {
  return (
    <LayoutWrapper>
      <GlobalStyles />
      <Sidebar />
      <LayoutMain>{children}</LayoutMain>
    </LayoutWrapper>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout;
