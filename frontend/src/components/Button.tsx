import styled from 'styled-components';

/** Default Button */
const Button = styled.button`
  border-radius: 0.5rem;
  cursor: pointer;
  padding: 0.5rem;
  border: 1px solid ${({ theme }) => theme.color.primary};
  background-color: ${({ theme }) => theme.color.bgSecondary};
  color: ${({ theme }) => theme.color.primary};

  &:hover {
    background-color: ${({ theme }) => theme.color.bgPrimary};
  }
`;

export default Button;
