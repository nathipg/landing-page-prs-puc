import styled from 'styled-components';

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

export const SplitContainer = styled.div`
  @media (min-width: ${({ theme }) => theme.breakPoint.lg}) {
    display: flex;
    flex-direction: row-reverse;

    > * {
      flex-basis: 50%;
    }
  }
`;
