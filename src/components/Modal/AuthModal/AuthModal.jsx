import { createPortal } from 'react-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useScrollLock } from '../../../hooks/useScrollLock';
import { useEscapeClose } from '../../../hooks/useEscapeClose';
import ModalBackdrop from '../ModalBackdrop';
import ModalContainer from '../ModalContainer';
import { AUTH_CONFIG } from '../../../auth/authModalConfig';
import {
  Form,
  Input,
  ErrorMessage,
  SubmitBtn,
  FieldWrapper,
} from './AuthModal.styled';
import EyeIconBtn from '../../Buttons/EyeIconBtn/EyeIconBtn';
import { useState } from 'react';
import toast from 'react-hot-toast';

function AuthModal({ type = 'login', onClose }) {
  const [showPassword, setShowPassword] = useState(false);

  const config = AUTH_CONFIG[type] || AUTH_CONFIG.login;

  const {
    modalRootId,
    title,
    explanation,
    submitText,
    submittingText,
    schema,
    defaultValues,
    action,
    paddingY,
    paddingX,
  } = config;

  const modalRoot = document.getElementById(modalRootId);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues,
  });

  useScrollLock();
  useEscapeClose(onClose);

  async function submitData(data) {
    try {
      const successMessage = await action(data);
      toast.success(successMessage);
      reset();
      onClose?.();
    } catch (err) {
      toast.error(err.message || 'Authentication failed');
    }
  }

  function togglePasswordVisibility() {
    setShowPassword(prev => !prev);
  }

  if (!modalRoot) {
    return null;
  }

  return createPortal(
    <ModalBackdrop onClose={onClose}>
      <ModalContainer title={title} explanation={explanation} onClose={onClose}>
        <Form onSubmit={handleSubmit(submitData)}>
          {type === 'registration' && (
            <FieldWrapper>
              <Input {...register('name')} placeholder="Name" />
              {errors.name && (
                <ErrorMessage>{errors.name.message}</ErrorMessage>
              )}
            </FieldWrapper>
          )}
          <FieldWrapper>
            <Input {...register('email')} placeholder="Email" />
            {errors.email && (
              <ErrorMessage>{errors.email.message}</ErrorMessage>
            )}
          </FieldWrapper>
          <FieldWrapper>
            <Input
              {...register('password')}
              placeholder="Password"
              type={showPassword ? 'text' : 'password'}
              $hasRightIcon
            />
            <EyeIconBtn
              showPassword={showPassword}
              togglePasswordVisibility={togglePasswordVisibility}
            />
            {errors.password && (
              <ErrorMessage>{errors.password.message}</ErrorMessage>
            )}
          </FieldWrapper>
          <SubmitBtn
            type="submit"
            $paddingX={paddingX}
            $paddingY={paddingY}
            disabled={isSubmitting}
          >
            {isSubmitting ? submittingText : submitText}
          </SubmitBtn>
        </Form>
      </ModalContainer>
    </ModalBackdrop>,
    modalRoot
  );
}

export default AuthModal;
