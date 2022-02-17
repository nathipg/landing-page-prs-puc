import { useEffect, useState } from 'react';

import Overview from './Overview';
import SignUpForm from './SignUpForm';
import UsersReview from './UsersReview';

import Loading from '../../components/Loading';

import { SplitContainer } from '../../containers';

import { useGet } from '../../hooks/customHooks';

import { Review } from '../../types/review';

const Home = () => {
  const [reviews, setReviews] = useState<Review[]>([]);

  const { response, loading, error } = useGet<Review[]>('/review');

  useEffect(() => {
    if (response) {
      setReviews(response.data);
    }
  }, [response]);

  return (
    <>
      <SplitContainer>
        <SignUpForm />
        <Overview />
      </SplitContainer>
      {loading && <Loading />}
      {!loading && !error && <UsersReview reviews={reviews} />}
    </>
  );
};

export default Home;
