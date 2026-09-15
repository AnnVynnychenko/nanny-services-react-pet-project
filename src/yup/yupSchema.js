import { string, number, object } from 'yup';

const phoneRegExp = /^\+?[0-9\s-]{7,18}$/;
const trimString = string().transform(value =>
  typeof value === 'string' ? value.trim() : value
);

export const appointmentSchema = object().shape({
  address: trimString.required('Address is required'),
  telephone: trimString
    .matches(phoneRegExp, 'Format: +420 123 456 789 or +380-67-123-4567')
    .required('Telephone is required'),
  childAge: number()
    .typeError('Child age must be a number')
    .min(0, 'Age cannot be less than 0')
    .max(18, 'Age cannot be greater than 18')
    .required('Child age is required'),
  meetingTime: trimString.required('Please, choose the meeting time'),
  email: trimString.email('Invalid email').required('Email is required'),
  parentName: trimString.required("Father's or mother's name is required"),
  comment: trimString,
});
