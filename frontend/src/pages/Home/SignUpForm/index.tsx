import { useTranslation } from 'react-i18next';

import Title from '../../../components/Title';

import { SectionContainer } from '../../../containers';

const SignUpForm = () => {
  const { t } = useTranslation();

  return (
    <SectionContainer>
      <Title as="h2">{t('Quer ser nosso cliente? Cadastre-se aqui!')}</Title>
    </SectionContainer>
  );
};

export default SignUpForm;
