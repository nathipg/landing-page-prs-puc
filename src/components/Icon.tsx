import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/free-solid-svg-icons';

interface IconProps {
  icon: IconDefinition;
  variant?: 'primary';
  children?: React.ReactNode;
}

interface StyledIconProps {
  variant?: 'primary';
}

const StyledIcon = styled.div<StyledIconProps>`
  align-items: center;
  display: inline-flex;
  gap: 0.5rem;
  color: ${({ variant, theme }) =>
    variant && variant === 'primary' ? theme.color.primary : null};
`;

const Icon = ({ icon, variant, children }: IconProps) => {
  return (
    <StyledIcon variant={variant}>
      <FontAwesomeIcon icon={icon} />
      {children}
    </StyledIcon>
  );
};

export default Icon;
