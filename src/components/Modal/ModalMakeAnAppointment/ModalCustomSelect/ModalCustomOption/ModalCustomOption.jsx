import { components } from 'react-select';
import {
  OptionWrapper,
  NumberWrapper,
  ColonPart,
} from './ModalCustomOption.styled';

function ModalCustomOption(props) {
  const [hours, minutes] = props.label.split(':');
  return (
    <components.Option {...props}>
      <OptionWrapper>
        <NumberWrapper>{hours}</NumberWrapper>
        <ColonPart>:</ColonPart>
        <NumberWrapper>{minutes}</NumberWrapper>
      </OptionWrapper>
    </components.Option>
  );
}

export default ModalCustomOption;
