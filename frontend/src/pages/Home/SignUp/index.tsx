import { useTranslation } from 'react-i18next';

import SignUpForm from '../../../components/SignUpForm';
import Title from '../../../components/Title';

import { SectionContainer } from '../../../containers';

import { Client } from '../../../types/client';

interface SignUpProps {
  addClientHandler: (client: Client) => void;
}

const SignUp = ({ addClientHandler }: SignUpProps) => {
  const { t } = useTranslation();

  return (
    <SectionContainer>
      <Title as="h2">{t('Quer ser nosso cliente? Cadastre-se aqui!')}</Title>
      <SignUpForm addClientHandler={addClientHandler} />
    </SectionContainer>
  );
};

export default SignUp;
