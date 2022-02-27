import { createContext, ReactNode, useCallback, useReducer } from 'react';
import { useMutation } from '@apollo/client';

import { clientReducer } from '../reducers/client';

import { Client } from '../../types/client';

import { CREATE_CLIENT_MUTATION } from '../../graphql/Mutations';

import { ADD_CLIENT } from '../actions/client';

interface createContextProps {
  clients: Client[];
  addClientHandler: (client: Client) => Promise<boolean>;
  loadClients: () => Promise<Client[]>;
}

interface ClientContextProviderProps {
  children: ReactNode;
}

const ClientContext = createContext<createContextProps>({
  clients: [],
  addClientHandler: async client => true,
  loadClients: async () => {
    return [];
  },
});

export const ClientContextProvider = ({
  children,
}: ClientContextProviderProps) => {
  const [clients, dispatchClients] = useReducer(clientReducer, []);
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

  const loadClients = useCallback(async () => {
    return [];
  }, []);

  return (
    <ClientContext.Provider value={{ clients, addClientHandler, loadClients }}>
      {children}
    </ClientContext.Provider>
  );
};

export default ClientContext;
