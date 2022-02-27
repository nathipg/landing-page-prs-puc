import { Link } from 'react-router-dom';
import styled from 'styled-components';

import Brand from './Brand';
import { Menu, MenuOption } from './Menu';

const StyledHeader = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  padding-bottom: 0.75rem;
  border-bottom: 2px solid ${({ theme }) => theme.color.primary};
`;

/** App Header with Menu */
const Header = () => {
  return (
    <StyledHeader>
      <Link to="/">
        <Brand />
      </Link>
      <Menu>
        <MenuOption to="/clients">Clients</MenuOption>
      </Menu>
    </StyledHeader>
  );
};

export default Header;
