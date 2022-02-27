import styled from 'styled-components';

export interface UserIconProps {
  /** A picture URL */
  picture: string;
}

interface StyledIconProps {
  picture: string;
}

const StyledContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const StyledIcon = styled.div<StyledIconProps>`
  border-radius: 100%;
  background: ${({ picture }) => `url(${picture}) no-repeat center/100%`};
  width: 5rem;
  height: 5rem;
`;

/** Round user icon */
const UserIcon = ({ picture }: UserIconProps) => {
  return (
    <StyledContainer>
      <StyledIcon picture={picture}></StyledIcon>
    </StyledContainer>
  );
};

export default UserIcon;
