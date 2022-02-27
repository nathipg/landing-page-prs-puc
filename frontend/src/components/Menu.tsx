import { ReactNode } from 'react';
import styled from 'styled-components';

interface MenuProps {
  children: ReactNode;
}

const StyledMenu = styled.nav``;

const Menu = ({ children }: MenuProps) => {
  return (
    <StyledMenu>
      <ul>{children}</ul>
    </StyledMenu>
  );
};

export default Menu;
