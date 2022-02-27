import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/free-solid-svg-icons';

export interface IconProps {
  /** FontAwesome icon */
  icon: IconDefinition;
  /** Icon variation */
  variant: 'default' | 'primary';
  /** Content next to the icon */
  children?: React.ReactNode;
}

interface StyledIconProps {
  variant: 'default' | 'primary';
}

const StyledIcon = styled.div<StyledIconProps>`
  align-items: center;
  display: inline-flex;
  gap: 0.5rem;
  color: ${({ variant, theme }) =>
    variant && variant === 'primary' ? theme.color.primary : null};
`;

/** Component to use FontAwesome icons */
const Icon = ({ icon, variant = 'default', children }: IconProps) => {
  return (
    <StyledIcon variant={variant}>
      <FontAwesomeIcon icon={icon} />
      {children}
    </StyledIcon>
  );
};

export default Icon;
