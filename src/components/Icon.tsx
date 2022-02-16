import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/free-solid-svg-icons';

interface IconProps {
  icon: IconDefinition;
  children?: React.ReactNode;
}

const StyledIcon = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const Icon = ({ icon, children }: IconProps) => {
  return (
    <StyledIcon>
      <FontAwesomeIcon icon={icon} />
      {children}
    </StyledIcon>
  );
};

export default Icon;
