import { string, number, object } from 'yup';

const phoneRegExp = /^\+?[0-9\s-]{7,18}$/;
const emailRegexp = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const trimString = string().transform(value =>
  typeof value === 'string' ? value.trim() : value
);

export const makeAnAppointmentYapSchema = object().shape({
  address: trimString.required('Address is required'),
  telephone: trimString
    .required('Telephone is required')
    .matches(phoneRegExp, 'Format: +420 123 456 789'),
  childAge: number()
    .required('Child age is required')
    .typeError('Child age must be a number')
    .min(0, 'Age cannot be less than 0')
    .max(18, 'Age cannot be greater than 18'),
  meetingTime: trimString.required('Please, choose the meeting time'),
  email: trimString
    .required('Email is required')
    .matches(emailRegexp, 'Invalid email format (example: user@gmail.com)'),
  parentName: trimString.required("Father's or mother's name is required"),
  comment: trimString,
});
