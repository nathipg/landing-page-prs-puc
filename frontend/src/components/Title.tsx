import styled from 'styled-components';

interface TitleProps {
  as?: 'h1' | 'h2';
}

const Title = styled.h1<TitleProps>`
  font-size: ${({ as }) => (as && as === 'h2' ? '1.2rem' : '1.5rem')};
`;

export default Title;
