import styled from 'styled-components';

/** Wrap the table, prevents overflow */
export const TableWrapper = styled.div`
  overflow-x: auto;
  width: stretch;
  background-color: ${({ theme }) => theme.color.bgSecondary};
  border: 1px solid ${({ theme }) => theme.color.primary};
  border-radius: 0.5rem;
  padding: 1rem;
`;

/** Default Table */
export const Table = styled.table`
  border-collapse: collapse;
  width: stretch;
`;

/** Default thead */
export const THead = styled.thead``;

/** Default thead tr */
export const THRow = styled.tr`
  border-bottom: 1px solid ${({ theme }) => theme.color.primary};
`;

/** Default th */
export const THCol = styled.th`
  font-size: 0.9rem;
  font-weight: 600;
  text-align: left;
  text-transform: uppercase;
  padding: 0.5rem;
`;

/** Default tbody */
export const TBody = styled.tbody``;

/** Default tr */
export const TRow = styled.tr`
  border-bottom: 1px solid ${({ theme }) => theme.color.gray};
  background-color: ${({ theme }) => theme.color.bgSecondary};

  &:nth-child(even) {
    background-color: ${({ theme }) => theme.color.lightGray};
  }

  &:hover {
    background-color: ${({ theme }) => theme.color.lightGray};
  }
`;

/** Default td */
export const TCol = styled.td`
  padding: 0.5rem;
  white-space: nowrap;
`;
