import { useTranslation } from 'react-i18next';
import styled from 'styled-components';

import { StatusType } from '../types/toast';

export interface ToastProps {
  /** Toast status */
  status: StatusType;
  /** Toast message */
  message: string;
  hideHandler: () => void;
}

interface WrapperProps {
  status: StatusType;
}

const Wrapper = styled.div<WrapperProps>`
  background-color: white;
  border-left: 6px solid
    ${({ status, theme }) =>
      status === 'success' ? theme.color.ok : theme.color.error};
  border-radius: 0.25rem;
  box-shadow: 4px 2px 10px 1px ${({ theme }) => theme.color.gray};
  width: 17rem;
  display: flex;
  align-items: stretch;
  justify-content: space-between;
  padding-left: 1rem;
  margin: 1rem;
  position: absolute;
  right: 0;
  z-index: 100;
`;

const MsgWrapper = styled.div`
  padding: 0.5rem;

  h2 {
    margin: 0;
    font-size: 1rem;
    text-transform: capitalize;
  }

  span {
    font-size: 0.9rem;
  }
`;

const Options = styled.div`
  border-left: 1px solid ${({ theme }) => theme.color.gray};
  padding: 0.5rem 1rem;
  display: flex;
`;

const Button = styled.button`
  background: none;
  border: none;
  outline: none;
  cursor: pointer;
  text-transform: uppercase;
  font-size: 0.7rem;
  color: ${({ theme }) => theme.color.gray};
`;

/** Toast message */
const Toast = ({ status, message, hideHandler }: ToastProps) => {
  const { t } = useTranslation();

  return (
    <Wrapper status={status}>
      <MsgWrapper>
        <h2>{t(status)}</h2>
        <span>{message}</span>
      </MsgWrapper>
      <Options>
        <Button onClick={hideHandler}>{t('fechar')}</Button>
      </Options>
    </Wrapper>
  );
};

export default Toast;
