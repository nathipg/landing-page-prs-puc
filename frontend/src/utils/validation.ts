import { Validation } from '../types/form';

interface validateType {
  (rules: Validation[], value: string): validateResponseType;
}

interface validateResponseType {
  isValid: boolean;
  message?: string;
}

interface isValidType {
  (rule: Validation, value: string): boolean;
}

export const validate: validateType = (validations, value) => {
  const response: validateResponseType = {
    isValid: true,
  };

  for (const validation of validations) {
    const result = isValid(validation, value);

    if (!result) {
      response.isValid = false;
      response.message = validation.message;
      break;
    }
  }

  return response;
};

const isValid: isValidType = (validation, value) => {
  let result = true;

  switch (validation.rule) {
    case 'required':
      result = value.trim().length > 0;
      break;
    case 'min-two-words':
      result = value.trim().indexOf(' ') !== -1;
      break;
    case 'email':
      result = !!value.match(
        /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
      break;
    case 'password':
      result = value.trim().length >= 5;
      break;
    default:
      break;
  }

  return result;
};
