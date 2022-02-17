import { useTranslation } from 'react-i18next';

import Title from '../../../components/Title';

import { SectionContainer } from '../../../containers';

const Overview = () => {
  const { t } = useTranslation();

  return (
    <SectionContainer>
      <Title as="h2">{t('Visão Geral')}</Title>
      <p>
        {t(
          'Somos a empresa número 1 em desenvolvimento de soluções. Aqui, nós prezamos pela satisfação do cliente, sua solução é garantida.'
        )}
      </p>
      <p>
        {t(
          'Temos 24 anos de experiência em desenvolvimento de soluções, uma história próspera e cheia de clientes felizes.'
        )}
      </p>
      <p>
        {t(
          'Cada solução é feita sob medida para a necessidade do cliente, não existem duas soluções da Meteoro iguais.'
        )}
      </p>
    </SectionContainer>
  );
};

export default Overview;
