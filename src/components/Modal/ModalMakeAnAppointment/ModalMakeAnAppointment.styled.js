import styled from 'styled-components';
import ModalContainer from '../ModalContainer/ModalContainer';
import { CommonBtn } from '../../Buttons';
import {
  commonErrorMessageStyles,
  commonFieldWrapperStyles,
  commonFormFieldsStyles,
  commonSubmitBtnStyles,
} from '../commonFormFieldsStyles.styled';
import { clampBuilder } from '../../../helpers/clampBuilder';

export const ModalAppointmentWrapper = styled(ModalContainer)`
  max-width: ${clampBuilder(136, 600)};
`;

export const NannyWrapper = styled.figure`
  display: flex;
  gap: ${clampBuilder(4, 14)};
`;

export const NannyAvatar = styled.img`
  width: ${clampBuilder(12, 44)};
  height: ${clampBuilder(12, 44)};
  border-radius: ${clampBuilder(4, 15)};
`;

export const NannyNameWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  margin-bottom: ${clampBuilder(12, 40)};
`;

export const Nanny = styled.span`
  font-size: ${clampBuilder(8, 12)};
  font-weight: 500;
  line-height: 1.3;
  color: var(--grey-text-color);
`;

export const NannyName = styled.figcaption`
  font-size: ${clampBuilder(12, 16)};
  font-weight: 500;
  line-height: 1.5;
  color: var(--dark-text-color);
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: ${clampBuilder(4, 16)};
`;

export const FieldWrapper = styled.div`
  ${commonFieldWrapperStyles}
`;

export const DetailsGroup = styled.div`
  display: flex;
  flex-direction: row;
  gap: ${clampBuilder(4, 8)};
  width: 100%;

  & > ${FieldWrapper} {
    flex: 1 1 50%;
    width: 50%;
    min-width: 0;
  }
`;

export const ErrorMessage = styled.p`
  ${commonErrorMessageStyles}
`;

export const Input = styled.input`
  ${commonFormFieldsStyles};
`;

export const SelectGroup = styled.div`
  display: flex;
  ${commonFormFieldsStyles};
`;

export const Textarea = styled.textarea`
  ${commonFormFieldsStyles};
  resize: none;
`;

export const SubmitBtn = styled(CommonBtn)`
  ${commonSubmitBtnStyles}
`;
