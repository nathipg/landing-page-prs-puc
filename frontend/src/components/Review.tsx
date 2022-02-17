import styled from 'styled-components';

import UserIcon from './UserIcon';

interface ReviewProps {
  name: string;
  picture: string;
  text: string;
}

const StyledReview = styled.div`
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  background-color: ${({ theme }) => theme.color.bgSecondary};
  padding: 1rem;
  border-radius: 0.5rem;

  @media (min-width: ${({ theme }) => theme.breakPoint.lg}) {
    flex-direction: row;
    max-width: calc(50% - 1rem);
    min-width: calc(50% - 1rem);
  }
`;

const StyledReviewContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  span {
    align-self: center;
    font-weight: bold;
  }

  @media (min-width: ${({ theme }) => theme.breakPoint.lg}) {
    span {
      align-self: flex-start;
    }
  }
`;

const Review = ({ name, picture, text }: ReviewProps) => {
  return (
    <StyledReview>
      <UserIcon picture={picture} />
      <StyledReviewContent>
        <span>{name}</span>
        <p>{text}</p>
      </StyledReviewContent>
    </StyledReview>
  );
};

export default Review;
