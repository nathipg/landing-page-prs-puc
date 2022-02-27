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

  const listReviews = () => {
    if (reviews.length === 0) {
      return (
        <p>{t('Se torne nosso cliente e seja o primeiro a nos avaliar!')}</p>
      );
    }

    return reviews.map((review, key) => (
      <Review
        key={key}
        name={review.user.name}
        picture={review.user.picture}
        text={review.text}
      />
    ));
  };

  return (
    <SectionContainer>
      <Title as="h2">{t('Avaliação dos Usuários')}</Title>
      <List>{listReviews()}</List>
    </SectionContainer>
  );
};

export default UsersReview;
