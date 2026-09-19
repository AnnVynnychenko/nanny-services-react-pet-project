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
} from './ModalRegistrationAndLogIn.styled';
import { registrationYapSchema } from '../../../yup/registrationYapSchema';
import { registerUser } from '../../../auth/authentication';

const modalRegistrationRoot = document.getElementById('modal-root');

function ModalRegistration({ onClose }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(registrationYapSchema),
    defaultValues: {
      name: '',
      email: '',
      password: '',
    },
  });

  useScrollLock();
  useEscapeClose(onClose);

  async function submitData(data) {
    const { email, password, name } = data;
    try {
      await registerUser(email, password, name);
      reset();
      onClose?.();
    } catch (err) {
      console.error('Registration failed:', err.message);
    }
  }

  if (!modalRegistrationRoot) {
    console.error("Target container '#modal-root' is not in the DOM.");
    return null;
  }

  return createPortal(
    <ModalBackdrop onClose={onClose}>
      <ModalContainer
        title="Registration"
        explanation="Thank you for your interest in our platform! In order to register, we need some information. Please provide us with the following information."
        onClose={onClose}
      >
        <Form onSubmit={handleSubmit(submitData)}>
          <FieldWrapper>
            <Input {...register('name')} placeholder="Name" />
            {errors.name && <ErrorMessage>{errors.name.message}</ErrorMessage>}
          </FieldWrapper>
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
          <SubmitBtn type="submit" title="Sign Up" paddingX={18} />
        </Form>
      </ModalContainer>
    </ModalBackdrop>,
    modalRegistrationRoot
  );
}

export default ModalRegistration;
