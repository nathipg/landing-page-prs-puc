import { ReactNode } from 'react';
import styled from 'styled-components';

export interface TitleProps {
  /** Title level, default h1 */
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  /** Title content */
  children: ReactNode;
}

/** Default Title, allow from h1 to h6 */
const Title = styled.h1<TitleProps>`
  font-size: ${({ as }) => (!as || as === 'h1' ? '1.5rem' : '1.2rem')};
`;

export default Title;
