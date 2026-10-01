import { createPortal } from 'react-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import toast from 'react-hot-toast';
import ModalBackdrop from '../ModalBackdrop';
import { useScrollLock } from '../../../hooks/useScrollLock';
import { useEscapeClose } from '../../../hooks/useEscapeClose';
import {
  ModalAppointmentWrapper,
  NannyWrapper,
  NannyAvatar,
  NannyNameWrapper,
  Nanny,
  NannyName,
  Form,
  DetailsGroup,
  Input,
  Textarea,
  SubmitBtn,
  FieldWrapper,
  ErrorMessage,
} from './ModalMakeAnAppointment.styled';
import ModalCustomSelect from './ModalCustomSelect';
import { APPOINTMENT_CONFIG } from '../../../data/appointmentModalConfig';

function ModalMakeAnAppointment({ nanny, onClose }) {
  const {
    modalRootId,
    title,
    explanation,
    nannyTitle,
    submitText,
    submittingText,
    schema,
    defaultValues,
    paddingX,
    paddingY,
  } = APPOINTMENT_CONFIG;

  const modalRoot = document.getElementById(modalRootId);

  const { avatar_url = '', name = 'Nanny', id = '' } = nanny || {};

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
    control,
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues,
  });

  useScrollLock();
  useEscapeClose(onClose);

  function submitData(data) {
    const cleanPhone = data.telephone.replace(/[\s-]/g, '');

    const formattedData = {
      ...data,
      telephone: cleanPhone,
      childAge: Number(data.childAge),
      nannyId: id,
      nannyName: name,
    };

    console.log('Sending data to backend:', formattedData);

    toast.success('Appointment successfully booked!');

    reset();
    onClose?.();
  }

  if (!modalRoot) {
    return null;
  }

  return createPortal(
    <ModalBackdrop onClose={onClose}>
      <ModalAppointmentWrapper
        title={title}
        explanation={explanation}
        onClose={onClose}
      >
        <NannyWrapper>
          <NannyAvatar src={avatar_url} alt={name} />
          <NannyNameWrapper>
            <Nanny>{nannyTitle}</Nanny>
            <NannyName>{name}</NannyName>
          </NannyNameWrapper>
        </NannyWrapper>
        <Form onSubmit={handleSubmit(submitData)}>
          <DetailsGroup>
            <FieldWrapper>
              <Input
                {...register('address')}
                placeholder="Address"
                autoComplete="street-address"
              />
              {errors.address && (
                <ErrorMessage>{errors.address.message}</ErrorMessage>
              )}
            </FieldWrapper>
            <FieldWrapper>
              <Input
                type="tel"
                {...register('telephone')}
                placeholder="+420"
                autoComplete="tel"
              />
              {errors.telephone && (
                <ErrorMessage>{errors.telephone.message}</ErrorMessage>
              )}
            </FieldWrapper>
          </DetailsGroup>
          <DetailsGroup>
            <FieldWrapper>
              <Input
                type="number"
                {...register('childAge')}
                placeholder="Child's age"
              />
              {errors.childAge && (
                <ErrorMessage>{errors.childAge.message}</ErrorMessage>
              )}
            </FieldWrapper>
            <FieldWrapper>
              <ModalCustomSelect control={control} />
              {errors.meetingTime && (
                <ErrorMessage>{errors.meetingTime.message}</ErrorMessage>
              )}
            </FieldWrapper>
          </DetailsGroup>
          <FieldWrapper>
            <Input
              {...register('email')}
              placeholder="Email"
              autoComplete="email"
            />
            {errors.email && (
              <ErrorMessage>{errors.email.message}</ErrorMessage>
            )}
          </FieldWrapper>
          <FieldWrapper>
            <Input
              {...register('parentName')}
              placeholder="Father's or mother's name"
              autoComplete="name"
            />
            {errors.parentName && (
              <ErrorMessage>{errors.parentName.message}</ErrorMessage>
            )}
          </FieldWrapper>

          <Textarea {...register('comment')} placeholder="Comment" rows="3" />
          <SubmitBtn
            type="submit"
            $paddingX={paddingX}
            $paddingY={paddingY}
            disabled={isSubmitting}
          >
            {isSubmitting ? submittingText : submitText}
          </SubmitBtn>
        </Form>
      </ModalAppointmentWrapper>
    </ModalBackdrop>,
    modalRoot
  );
}

export default ModalMakeAnAppointment;
