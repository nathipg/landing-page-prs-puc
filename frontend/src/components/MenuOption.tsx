import { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

interface MenuOptionProps {
  to: string;
  children: ReactNode;
}

const StyledMenuOption = styled.li`
  a {
    color: ${({ theme }) => theme.color.primary};
  }
`;

const MenuOption = ({ to, children }: MenuOptionProps) => {
  return (
    <StyledMenuOption>
      <Link to={to}>{children}</Link>
    </StyledMenuOption>
  );
};

export default MenuOption;
