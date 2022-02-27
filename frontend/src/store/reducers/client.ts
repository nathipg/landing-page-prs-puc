import { ADD_CLIENT, LOAD_CLIENTS } from '../actions/client';

import { ClientReducer } from '../../types/client';

const loadHandler: ClientReducer = (prevState, action) => {
  return prevState;
};

const addHandler: ClientReducer = (prevState, action) => {
  if (action.client) {
    return [...prevState, action.client];
  }

  return prevState;
};

export const clientReducer: ClientReducer = (prevState, action) => {
  switch (action.type) {
    case LOAD_CLIENTS:
      return loadHandler(prevState, action);
    case ADD_CLIENT:
      return addHandler(prevState, action);
    default:
      throw new Error('Invalid action in client reducer');
  }
};
