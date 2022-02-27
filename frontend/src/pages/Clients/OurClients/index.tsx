import { useContext } from 'react';
import { useTranslation } from 'react-i18next';

import { SectionContainer } from '../../../containers';

import Title from '../../../components/Title';
import {
  Table,
  TableWrapper,
  TBody,
  TCol,
  THCol,
  THead,
  THRow,
  TRow,
} from '../../../components/Table';

import ClientContext from '../../../store/contexts/clients';

/* LGPD saw this page and freaked out */
const OurClients = () => {
  const { t } = useTranslation();
  const { clients } = useContext(ClientContext);

  const listClients = () => {
    if (clients.length === 0) {
      return (
        <TRow>
          <TCol colSpan={2}>{t('Nenhum cliente encontrado')}</TCol>
        </TRow>
      );
    }
    return clients.map(client => (
      <TRow>
        <TCol>{client.name}</TCol>
        <TCol>{client.email}</TCol>
      </TRow>
    ));
  };

  return (
    <SectionContainer>
      <Title as="h2">{t('Nossos Clientes')}</Title>
      <TableWrapper>
        <Table>
          <THead>
            <THRow>
              <THCol>{t('nome')}</THCol>
              <THCol>{t('email')}</THCol>
            </THRow>
          </THead>
          <TBody>{listClients()}</TBody>
        </Table>
      </TableWrapper>
    </SectionContainer>
  );
};

export default OurClients;
