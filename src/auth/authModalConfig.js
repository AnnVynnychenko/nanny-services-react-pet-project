import { logInYapSchema } from '../yup/logInYapSchema';
import { registrationYapSchema } from '../yup/registrationYapSchema';
import { logInUser, registerUser } from './authentication';

export const AUTH_CONFIG = {
  login: {
    modalRootId: 'modal-root',
    title: 'Log In',
    explanation:
      'Welcome back! Please enter your credentials to access your account and continue your babysitter search.',
    submitText: 'Log In',
    submittingText: 'Logging in...',
    schema: logInYapSchema,
    defaultValues: { email: '', password: '' },
    action: async ({ email, password }) => {
      const user = await logInUser(email, password);
      return `Welcome back, ${user.displayName || 'User'}!`;
    },
    paddingX: 18,
    paddingY: 18,
  },
  registration: {
    modalRootId: 'modal-root',
    title: 'Registration',
    explanation:
      'Thank you for your interest in our platform! In order to register, we need some information. Please provide us with the following information.',
    submitText: 'Sign Up',
    submittingText: 'Signing up...',
    schema: registrationYapSchema,
    defaultValues: { name: '', email: '', password: '' },
    action: async ({ email, password, name }) => {
      const user = await registerUser(email, password, name);
      return `Welcome ${user.displayName || 'User'}! Your account has been created.`;
    },
    paddingX: 18,
    paddingY: 18,
  },
};
