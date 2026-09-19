import { createPortal } from 'react-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useScrollLock } from '../../../hooks/useScrollLock';
import { useEscapeClose } from '../../../hooks/useEscapeClose';
import ModalBackdrop from '../ModalBackdrop';
import ModalContainer from '../ModalContainer';
import {
  Form,
  Input,
  ErrorMessage,
  SubmitBtn,
  FieldWrapper,
} from '../ModalRegistration/ModalRegistrationAndLogIn.styled';
import { logInYapSchema } from '../../../yup/logInYapSchema';
import { logInUser } from '../../../auth/authentication';

const modalLogInRoot = document.getElementById('modal-root');

function ModalLogIn({ onClose }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(logInYapSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  useScrollLock();
  useEscapeClose(onClose);

  async function submitData(data) {
    const { email, password } = data;
    try {
      await logInUser(email, password);
      reset();
      onClose?.();
    } catch (err) {
      console.error('Log in failed:', err.message);
    }
  }

  if (!modalLogInRoot) {
    console.error("Target container '#modal-root' is not in the DOM.");
    return null;
  }

  return createPortal(
    <ModalBackdrop onClose={onClose}>
      <ModalContainer
        title="Log In"
        explanation="Welcome back! Please enter your credentials to access your account and continue your babysitter search."
        onClose={onClose}
      >
        <Form onSubmit={handleSubmit(submitData)}>
          <FieldWrapper>
            <Input {...register('email')} placeholder="Email" />
            {errors.email && (
              <ErrorMessage>{errors.email.message}</ErrorMessage>
            )}
          </FieldWrapper>
          <FieldWrapper>
            <Input {...register('password')} placeholder="Password" />
            {errors.password && (
              <ErrorMessage>{errors.password.message}</ErrorMessage>
            )}
          </FieldWrapper>
          <SubmitBtn type="submit" title="Log In" paddingX={18} />
        </Form>
      </ModalContainer>
    </ModalBackdrop>,
    modalLogInRoot
  );
}

export default ModalLogIn;
