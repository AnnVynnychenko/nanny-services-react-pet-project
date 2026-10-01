import { makeAnAppointmentYapSchema } from '../yup/makeAnAppointmentYupSchema';

export const APPOINTMENT_CONFIG = {
  modalRootId: 'modal-root',
  title: 'Make an appointment with a babysitter',
  explanation:
    'Arranging a meeting with a caregiver for your child is the first step to creating a safe and comfortable environment. Fill out the form below so we can match you with the perfect care partner.',
  nannyTitle: 'Your nanny',
  submitText: 'Send',
  submittingText: 'Sending...',
  schema: makeAnAppointmentYapSchema,
  defaultValues: {
    address: '',
    telephone: '',
    childAge: '',
    meetingTime: '',
    email: '',
    parentName: '',
    comment: '',
  },
  paddingX: 18,
  paddingY: 16,
};
