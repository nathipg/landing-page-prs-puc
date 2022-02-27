import { useContext } from 'react';
import { useTranslation } from 'react-i18next';

import SignUpForm from '../../../components/SignUpForm';
import Title from '../../../components/Title';

import { SectionContainer } from '../../../containers';

import ClientContext from '../../../store/contexts/clients';

const SignUp = () => {
  const { t } = useTranslation();

  const { addClientHandler } = useContext(ClientContext);

  return (
    <SectionContainer>
      <Title as="h2">{t('Quer ser nosso cliente? Cadastre-se aqui!')}</Title>
      <SignUpForm addClientHandler={addClientHandler} />
    </SectionContainer>
  );
};

export default SignUp;
