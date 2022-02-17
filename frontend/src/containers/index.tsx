import styled from 'styled-components';

interface SplitContainerProps {
  reverse?: boolean;
}

export const Container = styled.div`
  margin: 0.75rem;
`;

export const MainContentContainer = styled.div`
  padding: 1rem 0;
`;

export const SectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin: 1rem 0;
`;

export const SplitContainer = styled.div<SplitContainerProps>`
  @media (min-width: ${({ theme }) => theme.breakPoint.lg}) {
    display: flex;
    gap: 2rem;
    flex-direction: ${({ reverse }) => (reverse ? 'row-reverse' : 'row')};

    > * {
      flex-basis: 50%;
    }
  }
`;
