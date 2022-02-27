import { useTranslation } from 'react-i18next';
import { faMeteor } from '@fortawesome/free-solid-svg-icons';

import Icon from '../components/Icon';
import Title from '../components/Title';

/** Meteor Brand */
const Brand = () => {
  const { t } = useTranslation();

  return (
    <Icon icon={faMeteor} variant="primary">
      <Title>{t('Meteoro')}</Title>
    </Icon>
  );
};

export default Brand;
