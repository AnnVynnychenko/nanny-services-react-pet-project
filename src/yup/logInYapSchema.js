import { string, object } from 'yup';

const trimString = string().transform(value =>
  typeof value === 'string' ? value.trim() : value
);
const emailRegexp = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

export const logInYapSchema = object().shape({
  email: trimString
    .required('Email is required')
    .matches(emailRegexp, 'Invalid email format (example: user@gmail.com)'),
  password: trimString
    .required('Password is required')
    .min(6, 'Password must be at least 6 characters'),
});
