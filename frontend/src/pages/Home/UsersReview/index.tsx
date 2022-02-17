import { useTranslation } from 'react-i18next';
import styled from 'styled-components';

import List from '../../../components/List';
import Review from '../../../components/Review';
import Title from '../../../components/Title';

import { Review as ReviewType } from '../../../types/review';

interface UsersReviewProps {
  reviews: ReviewType[];
}

const StyledUsersReview = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const UsersReview = ({ reviews }: UsersReviewProps) => {
  const { t } = useTranslation();

  return (
    <StyledUsersReview>
      <Title as="h2">{t('Avaliação dos Usuários')}</Title>
      <List>
        {reviews.map((review, key) => (
          <Review
            key={key}
            name={review.user.name}
            picture={review.user.picture}
            text={review.text}
          />
        ))}
      </List>
    </StyledUsersReview>
  );
};

export default UsersReview;
