import { useTranslation } from 'react-i18next';
import styled from 'styled-components';

import Brand from './Brand';

const StyledFooter = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  padding-top: 0.75rem;
  border-top: 2px solid ${({ theme }) => theme.color.primary};
`;

/** App Footer */
const Footer = () => {
  const { t } = useTranslation();

  return (
    <StyledFooter>
      <Brand />
      <span>{t('A solução que você merece')}</span>
    </StyledFooter>
  );
};

export default Footer;
