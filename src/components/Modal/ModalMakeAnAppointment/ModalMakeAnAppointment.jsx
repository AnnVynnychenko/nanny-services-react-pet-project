import { createPortal } from 'react-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import toast from 'react-hot-toast';
import { makeAnAppointmentYapSchema } from '../../../yup/makeAnAppointmentYupSchema';
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

const modalAppointmentRoot = document.getElementById('modal-root');

function ModalMakeAnAppointment({ nanny, onClose }) {
  const { avatar_url, name, id } = nanny || {};
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    control,
  } = useForm({
    resolver: yupResolver(makeAnAppointmentYapSchema),
    defaultValues: {
      address: '',
      telephone: '',
      childAge: '',
      meetingTime: '',
      email: '',
      parentName: '',
      comment: '',
    },
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

  if (!modalAppointmentRoot) {
    console.error("Target container '#modal-root' is not in the DOM.");
    return null;
  }

  return createPortal(
    <ModalBackdrop onClose={onClose}>
      <ModalAppointmentWrapper
        title="Make an appointment with a babysitter"
        explanation=" Arranging a meeting with a caregiver for your child is the first step
          to creating a safe and comfortable environment. Fill out the form
          below so we can match you with the perfect care partner."
        onClose={onClose}
      >
        <NannyWrapper>
          <NannyAvatar src={avatar_url} alt={name} />
          <NannyNameWrapper>
            <Nanny>Your nanny</Nanny>
            <NannyName>{name}</NannyName>
          </NannyNameWrapper>
        </NannyWrapper>
        <Form onSubmit={handleSubmit(submitData)}>
          <DetailsGroup>
            <FieldWrapper>
              <Input {...register('address')} placeholder="Address" />
              {errors.address && (
                <ErrorMessage>{errors.address.message}</ErrorMessage>
              )}
            </FieldWrapper>
            <FieldWrapper>
              <Input type="tel" {...register('telephone')} placeholder="+420" />
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
            <Input {...register('email')} placeholder="Email" />
            {errors.email && (
              <ErrorMessage>{errors.email.message}</ErrorMessage>
            )}
          </FieldWrapper>
          <FieldWrapper>
            <Input
              {...register('parentName')}
              placeholder="Father's or mother's name"
            />
            {errors.parentName && (
              <ErrorMessage>{errors.parentName.message}</ErrorMessage>
            )}
          </FieldWrapper>

          <Textarea {...register('comment')} placeholder="Comment" rows="3" />
          <SubmitBtn type="submit" title="Send" paddingX={18} />
        </Form>
      </ModalAppointmentWrapper>
    </ModalBackdrop>,
    modalAppointmentRoot
  );
}

export default ModalMakeAnAppointment;
