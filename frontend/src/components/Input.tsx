import { ChangeEvent } from 'react';
import styled, { css } from 'styled-components';

export interface InputProps {
  /** Input label */
  label: string;
  /** Input type */
  type: string;
  /** Input name */
  name: string;
  /** Input value */
  value: string;
  /** Indicate if the input is valid or not */
  valid: boolean;
  /** Message shown if the input is invalid */
  invalidMessage: string;
  /** Indicate if the input was changed by the user (Focus or typed) */
  touched: boolean;
  /** Function to deal with input change */
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  /** Function to deal with input blur */
  onBlur: (event: ChangeEvent<HTMLInputElement>) => void;
  /** Function to deal with input focus */
  onFocus: (event: ChangeEvent<HTMLInputElement>) => void;
}

interface StyledInputProps {
  id: string;
  type: string;
  name: string;
  value: string;
  hasValue: boolean;
  valid: boolean;
  touched: boolean;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  onBlur: (event: ChangeEvent<HTMLInputElement>) => void;
  onFocus: (event: ChangeEvent<HTMLInputElement>) => void;
}

const Wrapper = styled.div`
  position: relative;
`;

const Label = styled.label``;

const LabelText = styled.span`
  height: 3.5rem;
  position: absolute;
  top: 0;
  left: 1rem;
  display: flex;
  align-items: center;
  text-transform: capitalize;

  transform-origin: 0% 0%;
  font-style: normal;
  font-weight: 300;

  transition: 0.1s ease-in-out;
`;

const StyledInput = styled.input<StyledInputProps>`
  border: 1px solid black;
  display: block;
  outline: 0;
  resize: none;
  border-radius: 1rem;
  font-size: 1.2rem;
  transition: border-color 0.3s;
  height: 3.5rem;
  padding: 0 1rem;
  width: stretch;

  &:focus + span {
    transform: scale(0.6) translateY(-10px);
  }

  ${({ hasValue }) =>
    hasValue &&
    css`
      & + span {
        transform: scale(0.6) translateY(-10px);
      }
    `}

  ${({ valid, touched }) =>
    !valid &&
    touched &&
    css`
      border-color: ${({ theme }) => theme.color.error};
    `}

  ${({ valid, touched }) =>
    valid &&
    touched &&
    css`
      border-color: ${({ theme }) => theme.color.ok};
    `}
`;

const InvalidMessage = styled.span`
  color: ${({ theme }) => theme.color.error};
  font-size: 0.8rem;
`;

/** Input component for forms */
const Input = ({
  label,
  type,
  name,
  value,
  valid,
  invalidMessage,
  touched,
  onChange,
  onBlur,
  onFocus,
}: InputProps) => {
  const fieldId = `id_${name}`;
  const hasValue = !!value.length;
  const hasLabel = !!label;

  valid = valid === undefined ? true : valid;

  const input = (
    <StyledInput
      id={fieldId}
      type={type}
      name={name}
      value={value}
      hasValue={hasValue}
      onChange={onChange}
      onBlur={onBlur}
      onFocus={onFocus}
      valid={valid}
      touched={touched}
    />
  );

  return (
    <Wrapper>
      {hasLabel && (
        <Label htmlFor={fieldId}>
          {input}
          <LabelText>{label}</LabelText>
        </Label>
      )}
      {!hasLabel && input}
      {touched && !valid && invalidMessage && (
        <InvalidMessage>{invalidMessage}</InvalidMessage>
      )}
    </Wrapper>
  );
};

export default Input;
