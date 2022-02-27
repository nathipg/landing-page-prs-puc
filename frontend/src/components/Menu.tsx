import { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

interface MenuProps {
  /** Menu Content */
  children: ReactNode;
}

interface MenuOptionProps {
  /** Link to go when click */
  to: string;
  /** Link content */
  children: ReactNode;
}

const StyledMenu = styled.nav`
  ul {
    display: flex;
    gap: 0.5rem;
  }
`;

/** Default Menu */
export const Menu = ({ children }: MenuProps) => {
  return (
    <StyledMenu>
      <ul>{children}</ul>
    </StyledMenu>
  );
};

const StyledMenuOption = styled.li`
  a {
    color: ${({ theme }) => theme.color.primary};
  }
`;

/** Default Menu Option */
export const MenuOption = ({ to, children }: MenuOptionProps) => {
  return (
    <StyledMenuOption>
      <Link to={to}>{children}</Link>
    </StyledMenuOption>
  );
};
