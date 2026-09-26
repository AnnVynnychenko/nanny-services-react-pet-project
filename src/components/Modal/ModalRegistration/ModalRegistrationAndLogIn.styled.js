import styled from 'styled-components';
import {
  commonErrorMessageStyles,
  commonFieldWrapperStyles,
  commonFormFieldsStyles,
  commonSubmitBtnStyles,
} from '../commonFormFieldsStyles.styled';
import { CommonBtn } from '../../Buttons/Buttons';
import { clampBuilder } from '../../../helpers/clampBuilder';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: ${clampBuilder(8, 18)};
  line-height: 1;
`;

export const Input = styled.input`
  ${commonFormFieldsStyles};
`;

export const ErrorMessage = styled.p`
  ${commonErrorMessageStyles}
`;

export const SubmitBtn = styled(CommonBtn)`
  ${commonSubmitBtnStyles}
  margin-top: ${clampBuilder(8, 22)};
`;

export const FieldWrapper = styled.div`
  ${commonFieldWrapperStyles}
`;
