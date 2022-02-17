import { ChangeEvent, FormEvent, useReducer } from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';

import Button from './Button';
import Input from './Input';
import InputsWrapper from './InputsWrapper';

import { validate } from '../utils/validation';

import { Form } from '../types/form';
import { Client } from '../types/client';

import { clientFormReducer } from '../store/reducers/client';

import {
  USER_INPUT_CLIENT,
  BLUR_INPUT_CLIENT,
  FOCUS_INPUT_CLIENT,
  VALIDATE_FORM_CLIENT,
  CLEAN_UP_FORM_CLIENT,
} from '../store/actions/client';

interface SignUpFormProps {
  addClientHandler: (client: Client) => void;
}

const StyledSignUpForm = styled.form`
  border-radius: 0.5rem;
  padding: 1rem;
  background-color: ${({ theme }) => theme.color.bgSecondary};
`;

const SignUpForm = ({ addClientHandler }: SignUpFormProps) => {
  const { t } = useTranslation();

  const formInitialState: Form = {
    isValid: false,
    fields: [
      {
        name: 'name',
        label: t('nome'),
        type: 'text',
        value: '',
        validations: [
          {
            rule: 'required',
            message: t('Por favor, insira seu nome e sobrenome'),
          },
          {
            rule: 'min-two-words',
            message: t('Por favor, insira seu nome e sobrenome'),
          },
        ],
        valid: false,
        touched: false,
        errorMsg: '',
      },
      {
        name: 'email',
        label: t('email'),
        type: 'email',
        value: '',
        validations: [
          {
            rule: 'required',
            message: t('Por favor, insira seu email'),
          },
          {
            rule: 'email',
            message: t('Por favor, insira um email válido'),
          },
        ],
        valid: false,
        touched: false,
        errorMsg: '',
      },
      {
        name: 'password',
        label: t('senha'),
        type: 'password',
        value: '',
        validations: [
          {
            rule: 'required',
            message: t(
              'Por favor, insira uma senha com pelo menos 5 caracteres'
            ),
          },
          {
            rule: 'password',
            message: t(
              'Por favor, insira uma senha com pelo menos 5 caracteres'
            ),
          },
        ],
        valid: false,
        touched: false,
        errorMsg: '',
      },
    ],
  };
  const [formState, dispatch] = useReducer(clientFormReducer, formInitialState);

  const inputChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: USER_INPUT_CLIENT,
      field: event.target.name,
      value: event.target.value,
    });
  };

  const inputBlurHandler = (event: ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: BLUR_INPUT_CLIENT,
      field: event.target.name,
    });
  };

  const inputFocusHandler = (event: ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: FOCUS_INPUT_CLIENT,
      field: event.target.name,
    });
  };

  const submitHandler = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const isFormValid =
      formState.fields
        .map((field) => {
          const result = validate(field.validations, field.value);
          return result.isValid;
        })
        .indexOf(false) === -1;

    if (!isFormValid) {
      dispatch({
        type: VALIDATE_FORM_CLIENT,
      });
      return;
    }

    const fields = formState.fields;

    const client: Client = {
      name: fields.find((field) => field.name === 'name')!.value,
      email: fields.find((field) => field.name === 'email')!.value,
      password: fields.find((field) => field.name === 'password')!.value,
    };

    addClientHandler(client);

    dispatch({
      type: CLEAN_UP_FORM_CLIENT,
    });
  };

  return (
    <StyledSignUpForm onSubmit={submitHandler}>
      <InputsWrapper>
        {formState.fields.map((field) => (
          <Input
            key={field.name}
            label={field.label}
            type={field.type}
            name={field.name}
            value={field.value}
            valid={field.valid}
            touched={field.touched}
            invalidMessage={field.errorMsg}
            onChange={inputChangeHandler}
            onBlur={inputBlurHandler}
            onFocus={inputFocusHandler}
          />
        ))}
      </InputsWrapper>
      <Button>{t('Cadastrar')}</Button>
    </StyledSignUpForm>
  );
};

export default SignUpForm;
