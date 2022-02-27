import {
  USER_INPUT_CLIENT,
  BLUR_INPUT_CLIENT,
  FOCUS_INPUT_CLIENT,
  VALIDATE_FORM_CLIENT,
  CLEAN_UP_FORM_CLIENT,
} from '../actions/clientForm';

import { validate } from '../../utils/validation';

import { FormReducer } from '../../types/form';

const changeInputHandler: FormReducer = (prevState, action) => {
  const updatedFields = prevState.fields.map(field => {
    if (field.name === action.field) {
      const stateField = prevState.fields.find(
        field => field.name === action.field
      );

      if (stateField) {
        const value = action.value ? action.value : '';
        const result = validate(stateField.validations, value);

        return {
          ...field,
          value,
          valid: result.isValid,
          errorMsg: result.message ? result.message : '',
        };
      }
    }

    return field;
  });

  return {
    ...prevState,
    fields: [...updatedFields],
  };
};

const blurInputHandler: FormReducer = (prevState, action) => {
  const field = prevState.fields.find(field => field.name === action.field);

  if (!field) {
    return prevState;
  }

  const result = validate(field.validations, field.value);

  const updatedFields = prevState.fields.map(field => {
    if (field.name === action.field) {
      return {
        ...field,
        valid: result.isValid,
        errorMsg: result.message ? result.message : '',
      };
    }

    return field;
  });

  return {
    ...prevState,
    fields: [...updatedFields],
  };
};

const focusInputHandler: FormReducer = (prevState, action) => {
  const updatedFields = prevState.fields.map(field => {
    if (field.name === action.field) {
      return {
        ...field,
        touched: true,
      };
    }

    return field;
  });

  return {
    ...prevState,
    fields: [...updatedFields],
  };
};

const validateFormHandler: FormReducer = (prevState, action) => {
  const updatedFields = prevState.fields.map(field => {
    const result = validate(field.validations, field.value);
    return {
      ...field,
      touched: true,
      valid: result.isValid,
      errorMsg: result.message ? result.message : '',
    };
  });

  return {
    ...prevState,
    fields: [...updatedFields],
  };
};

const cleanUpFormHandler: FormReducer = (prevState, action) => {
  const updatedFields = prevState.fields.map(field => {
    return {
      ...field,
      touched: false,
      valid: false,
      errorMsg: '',
      value: '',
    };
  });

  return {
    ...prevState,
    fields: [...updatedFields],
  };
};

export const clientFormReducer: FormReducer = (prevState, action) => {
  switch (action.type) {
    case USER_INPUT_CLIENT:
      return changeInputHandler(prevState, action);
    case BLUR_INPUT_CLIENT:
      return blurInputHandler(prevState, action);
    case FOCUS_INPUT_CLIENT:
      return focusInputHandler(prevState, action);
    case VALIDATE_FORM_CLIENT:
      return validateFormHandler(prevState, action);
    case CLEAN_UP_FORM_CLIENT:
      return cleanUpFormHandler(prevState, action);
    default:
      throw new Error('Invalid action in client reducer');
  }
};
