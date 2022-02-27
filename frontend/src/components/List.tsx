import styled from 'styled-components';

/** List of components of any type, flex-direction is column */
const List = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  @media (min-width: ${({ theme }) => theme.breakPoint.lg}) {
    flex-direction: row;
    flex-wrap: wrap;
  }
`;

export default List;
