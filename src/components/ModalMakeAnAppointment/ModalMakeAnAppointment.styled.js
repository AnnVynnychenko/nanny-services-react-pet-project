import styled, { css } from 'styled-components';
import { clampBuilder } from '../../helpers/clampBuilder';
import ModalContainer from '../Modal/ModalContainer/ModalContainer';
import { CommonBtn } from '../Buttons/Buttons';

const commonFormFieldsStyles = css`
  width: 100%;
  padding: ${clampBuilder(4, 16)} ${clampBuilder(8, 18)};
  border: 1px solid var(--border-color);
  border-radius: ${clampBuilder(4, 12)};
  font-size: ${clampBuilder(8, 16)};
  font-weight: 500;
  line-height: 1.25;
  transition: var(--transition-thumb);

  &::placeholder {
    font-size: ${clampBuilder(8, 16)};
    font-weight: 400;
    line-height: 1.25;
    color: var(--dark-text-color);
  }

  &:hover,
  &:focus {
    border-color: var(--accent-color);
  }
`;

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
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
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
  position: absolute;
  left: ${clampBuilder(8, 12)};
  top: 2px;
  font-size: ${clampBuilder(8, 10)};
  font-weight: 400;
  line-height: 1.2;
  color: var(--error-color);
  pointer-events: none;
  white-space: nowrap;
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
  width: 100%;
  margin-top: ${clampBuilder(8, 24)};
  border: 1px solid transparent;

  &:hover,
  &:focus-visible {
    color: var(--accent-color);
    background-color: var(--white-color);
    border-color: var(--accent-color);
  }
`;
