import { useEffect, useState } from 'react';
import { useQuery } from '@apollo/client';

import Overview from './Overview';
import SignUp from './SignUp';
import UsersReview from './UsersReview';

import Loading from '../../components/Loading';

import { SplitContainer } from '../../containers';

import { Review } from '../../types/review';

import { LOAD_REVIEWS } from '../../graphql/Queries';

const Home = () => {
  const [reviews, setReviews] = useState<Review[]>([]);

  const { data, loading, error } = useQuery(LOAD_REVIEWS);

  useEffect(() => {
    if (data) {
      setReviews(data.getAllReviews);
    }
  }, [data]);

  return (
    <>
      <SplitContainer reverse={true}>
        <SignUp />
        <Overview />
      </SplitContainer>
      {loading && !error && <Loading />}
      {!loading && !error && <UsersReview reviews={reviews} />}
    </>
  );
};

export default Home;
