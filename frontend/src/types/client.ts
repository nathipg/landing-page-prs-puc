export interface Client {
  id?: number;
  name: string;
  email: string;
  password: string;
}

export interface ClientReducer {
  (prevState: Client[], action: ClientAction): Client[];
}

export interface ClientAction {
  type: string;
  client?: Client;
  clients?: Client[];
}
