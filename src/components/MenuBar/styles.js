import styled from 'styled-components';
import { Link } from 'gatsby';

export const MenuBarWrapper = styled.aside`
  align-items: center;
  background: var(--mediumBackground);
  border-left: 1px solid var(--borders);
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: space-between;
  padding: 0.8rem 0;
  position: fixed;
  right: 0;
  width: 3.75rem;
`;

export const MenuBarGroup = styled.div`
  display: flex;
  flex-direction: column;
`;

export const MenuBarLink = styled(Link)`
  display: block;
`;

export const MenuBarItem = styled.span`
  color: var(--texts);
  cursor: pointer;
  display: block;
  height: 25px;
  padding: 1.1rem 0 30px;
  position: relative;
  width: 25px;
  
  &:hover {
    color: var(--highlight);
  }
`;