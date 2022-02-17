import { useTranslation } from 'react-i18next';

import List from '../../../components/List';
import Review from '../../../components/Review';
import Title from '../../../components/Title';

import { SectionContainer } from '../../../containers';

import { Review as ReviewType } from '../../../types/review';

interface UsersReviewProps {
  reviews: ReviewType[];
}

const UsersReview = ({ reviews }: UsersReviewProps) => {
  const { t } = useTranslation();

  return (
    <SectionContainer>
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
    </SectionContainer>
  );
};

export default UsersReview;
