export interface Form {
  isValid: boolean;
  fields: FormField[];
}

export interface FormField {
  name: string;
  type: string;
  label: string;
  value: string;
  validations: Validation[];
  valid: boolean;
  touched: boolean;
  errorMsg: string;
}

export interface Validation {
  rule: string;
  message: string;
}

export interface FormReducer {
  (prevState: Form, action: Action): Form;
}

export interface Action {
  type: string;
  field?: string;
  value?: string;
}
