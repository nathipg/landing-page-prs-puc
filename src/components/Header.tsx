import styled from 'styled-components';
import { faMeteor } from '@fortawesome/free-solid-svg-icons';
import { useTranslation } from 'react-i18next';

import Icon from '../components/Icon';
import Title from '../components/Title';

const StyledHeader = styled.div`
  margin: 0.75rem 0.75rem 0 0.75rem;
  padding: 0 0 0.75rem 0;
  border-bottom: 1px solid ${({ theme }) => theme.color.primary};
`;

const Header = () => {
  const { t } = useTranslation();

  return (
    <StyledHeader>
      <Icon icon={faMeteor} variant="primary">
        <Title>{t('Meteoro')}</Title>
      </Icon>
    </StyledHeader>
  );
};

export default Header;
