import { useEffect, useState } from 'react';

import Overview from './Overview';
import SignUp from './SignUp';
import UsersReview from './UsersReview';

import Loading from '../../components/Loading';

import { SplitContainer } from '../../containers';

import { useGet, usePost } from '../../hooks/customHooks';

import { Client } from '../../types/client';
import { Review } from '../../types/review';

const Home = () => {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [clients, setClients] = useState<Client[]>([]);

  const { response, loading, error } = useGet<Review[]>('/review');
  const { apiPost } = usePost('/client');

  const addClientHandler = async (client: Client) => {
    await apiPost(client);
    setClients((prevState) => [...prevState, client]);
  };

  useEffect(() => {
    if (response) {
      setReviews(response.data);
    }
  }, [response]);

  console.log(clients);

  return (
    <>
      <SplitContainer reverse={true}>
        <SignUp addClientHandler={addClientHandler} />
        <Overview />
      </SplitContainer>
      {loading && <Loading />}
      {!loading && !error && <UsersReview reviews={reviews} />}
    </>
  );
};

export default Home;
