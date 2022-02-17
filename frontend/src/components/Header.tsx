import styled from 'styled-components';

import Brand from './Brand';

const StyledHeader = styled.div`
  padding-bottom: 0.75rem;
  border-bottom: 2px solid ${({ theme }) => theme.color.primary};
`;

const Header = () => {
  return (
    <StyledHeader>
      <Brand />
    </StyledHeader>
  );
};

export default Header;
