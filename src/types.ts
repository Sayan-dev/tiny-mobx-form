export interface IField {
  form: IForm;
  name: string;
  label?: string;
  placeholder?: string;
  initialValue?: string;
  value?: string;
  isTouched: boolean;
  validation: string;
  isValid: boolean;
  isDirty: boolean;
  hasErrors: boolean;
  errors: string[];
  reset(): void;
}

export interface IFormSchema {
  name: string;
  label?: string;
  placeholder?: string;
  validation?: string;
  initialValue?: string;
}

export interface IForm {
  fieldNames: string[];
  fields: Fields;
  isValid: boolean;
  errors: string[];
  isDirty: boolean;
  values: Values;
  showErrors(): void;
  reset(): void;
}

export interface Fields {
  [key: string]: IField;
}

export interface Values {
  [key: string]: string;
}

export interface InitialValues {
  [key: string]: string;
}

export interface Validators {
  [name: string]: Validator;
}

export type Validator = (field: IField, ...args: any[]) => undefined | string;
