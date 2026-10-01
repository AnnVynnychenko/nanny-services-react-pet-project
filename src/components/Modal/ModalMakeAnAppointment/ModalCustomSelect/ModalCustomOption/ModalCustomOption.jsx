import { components } from 'react-select';
import {
  OptionWrapper,
  NumberWrapper,
  ColonPart,
} from './ModalCustomOption.styled';

function ModalCustomOption(props) {
  const timeLabel = props.label ? props.label.split(':') : [];
  const [hours, minutes] = timeLabel;
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
