import {
  createContext,
  ReactNode,
  useEffect,
  useReducer,
} from 'react';
import { useMutation, useQuery } from '@apollo/client';

import { clientReducer } from '../reducers/client';

import { Client } from '../../types/client';

import { LOAD_CLIENTS_QUERY } from '../../graphql/Queries';
import { CREATE_CLIENT_MUTATION } from '../../graphql/Mutations';

import { ADD_CLIENT, LOAD_CLIENTS } from '../actions/client';

interface createContextProps {
  clients: Client[];
  addClientHandler: (client: Client) => Promise<boolean>;
}

interface ClientContextProviderProps {
  children: ReactNode;
}

const ClientContext = createContext<createContextProps>({
  clients: [],
  addClientHandler: async client => true,
});

export const ClientContextProvider = ({
  children,
}: ClientContextProviderProps) => {
  const [clients, dispatchClients] = useReducer(clientReducer, []);
  const [createClient, { error: errorMutation }] = useMutation(
    CREATE_CLIENT_MUTATION
  );
  const { data, loading, error } = useQuery(LOAD_CLIENTS_QUERY);

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

      dispatchClients({
        type: ADD_CLIENT,
        client: {
          id: response.data.createClient.id,
          ...client,
        },
      });
    } catch (e) {
      console.error(e);
      result = false;
    }

    return result;
  };

  useEffect(() => {
    if (data) {
      dispatchClients({
        type: LOAD_CLIENTS,
        clients: data.getAllClients,
      });
    }
  }, [data]);

  return (
    <ClientContext.Provider value={{ clients, addClientHandler }}>
      {children}
    </ClientContext.Provider>
  );
};

export default ClientContext;
