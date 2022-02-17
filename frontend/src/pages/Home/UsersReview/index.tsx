import List from '../../../components/List';
import Review from '../../../components/Review';

import { Review as ReviewType } from '../../../types/review';

interface UsersReviewProps {
  reviews: ReviewType[];
}

const UsersReview = ({ reviews }: UsersReviewProps) => {
  return (
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
  );
};

export default UsersReview;
