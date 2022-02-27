import { useEffect, useState } from 'react';
import { useQuery, useMutation } from '@apollo/client';

import Overview from './Overview';
import SignUp from './SignUp';
import UsersReview from './UsersReview';

import Loading from '../../components/Loading';

import { SplitContainer } from '../../containers';

import { Client } from '../../types/client';
import { Review } from '../../types/review';

import { LOAD_REVIEWS } from '../../graphql/Queries';
import { CREATE_CLIENT_MUTATION } from '../../graphql/Mutations';

const Home = () => {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [clients, setClients] = useState<Client[]>([]);

  const { data, loading, error } = useQuery(LOAD_REVIEWS);
  const [createClient, { error: errorMutation }] = useMutation(
    CREATE_CLIENT_MUTATION
  );

  const addClientHandler = async (client: Client) => {
    let result = true;

    try {
      const response = await createClient({
        variables: {
          name: client.name,
          email: client.email,
          password: client.password,
        },
      });

      if (errorMutation) {
        console.error(errorMutation);
        result = false;
      }

      setClients(prevState => [
        ...prevState,
        {
          id: response.data.createClient.id,
          ...client,
        },
      ]);
    } catch (e) {
      console.error(e);
      result = false;
    }

    return result;
  };

  useEffect(() => {
    if (data) {
      setReviews(data.getAllReviews);
    }
  }, [data]);

  return (
    <>
      <SplitContainer reverse={true}>
        <SignUp addClientHandler={addClientHandler} />
        <Overview />
      </SplitContainer>
      {loading && !error && <Loading />}
      {!loading && !error && <UsersReview reviews={reviews} />}
    </>
  );
};

export default Home;
